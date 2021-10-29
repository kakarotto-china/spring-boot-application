/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.domain.value;

import lombok.AllArgsConstructor;

/**
 * @author yWX978481
 * @since 2021/9/13
 */
@AllArgsConstructor(staticName = "of")
public class PageNo {
    public final int pageNo; // 页码

    @Override
    public String toString() {
        return pageNo+"";
    }
}
