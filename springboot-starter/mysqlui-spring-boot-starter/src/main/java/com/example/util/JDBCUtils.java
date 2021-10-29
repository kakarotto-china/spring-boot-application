/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.util;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.convert.Convert;
import cn.hutool.core.lang.TypeReference;

import org.apache.commons.dbutils.DbUtils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * @author yWX978481
 * @since 2021/9/14
 */
public class JDBCUtils {
    private final Connection connection;

    private static final TypeReference<List<String>> LIST_TYPE_REFERENCE = new TypeReference<List<String>>() { };

    private static final TypeReference<List<LinkedHashMap<String, Object>>> LIST_MAP_TYPE_REFERENCE
        = new TypeReference<List<LinkedHashMap<String, Object>>>() { };

    private static final TypeReference<LinkedHashMap<String, Object>> MAP_TYPE_REFERENCE
        = new TypeReference<LinkedHashMap<String, Object>>() { };

    private static final TypeReference<String> STRING_REFERENCE = new TypeReference<String>() { };

    private static final TypeReference<Long> INTEGER_REFERENCE = new TypeReference<Long>() { };

    private JDBCUtils(Connection connection) {
        this.connection = connection;
    }

    public <T> T execute(TypeReference<T> type, String sql, Object... args) throws SQLException {
        String typeName = type.getTypeName();
        if (LIST_MAP_TYPE_REFERENCE.getTypeName().equals(typeName)) {
            return Convert.convert(type, executeCommon(sql, args));
        } else if (MAP_TYPE_REFERENCE.getTypeName().equals(typeName)) {
            return Convert.convert(type, executeLimit1(sql, args));
        } else if (LIST_TYPE_REFERENCE.getTypeName().equals(typeName)) {
            return Convert.convert(type, singleColumnExecute(sql, args));
        } else if (STRING_REFERENCE.getTypeName().equals(typeName)) {
            return Convert.convert(type, executeOne(sql, args));
        } else if (INTEGER_REFERENCE.getTypeName().equals(typeName)) {
            return Convert.convert(type, executeOne(sql, args));
        } else {
            throw new RuntimeException("不支持的TypeReference类型：" + typeName);
        }
    }

    public void execute(String sql, Object... args) throws SQLException {
        executeSql(sql, args);
    }

    private Map<String, Object> executeLimit1(String sql, Object... args) throws SQLException {
        ResultSet resultSet = executeSql(sql, args);
        return getResultMap(resultSet);
    }

    private List<Map<String, Object>> executeCommon(String sql, Object... args) throws SQLException {
        ResultSet resultSet = executeSql(sql, args);
        return getResultMaps(resultSet);
    }

    private Object executeOne(String sql, Object... args) throws SQLException {
        ResultSet resultSet = executeSql(sql, args);
        List<Object> resultList = getResultList(resultSet);
        if (resultList.size() == 1) {
            return resultList.get(0);
        } else if (resultList.size() == 0) {
            return null;
        } else {
            throw new RuntimeException("结果集超过1条数据，检查数据，数据大小：" + resultList.size());
        }
    }

    private List<Object> singleColumnExecute(String sql, Object... args) throws SQLException {
        ResultSet resultSet = executeSql(sql, args);
        return getResultList(resultSet);
    }

    private ResultSet executeSql(String sql, Object... args) throws SQLException {
        PreparedStatement pst = connection.prepareStatement(sql);
        for (int i = 0; i < args.length; i++) {
            pst.setObject(i + 1, args[i]);
        }
        return pst.executeQuery();
    }

    public static JDBCUtils initConnection(String driverName, String url, String username, String passwd)
        throws SQLException {
        DbUtils.loadDriver(driverName);
        return new JDBCUtils(DriverManager.getConnection(url, username, passwd));
    }

    private List<Object> getResultList(ResultSet resultSet) throws SQLException {
        List<Map<String, Object>> resultMaps = getResultMaps(resultSet);
        return resultMaps.stream().map(map -> {
            Object[] objects = map.values().toArray();
            if (objects.length != 1) {
                throw new RuntimeException("结果存在多列，请检查，列：" + map.keySet());
            } else {
                return objects[0];
            }
        }).collect(Collectors.toList());
    }

    private Map<String, Object> getResultMap(ResultSet resultSet) throws SQLException {
        List<Map<String, Object>> resultMaps = getResultMaps(resultSet);
        if (resultMaps.size() == 1) {
            return resultMaps.get(0);
        } else if (resultMaps.size() == 0) {
            return CollUtil.newHashMap();
        } else {
            throw new RuntimeException("结果集超过1条数据，检查数据，数据大小：" + resultMaps.size());
        }
    }

    private List<Map<String, Object>> getResultMaps(ResultSet resultSet) throws SQLException {
        String[] columns = getColumns(resultSet);
        List<Map<String, Object>> result = CollUtil.newArrayList();
        while (resultSet.next()) {
            Map<String, Object> map = new LinkedHashMap<>();
            for (String column : columns) {
                map.put(column, resultSet.getObject(column));
            }
            result.add(map);
        }
        return result;
    }

    private String[] getColumns(ResultSet resultSet) throws SQLException {
        ResultSetMetaData metaData = resultSet.getMetaData();
        int count = metaData.getColumnCount();
        String[] columns = new String[count];
        for (int i = 0; i < count; i++) {
            columns[i] = metaData.getColumnLabel(i + 1);
        }
        return columns;
    }
}
