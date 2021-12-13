package com.example.type;

import cn.hutool.core.collection.CollUtil;
import com.example.enums.AtType;
import com.example.model.ColumnInfo;
import com.example.model.TableInfo;
import com.example.properties.DDLAction;
import com.example.util.DataBaseUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.sql.SQLException;
import java.util.List;

/**
 * create模式
 */
@Component
@Slf4j
public class CreateAutoTableType implements AutoTableType {
    @Override
    public List<String> autoTable(DDLAction dbSql, List<TableInfo> tables) throws SQLException {
        List<String> sqlList = CollUtil.newArrayList();
        for (TableInfo tableInfo : tables) {
            if (CollUtil.isEmpty(tableInfo.getColumns())) {
                log.warn("表[{}]中至少需要一个字段", tableInfo.getTableName());
                continue;
            }
            // 检测表是否存在, 如果存在则删除表
            if (DataBaseUtil.isTable(tableInfo)) {
                sqlList.add(parseSqlByTable(dbSql.getDropTableSql(), tableInfo));
            }
            // 创建表
            sqlList.add(parseSqlByTable(dbSql.getCreateTableSql(), tableInfo));
            // 原表主键数量
            int oldPkSize = 0;
            // 创建列
            for (ColumnInfo columnInfo : tableInfo.getColumns()) {
                if (Boolean.TRUE.equals(columnInfo.getAutoincrement())) {
                    oldPkSize++;
                }
                sqlList.add(parseSqlByColumn(dbSql.getCreateColumnSql(), columnInfo));
            }
            // 删除临时字段
            sqlList.add(parseSqlByColumn(dbSql.getDropColumnSql(), tableInfo.getTempColumn()));
            // 检测表是否含有主键
            if (tableInfo.getPrimaryKeys() != null && !tableInfo.getPrimaryKeys().isEmpty()) {
                sqlList.add(parseSqlByPrimaryKey(dbSql.getCreatePrimaryKey(), tableInfo, oldPkSize));
            }
        }
        return sqlList;
    }

    @Override
    public AtType autoTableType() {
        return AtType.CREATE;
    }
}
