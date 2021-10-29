/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.util;

import lombok.Getter;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import java.lang.annotation.Annotation;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Spring容器上下文
 *
 * @author Jason
 */
@Component
public class SpringContextUtil implements ApplicationContextAware {
    @Getter
    private static ApplicationContext context;

    public static <T> T getBean(Class<? extends T> beanClass) {
        return context.getBean(beanClass);
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        SpringContextUtil.context = applicationContext;
    }

    public static <T> List<T> getBeans(Class<T> type) {
        Map<String, T> types = context.getBeansOfType(type);
        return new ArrayList<T>(types.values());
    }

    public static Map<String, Object> getBeansWithAnnotation(Class<? extends Annotation> annotationClass) {
        return context.getBeansWithAnnotation(annotationClass);
    }

    public static <T> Map<String, T> getBeansOfType(Class<T> clazz){
        return context.getBeansOfType(clazz);
    }
}
