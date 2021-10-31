package com.example.enums;

import java.io.Serializable;

/**
 * 添加对枚举转换的支持
 *
 * @param <T> T extends Serializable
 */
public interface AtEnum<T extends Serializable> {
    /**
     * 获取java类型
     *
     * @return Class<T>
     */
    Class<T> getJavaType();
}
