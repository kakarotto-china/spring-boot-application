package com.example.model;

import lombok.Data;

/**
 * 主键信息
 * 
 */
@Data
public class PrimaryKey {
	/**
	 * TABLE_CAT String => 表类别（可为 null）
	 */
	private String catalog;
	/**
	 * TABLE_SCHEME String => 表模式（可为 null）
	 */
	private String tableSchem;
	/**
	 * TABLE_NAME String => 表名称
	 */
	private String tableName;
	/**
	 * COLUMN_NAME String => 列名称
	 */
	private String columnName;
	/**
	 * KEY_SEQ short => 主键中的序列号（值 1 表示主键中的第一列，值 2 表示主键中的第二列）。
	 */
	private int keySeq;
	/**
	 * PK_NAME String => 主键的名称（可为 null）
	 */
	private String pkName;
	/**
	 * 是否自增
	 */
	private boolean autoincrement;
}
