/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;

/**
 * 反射包装类: Field
 * 
 * @author Jason
 *
 */
@Data
@AllArgsConstructor
public class AtField {
	/**
	 * 来源Class
	 */
	private Class<?> sourceClass;
	/**
	 * 字段类型
	 */
	private Field field;

	/**
	 * 获取属性上的注解
	 * 
	 * @param <T>             注解类型
	 * @param annotationClass 注解类型
	 * @return 注解对象
	 */
	public <T extends Annotation> T getDeclaredAnnotation(Class<T> annotationClass) {
		return field.getDeclaredAnnotation(annotationClass);
	}

	/**
	 * 获得属性的类型
	 * 
	 * @return 属性类型
	 */
	public Class<?> getType() {
		return field.getType();
	}

	/**
	 * 获得属性名称
	 * 
	 * @return 属性名称
	 */
	public String getName() {
		return field.getName();
	}

	/**
	 * 检测注解是否存在
	 * 
	 * @param annotationClass 注解类型
	 * @return boolean
	 */
	public boolean isAnnotationPresent(Class<? extends Annotation> annotationClass) {
		return field.isAnnotationPresent(annotationClass);
	}
}
