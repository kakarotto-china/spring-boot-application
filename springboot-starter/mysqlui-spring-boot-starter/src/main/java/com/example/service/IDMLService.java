/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.service;

import com.example.domain.value.DbName;
import com.example.domain.value.TbName;
import com.example.domain.vo.SelectTableVo;
import com.example.domain.vo.ShowDatabasesVo;

import java.util.List;

/**
 * IDMLService
 *
 * @author ywx978481
 * @since
 */
public interface IDMLService {
    ShowDatabasesVo showDatabases();

    List<String> showTables(DbName dbName);

    SelectTableVo selectTable(DbName dbName, TbName tbName);
}
