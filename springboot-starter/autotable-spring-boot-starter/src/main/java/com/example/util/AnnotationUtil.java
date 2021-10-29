/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.util;

import com.example.model.AtField;

import cn.hutool.core.util.StrUtil;
import lombok.extern.slf4j.Slf4j;

import org.springframework.core.annotation.AliasFor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.core.type.classreading.CachingMetadataReaderFactory;
import org.springframework.core.type.classreading.MetadataReader;
import org.springframework.core.type.classreading.MetadataReaderFactory;
import org.springframework.core.type.filter.AnnotationTypeFilter;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Objects;

/**
 * 注解操作工具类
 *
 * @author Jason
 */
@Slf4j
public class AnnotationUtil {
    private static final ResourcePatternResolver RESOURCE_PATTERN_RESOLVER = new PathMatchingResourcePatternResolver();

    private static final MetadataReaderFactory READER_FACTORY = new CachingMetadataReaderFactory(
        RESOURCE_PATTERN_RESOLVER);

    /**
     * 获取注解上的值
     *
     * @param <T> 接收的类型
     * @param annotation 注解对象
     * @param attributeName 注解属性值
     * @param defaultValue 如果属性值为空,则返回该默认值
     * @return T
     */
    public static <T> T getValue(Annotation annotation, String attributeName, T defaultValue) {
        T value = ClassUtil.invokeMethod(annotation.annotationType(), annotation, attributeName);
        if (isEmpty(value)) {
            if (ClassUtil.isAnnotation(annotation.annotationType(), AliasFor.class, attributeName)) {
                AliasFor aliasFor = ClassUtil.getAnnotation(annotation.annotationType(), AliasFor.class, attributeName);
                String attribute = StrUtil.isBlank(Objects.requireNonNull(aliasFor).value())
                    ? aliasFor.attribute()
                    : aliasFor.value();
                return ClassUtil.invokeMethod(annotation.annotationType(), annotation, attribute);
            }
            return defaultValue;
        }
        return value;
    }

    /**
     * 判断对象知否为空
     *
     * @param <T>
     * @param value
     * @return
     */
    private static <T> boolean isEmpty(T value) {
        return value == null || (value instanceof String && StrUtil.isBlank(value.toString())) || (
            value instanceof Collection && ((Collection) value).isEmpty()) || (value instanceof Map
            && ((Map) value).isEmpty());
    }

    /**
     * 根据注解扫描类
     *
     * @param packageName 包名
     * @param annotationType 注解
     * @return 类集合
     * @throws IOException IO异常
     * @throws ClassNotFoundException 类找不到异常
     */
    public static List<Class<?>> scannerByAnnotation(String packageName, Class<? extends Annotation> annotationType)
        throws IOException, ClassNotFoundException {
        String classpathAllUrlPrefix = ResourcePatternResolver.CLASSPATH_ALL_URL_PREFIX + packageName.replace('.', '/')
            + "/**/*.class";
        Resource[] resources = RESOURCE_PATTERN_RESOLVER.getResources(classpathAllUrlPrefix);

        AnnotationTypeFilter filter = new AnnotationTypeFilter(annotationType);
        List<Class<?>> list = new ArrayList<>();
        log.trace("正在扫描:{}", classpathAllUrlPrefix);
        for (Resource resource : resources) {
            MetadataReader reader = READER_FACTORY.getMetadataReader(resource);
            if (filter.match(reader, READER_FACTORY)) {
                Class<?> type = Class.forName(reader.getClassMetadata().getClassName());
                list.add(type);
                log.trace("扫描结果:{}", type.getName());
            }
        }
        return list;
    }

    /**
     * 根据注解获取字段
     *
     * @param type 类
     * @param annotationType 注解
     * @return 字段集合
     */
    public static List<AtField> fieldsByAnnotation(Class<?> type, Class<? extends Annotation> annotationType) {
        List<AtField> list = new ArrayList<>();
        List<AtField> fields = ClassUtil.getFields(type);
        for (AtField field : fields) {
            if (field.getField().isAnnotationPresent(annotationType)) {
                list.add(field);
            }
        }
        return list;
    }

}
