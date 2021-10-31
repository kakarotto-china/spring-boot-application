package com.example.util;

import com.example.converter.ResultSetMapper;
import com.example.model.ColumnInfo;
import com.example.model.PrimaryKey;
import com.example.model.TableInfo;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;

import java.sql.DatabaseMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * 数据库工具类
 */
@SuppressWarnings("unused")
@Slf4j
public class DataBaseUtil {
    /**
     * 表类型
     */
    private static final String[] TABLE_TYPES = {"TABLE"};
    private static DatabaseMetaData md;

    /**
     * 设置元数据对象
     *
     * @param md 元数据对象
     */
    public static void setDatabaseMetaData(DatabaseMetaData md) {
        DataBaseUtil.md = md;
    }

    /**
     * 检测表是否存在
     *
     * @param catalog   类别名称: 在Mysql中对应数据库名称,在Oracle中对应实例名称
     * @param tableName 表名
     * @return boolean
     * @throws SQLException 数据库异常
     */
    public static boolean isTable(String catalog, String tableName) throws SQLException {
        try (java.sql.ResultSet rs = md.getTables(catalog, null, tableName, TABLE_TYPES)) {
            return rs.next();
        }
    }

    /**
     * 检测表是否存在
     *
     * @param table 表信息
     * @return boolean
     * @throws SQLException 数据库异常
     */
    public static boolean isTable(TableInfo table) throws SQLException {
        return isTable(table.getCatalog(), table.getTableName());
    }

    /**
     * 获取指定表的主键
     *
     * @param tableInfo 表信息
     * @return 主键列表
     */
    public static List<PrimaryKey> getPrimaryKeys(TableInfo tableInfo) {
        return getPrimaryKeys(tableInfo.getCatalog(), tableInfo.getTableName());
    }

    /**
     * 获取指定表的主键
     *
     * @param catalog   类别名称: 在Mysql中对应数据库名称,在Oracle中对应实例名称
     * @param tableName 表名
     * @return 主键列表
     */
    @SneakyThrows
    public static List<PrimaryKey> getPrimaryKeys(String catalog, String tableName) {
        try (java.sql.ResultSet rs = md.getPrimaryKeys(catalog, null, tableName)) {
            return ResultSetMapper.toJava(rs, PrimaryKey.class);
        }
    }

    /**
     * 检测字段是否存在
     *
     * @param columnInfo 字段信息
     * @return boolean
     * @throws SQLException 数据库异常
     */
    public static boolean isColumn(ColumnInfo columnInfo) throws SQLException {
        return isColumn(columnInfo.getCatalog(), columnInfo.getTableName(), columnInfo.getColumnName());
    }

    /**
     * 检测字段在表中是否存在
     *
     * @param catalog           类别名称: 在Mysql中对应数据库名称,在Oracle中对应实例名称
     * @param tableName         表名
     * @param columnNamePattern 列名称
     * @return boolean
     * @throws SQLException 数据库异常
     */
    public static boolean isColumn(String catalog, String tableName, String columnNamePattern) throws SQLException {
        return !getColumns(catalog, tableName, columnNamePattern).isEmpty();

    }

    /**
     * 获取表的所有字段
     *
     * @param catalog           类别名称: 在Mysql中对应数据库名称,在Oracle中对应实例名称
     * @param tableName         表名
     * @param columnNamePattern 列名称
     * @return 字段列表
     * @throws SQLException 数据库异常
     */
    public static List<ColumnInfo> getColumns(String catalog, String tableName, String columnNamePattern)
            throws SQLException {
        List<ColumnInfo> list = new ArrayList<>(10);
        try (java.sql.ResultSet rs = md.getColumns(catalog, null, tableName, columnNamePattern)) {
            return ResultSetMapper.toJava(rs, ColumnInfo.class);
        }
    }
}
