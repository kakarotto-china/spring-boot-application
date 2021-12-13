package com.example.annotation;

import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import org.springframework.core.annotation.AliasFor;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

/**
 * 表信息
 * 
 */
@Retention(RUNTIME)
@Target(TYPE)
public @interface AtTable {
	/**
	 * 表名称
	 * 
	 * @return 表名称
	 */
	@AliasFor("name")
	String value() default "";

	/**
	 * 表名称
	 * 
	 * @return 表名称
	 */
	@AliasFor("value")
	String name() default "";

	/**
	 * 数据库引擎,针对MySql设立
	 * 
	 * @return 数据库引擎
	 */
	String engine() default "";

	/**
	 * 注释
	 * 
	 * @return 注释
	 */
	String comment() default "";
}
