/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.domain.dto;

import com.example.domain.value.PageNo;
import com.example.domain.value.PageSize;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @author yWX978481
 * @since 2021/9/13
 */
@Data
@AllArgsConstructor(staticName = "of")
public class PageDto {
    private final PageNo pageNo; // 页码

    private final PageSize pageSize; // 每页数
}
