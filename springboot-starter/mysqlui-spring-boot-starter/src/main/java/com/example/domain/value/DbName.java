/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.domain.value;

import lombok.AllArgsConstructor;

/**
 * DbName
 *
 * @since 2021/9/11
 */
@AllArgsConstructor(staticName = "of")
public final class DbName {
    public final String dbName; // 数据库名称

    @Override
    public String toString() {
        return dbName;
    }
}
