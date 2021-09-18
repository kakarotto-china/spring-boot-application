/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.domain.value;

import lombok.AllArgsConstructor;

/**
 * @author yWX978481
 * @since 2021/9/11
 */
@AllArgsConstructor(staticName = "of")
public final class TbName {
    public final String tbName; // 数据表名

    @Override
    public String toString() {
        return tbName;
    }
}
