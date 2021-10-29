/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.properties;

import lombok.Data;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * @author yWX978481
 * @since 2021/9/13
 */
@ConfigurationProperties(prefix = "mysqlui")
@Data
public class MysqlUIProperties {
    private boolean enable = true; // 是否开启，迷默认true

    private String pageNoKey = "pageNo"; // 分页请求页码key，默认pageNo

    private String pageSizeKey = "pageSize"; // 分页请求每页数key，默认pageSize

    private int order = 1; // 分页过滤器序号，默认1
}
