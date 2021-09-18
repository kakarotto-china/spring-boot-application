/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.service.impl;

import com.example.domain.dto.PageDto;
import com.example.domain.value.DbName;
import com.example.domain.value.TbName;
import com.example.domain.vo.SelectTableVo;
import com.example.domain.vo.ShowDatabasesVo;
import com.example.properties.DatasourceProperties;
import com.example.service.IDMLService;
import com.example.util.JDBCUtils;
import com.example.util.WebContext;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.lang.TypeReference;
import cn.hutool.core.util.ReUtil;
import cn.hutool.core.util.StrUtil;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

/**
 * DMLServiceImpl
 *
 * @author ywx978481
 * @since
 */
@Service
@Slf4j
public class DMLServiceImpl implements IDMLService {
    @Autowired
    private DatasourceProperties datasourceProperties;

    @Override
    public ShowDatabasesVo showDatabases() {
        ShowDatabasesVo showDatabasesVo = new ShowDatabasesVo();
        try {
            JDBCUtils jdbcUtils = JDBCUtils.initConnection(datasourceProperties.getDriverClassName(),
                datasourceProperties.getUrl(), datasourceProperties.getUsername(), datasourceProperties.getPassword());
            List<String> databases = jdbcUtils.execute(new TypeReference<List<String>>() { }, "show databases");
            showDatabasesVo.setDbList(databases);
            String[] s = matchUrlAndPort(datasourceProperties.getUrl());
            showDatabasesVo.setConnectInfo(StrUtil.format("{}:{}@{}", s[0], s[1], datasourceProperties.getUsername()));
        } catch (SQLException e) {
            log.error("[showDatabases]", e);
        }
        return showDatabasesVo;
    }

    @Override
    public List<String> showTables(DbName dbName) {
        try {
            JDBCUtils jdbcUtils = JDBCUtils.initConnection(datasourceProperties.getDriverClassName(),
                datasourceProperties.getUrl(), datasourceProperties.getUsername(), datasourceProperties.getPassword());
            jdbcUtils.execute("use " + dbName);
            return jdbcUtils.execute(new TypeReference<List<String>>() { }, "show tables");
        } catch (SQLException e) {
            log.error("[showTables]", e);
        }
        return CollUtil.newArrayList();
    }

    @Override
    public SelectTableVo selectTable(DbName dbName, TbName tbName) {
        SelectTableVo selectTableVo = new SelectTableVo();
        PageDto pageDto = WebContext.getPageDto();
        int pageNo = pageDto.getPageNo().pageNo;
        int pageSize = pageDto.getPageSize().pageSize;
        try {
            JDBCUtils jdbcUtils = JDBCUtils.initConnection(datasourceProperties.getDriverClassName(),
                datasourceProperties.getUrl(), datasourceProperties.getUsername(), datasourceProperties.getPassword());
            jdbcUtils.execute("use " + dbName);
            Long count = jdbcUtils.execute(new TypeReference<Long>() { }, "select count(1) as total from " + tbName);
            List<LinkedHashMap<String, Object>> resList = jdbcUtils.execute(
                new TypeReference<List<LinkedHashMap<String, Object>>>() { },
                "select * from " + tbName + " limit " + (pageNo - 1) * pageSize + "," + pageSize);
            ArrayList<String> colunms = CollUtil.newArrayList();
            if (CollUtil.isNotEmpty(resList)) {
                LinkedHashMap<String, Object> linkedHashMap = resList.get(0);
                linkedHashMap.forEach((k, v) -> colunms.add(k));
            }
            selectTableVo.setHeaders(colunms);
            selectTableVo.setData(resList);
            selectTableVo.setTotal(count);
        } catch (SQLException e) {
            log.error("[selectTable]", e);
        }
        return selectTableVo;
    }

    private String[] matchUrlAndPort(String url) {
        String s = ReUtil.get("//\\w.+:\\d.+/", url, 0).replaceAll("/", "");
        return s.split(":");
    }
}



