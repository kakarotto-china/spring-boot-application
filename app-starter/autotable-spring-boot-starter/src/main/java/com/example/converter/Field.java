/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.converter;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import org.springframework.core.annotation.AliasFor;

import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

/**
 * 字段映射注解
 * 
 * @author Jason
 *
 */
@Inherited
@Retention(RUNTIME)
@Target(FIELD)
public @interface Field {
	@AliasFor("name")
	String value() default "";

	@AliasFor("value")
	String name() default "";

	/**
	 * 值转换器
	 * 
	 * @return 转换器类型
	 */
	Class[] converter() default {};
}
