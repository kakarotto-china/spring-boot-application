/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.converter;

/**
 * 类型转换接口<br>
 * 
 * 根据字段名称进行转换
 * 
 * @author Jason
 *
 * @param <S> 原数据类型
 * @param <T> 目标数据类型
 */
public interface Converter<S, T> {
	/**
	 * 是否进行转换
	 * 
	 * @param clazz 转换的实体
	 * @return boolean
	 */
	boolean isConverter(Class<?> clazz);

	/**
	 * 类型转换
	 * 
	 * @param clazz	实体类
	 * @param columnName	字段名称
	 * @param sourceValue	数据库字段值
	 * @return 目标类型值
	 */
	T converter(Class<?> clazz, String columnName, S sourceValue);
}
