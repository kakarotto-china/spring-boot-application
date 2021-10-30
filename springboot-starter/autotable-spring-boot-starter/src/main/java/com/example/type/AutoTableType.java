package com.example.type;

import com.example.enums.AtType;
import com.example.model.ColumnInfo;
import com.example.model.PrimaryKey;
import com.example.model.TableInfo;
import com.example.properties.DDLAction;
import com.example.util.SqlUtil;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 系统运行模式接口
 */
public interface AutoTableType {
    /**
     * 表名变量名称
     */
    String TABLE_NAME_VARIABLE = "tableName";
    /**
     * 表类别变量名称
     */
    String CATALOG_VARIABLE = "catalog";
    /**
     * 注释变量名
     */
    String COMMENT_VARIABLE = "comment";
    /**
     * 引擎变量名
     */
    String ENGINE_VARIABLE = "engine";
    /**
     * 是否不为空变量名
     */
    String NOT_NULL_VARIABLE = "notNull";
    /**
     * 数据类型变量名
     */
    String TYPE_VARIABLE = "type";
    /**
     * 字段名称变量名
     */
    String COLUMN_NAME_VARIABLE = "columnName";
    /**
     * 主键列表变量名称
     */
    String PRIMARY_KEYS_VARIABLE = "primaryKeys";
    /**
     * 临时字段变量名
     */
    String TEMP_COLUMN_NAME_VARIABLE = "tempColumnName";
    /**
     * 自动递增变量名
     */
    String AUTOINCREMENT_VARIABLE = "autoincrement";
    /**
     * 默认值变量
     */
    String DEFAULT_VALUE_VARIABLE = "defaultValue";
    /**
     * 原表主键数量
     */
    String OLD_PK_SIZE_VARIABLE = "oldPkSize";

    /**
     * 构建待执行sql,并控制sql的执行顺序
     *
     * @param ddlAction 个性化Sql配置
     * @param tables 表信息列表
     * @throws SQLException 数据库异常
     */
    List<String> autoTable(DDLAction ddlAction, List<TableInfo> tables) throws SQLException;

    /**
     * 启动类型
     *
     * @return
     */
    AtType autoTableType();

    /**
     * 解析主键列级别SQL
     *
     * @param sqlTemplate sql
     * @param tableInfo 表信息
     * @param oldPkSize 原有主键数量
     * @return 返回Sql
     */
    default String parseSqlByPrimaryKey(String sqlTemplate, TableInfo tableInfo, int oldPkSize) {
        Map<String, Object> context = new HashMap<>(3);
        context.put(CATALOG_VARIABLE, tableInfo.getCatalog());
        context.put(TABLE_NAME_VARIABLE, tableInfo.getTableName());
        context.put(OLD_PK_SIZE_VARIABLE, oldPkSize);
        List<PrimaryKey> list = tableInfo.getPrimaryKeys();
        List<String> primaryKeys = new ArrayList<>(list.size());
        // 过滤掉自增主键
        //		list.stream().filter(pk -> {
        //			if (autoincrement) {
        //				return !pk.isAutoincrement();
        //			}
        //			return true;
        //		}).forEach(pk -> primaryKeys.add(pk.getColumnName()));
        list.stream().forEach(pk -> primaryKeys.add(pk.getColumnName()));
        context.put(PRIMARY_KEYS_VARIABLE, primaryKeys);
        if (primaryKeys.isEmpty()) {
            return "";
        }
        return SqlUtil.parseSql(sqlTemplate, context);
    }

    /**
     * 解析列级别SQL
     *
     * @param sqlTemplate sql
     * @param columnInfo 列信息
     * @return 返回Sql
     */
    default String parseSqlByColumn(String sqlTemplate, ColumnInfo columnInfo) {
        Map<String, Object> context = new HashMap<>(8);
        context.put(CATALOG_VARIABLE, columnInfo.getCatalog());
        context.put(TABLE_NAME_VARIABLE, columnInfo.getTableName());
        context.put(COMMENT_VARIABLE, columnInfo.getComment());
        context.put(NOT_NULL_VARIABLE, columnInfo.getNullable() != null && !columnInfo.getNullable());
        context.put(TYPE_VARIABLE, columnInfo.getType());
        context.put(COLUMN_NAME_VARIABLE, columnInfo.getColumnName());
        context.put(AUTOINCREMENT_VARIABLE, columnInfo.getAutoincrement() != null && columnInfo.getAutoincrement());
        context.put(DEFAULT_VALUE_VARIABLE, columnInfo.getDefaultValue());
        return SqlUtil.parseSql(sqlTemplate, context);
    }

    /**
     * 解析表级别sql
     *
     * @param sqlTemplate sql模版
     * @param tableInfo 表信息
     * @return 返回Sql
     */
    default String parseSqlByTable(String sqlTemplate, TableInfo tableInfo) {
        Map<String, Object> context = new HashMap<>(5);
        context.put(CATALOG_VARIABLE, tableInfo.getCatalog());
        context.put(TABLE_NAME_VARIABLE, tableInfo.getTableName());
        context.put(COMMENT_VARIABLE, tableInfo.getComment());
        context.put(ENGINE_VARIABLE, tableInfo.getEngine());
        context.put(TEMP_COLUMN_NAME_VARIABLE, tableInfo.getTempColumn().getColumnName());
        return SqlUtil.parseSql(sqlTemplate, context);
    }
}
