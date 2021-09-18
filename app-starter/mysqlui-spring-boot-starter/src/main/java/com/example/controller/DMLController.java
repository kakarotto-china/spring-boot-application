/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.controller;

import com.example.domain.value.DbName;
import com.example.domain.value.TbName;
import com.example.service.IDMLService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * DMLController 增删改查
 *
 * @author ywx978481
 * @since
 */
@RestController
@RequestMapping("/mysqlui/dml")
public class DMLController {

    @Autowired
    private IDMLService idmlService;

    @GetMapping("/showDatabases")
    public ResponseEntity showDatabases() {
        return ResponseEntity.ok(idmlService.showDatabases());
    }

    @GetMapping("/showTables")
    public ResponseEntity showTables(@RequestParam("dbName") String dbName) {
        return ResponseEntity.ok(idmlService.showTables(DbName.of(dbName)));
    }

    @GetMapping("/selectTable")
    public ResponseEntity selectTable(@RequestParam("dbName") String dbName, @RequestParam("tabName") String tabName) {
        return ResponseEntity.ok(idmlService.selectTable(DbName.of(dbName), TbName.of(tabName)));
    }
}
