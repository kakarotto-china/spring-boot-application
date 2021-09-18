/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.config;

import com.example.properties.DatasourceProperties;
import com.example.properties.MysqlUIProperties;

import lombok.extern.slf4j.Slf4j;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * MysqlUIConfig
 *
 * @author ywx978481
 * @since 2020年9月15日11:00:32
 */
@Slf4j
@Configuration
@ComponentScan(basePackages = {"com.huawei"})
@ServletComponentScan(basePackages = "com.huawei")
@EnableConfigurationProperties( {MysqlUIProperties.class, DatasourceProperties.class})
// @ConditionalOnProperty(prefix = "mysqlui", name = "enable", havingValue = "true", matchIfMissing = true)
public class MysqlUIConfig {
    public MysqlUIConfig() {
        log.info("Mapped Controller: [/mysqlui/dml/showDatabases]");
        log.info("Add UI: [/mysql-ui.html]");
    }

}
