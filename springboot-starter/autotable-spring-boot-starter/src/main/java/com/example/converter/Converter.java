package com.example.converter;

import java.io.Serializable;

/**
 * 类型转换接口<br>
 * 
 * 根据字段名称进行转换
 * 
 * @param <T> 目标数据类型
 */
public interface Converter<T extends Serializable> {
	/**
	 * 类型转换
	 * 
	 * @param clazz	实体类
	 * @param columnName	字段名称
	 * @param sourceValue	数据库字段值
	 * @return 目标类型值
	 */
	T converter(Class<?> clazz, String columnName, Object sourceValue);
}
