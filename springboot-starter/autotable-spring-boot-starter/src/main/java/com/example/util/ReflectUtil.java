package com.example.util;

import com.example.model.AtField;
import lombok.NonNull;
import lombok.SneakyThrows;

import java.lang.annotation.Annotation;
import java.lang.reflect.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * 类操作工具类
 */
public class ReflectUtil extends cn.hutool.core.util.ReflectUtil {
    /**
     * 获取类的所有属性列表
     *
     * @param type 类型
     * @return 属性列表
     */
    public static List<AtField> getAtFields(@NonNull Class<?> type) {
        List<AtField> list = new ArrayList<>(10);
        // 获得当前类的所有属性
        for (Field field : getFields(type)) { // 此方法会获取父类字段
            list.add(new AtField(type, field));
        }
        return list;
    }

    /**
     * 给指定属性设置值
     *
     * @param field 属性对象
     * @param obj   实例对象
     * @param value 值
     */
    public static void setAtFieldValue(AtField field, Object obj, Object value) {
        setFieldValue(obj, field.getField(), value);
    }

}
