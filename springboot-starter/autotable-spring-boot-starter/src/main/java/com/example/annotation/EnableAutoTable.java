package com.example.annotation;

import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import com.example.AutoTableConfiguration;
import com.example.enums.AtType;

import org.springframework.context.annotation.Import;

import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

/**
 * 开启AutoTable
 *
 */
@Retention(RUNTIME)
@Target(TYPE)
@Inherited
@Import(AutoTableConfiguration.class)
public @interface EnableAutoTable {
    String catalog();

    AtType type() default AtType.NONE;

    String[] baseAnnotationScan() default {};
}
