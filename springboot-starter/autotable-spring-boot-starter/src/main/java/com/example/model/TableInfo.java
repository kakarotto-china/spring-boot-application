package com.example.model;

import lombok.Data;

import java.util.List;

/**
 * 表信息
 * 
 */
@Data
public class TableInfo {
	private String catalog;
	/**
	 * 表名称
	 */
	private String tableName;
	/**
	 * 字段名称
	 */
	private String comment;
	/**
	 * 数据库引擎
	 */
	private String engine;
	/**
	 * 临时字段
	 */
	private ColumnInfo tempColumn;
	/**
	 * 字段列表
	 */
	private List<ColumnInfo> columns;
	/**
	 * 主键列表
	 */
	private List<PrimaryKey> primaryKeys;
}
