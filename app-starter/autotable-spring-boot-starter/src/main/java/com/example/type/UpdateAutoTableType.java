/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.type;

import com.example.enums.AtType;
import com.example.model.ColumnInfo;
import com.example.model.PrimaryKey;
import com.example.model.TableInfo;
import com.example.properties.DDLAction;
import com.example.util.DataBaseUtil;

import cn.hutool.core.collection.CollUtil;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Component;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * update模式
 *
 * @author Jason
 */
@Component
@Slf4j
public class UpdateAutoTableType implements AutoTableType {

    @Override
    public List<String> autoTable(DDLAction dbSql, List<TableInfo> tables) throws SQLException {
        List<String> sqlList = CollUtil.newArrayList();
        for (TableInfo tableInfo : tables) {
            if (CollUtil.isEmpty(tableInfo.getColumns())) {
                log.warn("表[{}]中至少需要一个字段", tableInfo.getTableName());
                continue;
            }
            // 获得数据库中原有的主键列表
            List<PrimaryKey> primaryKeys = DataBaseUtil.getPrimaryKeys(tableInfo);
            int oldPkSize = primaryKeys.size();

            // 是否创建表的标志变量
            boolean createTable = false;
            // 检测表是否不存在,如果不存在则创建表
            if (!DataBaseUtil.isTable(tableInfo)) {
                createTable = true;
                // 创建表
                sqlList.add(parseSqlByTable(dbSql.getCreateTableSql(), tableInfo));
            }
            // 创建列
            for (ColumnInfo columnInfo : tableInfo.getColumns()) {
                // 检测列是否不存在,如果不存在则创建
                if (!DataBaseUtil.isColumn(columnInfo)) {
                    // 如果有自增列,则将已存在字段+1,使创建主键时可以进行删除操作
                    oldPkSize++;
                    sqlList.add(parseSqlByColumn(dbSql.getCreateColumnSql(), columnInfo));
                }
            }
            // 如果是本次新建的表,则需要删除临时字段
            if (createTable) {
                // 删除临时字段
                sqlList.add(parseSqlByColumn(dbSql.getDropColumnSql(), tableInfo.getTempColumn()));
                // 检测表是否含有主键
                if (tableInfo.getPrimaryKeys() != null && !tableInfo.getPrimaryKeys().isEmpty()) {
                    sqlList.add(parseSqlByPrimaryKey(dbSql.getCreatePrimaryKey(), tableInfo, oldPkSize));
                }
            } else {
                // 如果不是本次新建的表,则比对主键列表是否一致
                if (isCreatePrimaryKey(tableInfo)) {
                    // 创建主键
                    sqlList.add(parseSqlByPrimaryKey(dbSql.getCreatePrimaryKey(), tableInfo, oldPkSize));
                }
            }
        }
        return sqlList;
    }

    /**
     * 检测表是否需要创建主键
     *
     * @param tableInfo 表信息
     * @return boolean
     */
    private boolean isCreatePrimaryKey(TableInfo tableInfo) {
        List<PrimaryKey> pkOlds = DataBaseUtil.getPrimaryKeys(tableInfo);
        List<PrimaryKey> primaryKeys = tableInfo.getPrimaryKeys();
        if (primaryKeys == null || primaryKeys.isEmpty()) {
            return false;
        }
        // 如果主键数量不相等,则说明主键必定有修改
        if (pkOlds.size() != primaryKeys.size()) {
            return true;
        }
        List<String> pkNames = new ArrayList<>(primaryKeys.size());
        primaryKeys.forEach(pk -> pkNames.add(pk.getColumnName().toLowerCase()));
        // 过滤表中已存在的主键,如果最后集合大小为0,则说明主键未更改,否则说明主键列表不一致,需要重新创建主键
        List<PrimaryKey> list = pkOlds.stream()
            .filter(pk -> !pkNames.contains(pk.getColumnName().toLowerCase()))
            .collect(Collectors.toList());
        return !list.isEmpty();
    }

    @Override
    public AtType autoTableType() {
        return AtType.UPDATE;
    }

}
