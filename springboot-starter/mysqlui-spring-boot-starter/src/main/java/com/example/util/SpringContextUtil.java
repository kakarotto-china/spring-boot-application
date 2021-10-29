package com.example.util;

import cn.hutool.core.util.ReflectUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.extra.spring.SpringUtil;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.support.BeanDefinitionBuilder;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.stereotype.Component;
import org.springframework.util.ClassUtils;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.servlet.mvc.method.RequestMappingInfo;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import java.lang.reflect.Method;

/**
 * @author yWX978481
 * @since 2021/9/30
 */
@Component
@Slf4j
public class SpringContextUtil extends SpringUtil {
    private static DefaultListableBeanFactory defaultListableBeanFactory;

    private static RequestMappingHandlerMapping requestMappingHandlerMapping;

    @Autowired
    public SpringContextUtil(DefaultListableBeanFactory defaultListableBeanFactory,
        RequestMappingHandlerMapping requestMappingHandlerMapping) {
        SpringContextUtil.defaultListableBeanFactory = defaultListableBeanFactory;
        SpringContextUtil.requestMappingHandlerMapping = requestMappingHandlerMapping;
    }

    private static <T> T registerBean(Class<T> beanClass, Object... constructParams) {
        String beanName = StrUtil.lowerFirst(beanClass.getSimpleName());
        if (defaultListableBeanFactory.containsBean(beanName)) {
            return getBean(beanName);
        }
        BeanDefinitionBuilder beanDefinitionBuilder = BeanDefinitionBuilder.genericBeanDefinition(beanClass);
        defaultListableBeanFactory.registerBeanDefinition(beanName, beanDefinitionBuilder.getBeanDefinition());
        log.info("[registerBean] 注册bean：{}成功", beanName);
        return getBean(beanName);
    }

    public static <T> void unregisterBean(Class<T> beanClass) {
        String beanName = StrUtil.lowerFirst(beanClass.getSimpleName());
        if (defaultListableBeanFactory.containsBean(beanName)) {
            defaultListableBeanFactory.removeBeanDefinition(beanName);
            log.info("[registerBean] 取消注册bean：{}成功", beanName);
        }
    }

    /**
     * 去掉Controller的Mapping
     *
     * @param beanClass beanClass
     */
    public static <T> void unregisterController(Class<T> beanClass) {
        scanControllerMethod(beanClass, (requestMappingInfo, method) -> {
            if (requestMappingHandlerMapping.getHandlerMethods().containsKey(requestMappingInfo)) {
                requestMappingHandlerMapping.unregisterMapping(requestMappingInfo);
                log.info("[registerController] 取消注册成功{}->{}", requestMappingInfo, method);
            }
        });
        // 取消注册bean
        unregisterBean(beanClass);
    }

    /**
     * 注册Controller
     *
     * @param beanClass beanClass
     */
    @SneakyThrows
    public static <T> T registerController(Class<T> beanClass) {
        // 注册bean
        T controller = registerBean(beanClass);
        // 注册controller mapping
        scanControllerMethod(beanClass, (requestMappingInfo, method) -> {
            // 判断是否已注册
            if (requestMappingHandlerMapping.getHandlerMethods().containsKey(requestMappingInfo)) {
                log.info("[registerController] 已注册{}->{}", requestMappingInfo, method);
            } else {
                requestMappingHandlerMapping.registerMapping(requestMappingInfo, controller, method);
                log.info("[registerController] 注册成功{}->{}", requestMappingInfo, method);
            }
        });
        return controller;
    }

    private static <T> void scanControllerMethod(Class<T> controllerClass, MappingExecutor mappingExecutor) {
        ReflectionUtils.doWithMethods(controllerClass, method -> {
            try {
                Method specificMethod = ClassUtils.getMostSpecificMethod(method, controllerClass);
                // 获取每个方法的映射信息
                RequestMappingInfo requestMappingInfo = ReflectUtil.invoke(requestMappingHandlerMapping,
                    "getMappingForMethod", specificMethod, controllerClass);
                if (requestMappingInfo != null) {
                    // 执行mapping操作
                    mappingExecutor.doMapping(requestMappingInfo, specificMethod);
                }
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }, ReflectionUtils.USER_DECLARED_METHODS);
    }

    @FunctionalInterface
    private interface MappingExecutor {
        void doMapping(RequestMappingInfo requestMappingInfo, Method method);
    }
}
