/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.properties;

import lombok.Data;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * @author yWX978481
 * @since 2021/9/3
 */
@Data
@ConfigurationProperties(prefix = "spring.datasource")
public class DatasourceProperties {
    private String driverClassName; // 驱动类路径

    private String url; // 连接url

    private String username; // 用户名

    private String password; // 密码
}
