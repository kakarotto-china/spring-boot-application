/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

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
 * @author Jason
 */
@Retention(RUNTIME)
@Target(TYPE)
@Inherited
@Import(AutoTableConfiguration.class)
public @interface EnableAutoTable {
    String catalog();

    AtType type() default AtType.NONE;

    String[] baseBeanScan() default {};
}
