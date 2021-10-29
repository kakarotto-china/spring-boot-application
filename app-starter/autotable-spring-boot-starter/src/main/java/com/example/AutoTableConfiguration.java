/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example;

import com.example.annotation.EnableAutoTable;
import com.example.enums.AtType;
import com.example.properties.AutoTableProperties;

import cn.hutool.core.convert.Convert;
import cn.hutool.core.lang.TypeReference;
import lombok.extern.slf4j.Slf4j;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportAware;
import org.springframework.core.type.AnnotationMetadata;

import java.util.List;
import java.util.Map;

/**
 * AutoTable 入口类
 *
 * @author Jason
 */
@Configuration
@ComponentScan("com.example")
@Slf4j
public class AutoTableConfiguration implements ImportAware {
    private final AutoTableProperties autoTableProperties;

    public AutoTableConfiguration() {
        this.autoTableProperties = new AutoTableProperties();
    }

    @Bean
    public AutoTableProperties autoTableProperties() {
        return autoTableProperties;
    }

    @Override
    public void setImportMetadata(AnnotationMetadata importMetadata) {
        Map<String, Object> annotationAttributes = importMetadata.getAnnotationAttributes(
            EnableAutoTable.class.getName());
        if (annotationAttributes == null) {
            return;
        }
        // 设置包扫描
        autoTableProperties.setBaseBeanPackages(
            Convert.convert(new TypeReference<List<String>>() { }, annotationAttributes.get("baseBeanScan")));
        // 设置数据库主体
        autoTableProperties.setCatalog(Convert.convert(String.class, annotationAttributes.get("catalog")));
        // 设置自动建表类型
        autoTableProperties.setType(Convert.convert(AtType.class, annotationAttributes.get("type")));
    }
}
