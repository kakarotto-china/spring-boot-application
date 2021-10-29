/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.domain.vo;

import lombok.Data;

import java.util.List;

/**
 * @author yWX978481
 * @since 2021/9/17
 */
@Data
public class ShowDatabasesVo {
    private String connectInfo;

    private List<String> dbList;
}
