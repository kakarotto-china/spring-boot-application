package com.example.util;

import com.example.model.AtField;

import lombok.extern.slf4j.Slf4j;

import org.springframework.core.annotation.AnnotationUtils;

import java.lang.annotation.Annotation;
import java.lang.reflect.AnnotatedElement;
import java.util.ArrayList;
import java.util.List;

/**
 * 注解操作工具类
 */
@Slf4j
public class AnnotationUtil extends cn.hutool.core.annotation.AnnotationUtil {
    public static <A extends Annotation> A getAnnotation(AnnotatedElement annotatedElement, Class<A> annotationClass) {
        return AnnotationUtils.getAnnotation(annotatedElement, annotationClass);
    }

//    /**
//     * 获取注解上的值
//     *
//     * @param <T>           接收的类型
//     * @param annotation    注解对象
//     * @param attributeName 注解属性值
//     * @param defaultValue  如果属性值为空,则返回该默认值
//     * @return T
//     */
//    public static <T> T getValue(Annotation annotation, String attributeName, T defaultValue) {
//        T value = ReflectUtil.invokeMethod(annotation.annotationType(), annotation, attributeName);
//        if (ObjectUtil.isNotEmpty(value)) {
//            return value;
//        }
//        if (ReflectUtil.isAnnotation(annotation.annotationType(), AliasFor.class, attributeName)) {
//            AliasFor aliasFor = ReflectUtil.getAnnotation(annotation.annotationType(), AliasFor.class, attributeName);
//            String attribute = StrUtil.isBlank(Objects.requireNonNull(aliasFor).value())
//                    ? aliasFor.attribute()
//                    : aliasFor.value();
//            return ReflectUtil.invokeMethod(annotation.annotationType(), annotation, attribute);
//        }
//        return defaultValue;
//    }
//
//    /**
//     * 判断对象知否为空
//     *
//     * @param <T>
//     * @param value
//     * @return
//     */
//    private static <T> boolean isEmpty(T value) {
//        return value == null || (value instanceof String && StrUtil.isBlank(value.toString())) || (
//                value instanceof Collection && ((Collection) value).isEmpty()) || (value instanceof Map
//                && ((Map) value).isEmpty());
//    }

    /**
     * 根据注解获取字段
     *
     * @param type           类
     * @param annotationType 注解
     * @return 字段集合
     */
    public static List<AtField> fieldsByAnnotation(Class<?> type, Class<? extends Annotation> annotationType) {
        List<AtField> list = new ArrayList<>();
        List<AtField> fields = ReflectUtil.getAtFields(type);
        for (AtField field : fields) {
            if (field.getField().isAnnotationPresent(annotationType)) {
                list.add(field);
            }
        }
        return list;
    }

}
