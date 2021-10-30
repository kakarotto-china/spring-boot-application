package com.example.annotation;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import com.example.enums.JdbcType;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

/**
 * 字段信息
 * 
 */
@Retention(RUNTIME)
@Target(FIELD)
public @interface AtColumn {
	/**
	 * 字段名称
	 * 
	 * @return 字段名称
	 */
	String name() default "";

	/**
	 * 字段类型
	 * 
	 * @return 字段类型
	 */
	JdbcType type() default JdbcType.AUTO;

	/**
	 * 字段长度
	 * 
	 * @return 字段长度
	 */
	int length() default 0;

	/**
	 * 小数位长度
	 * 
	 * @return	小数位长度
	 */	
	int decimalDigit() default 0;

	/**
	 * 是否自动递增
	 * 
	 * @return	是否自动递增
	 */
	boolean autoincrement() default false;

	/**
	 * 注释
	 * 
	 * @return	注释
	 */
	String comment() default "";

	/**
	 * 是否不为空
	 * 
	 * @return	是否不为空
	 */
	boolean notNull() default false;

	/**
	 * 是否为主键
	 * 
	 * @return	是否为主键
	 */
	boolean primaryKey() default false;
	/**
	 * 默认值
	 * @return	默认值
	 */
	String defaultValue() default "";
}
