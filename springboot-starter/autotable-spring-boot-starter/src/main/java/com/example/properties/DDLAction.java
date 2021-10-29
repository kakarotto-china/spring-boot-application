/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.properties;

import com.example.enums.ProductType;
import com.example.type.AutoTableType;

/**
 * 数据库SQL配置
 *
 * @author Jason
 *
 */
public interface DDLAction {

	/**
	 * 创建主键<br>
	 * 有效变量:<br>
	 * <ul>
	 * <li>{@link com.example.type.AutoTableType#CATALOG_VARIABLE catalog}</li>
	 * <li>{@link com.example.type.AutoTableType#TABLE_NAME_VARIABLE tableName}</li>
	 * <li>{@link com.example.type.AutoTableType#OLD_PK_SIZE_VARIABLE oldPkSize}</li>
	 * </ul>
	 *
	 * @return sql模版代码
	 */
	String getCreatePrimaryKey();

	/**
	 * 创建表SQL<br>
	 * 有效变量:<br>
	 * <ul>
	 * <li>{@link com.example.type.AutoTableType#CATALOG_VARIABLE catalog}</li>
	 * <li>{@link com.example.type.AutoTableType#TABLE_NAME_VARIABLE tableName}</li>
	 * <li>{@link com.example.type.AutoTableType#COMMENT_VARIABLE comment}</li>
	 * <li>{@link com.example.type.AutoTableType#ENGINE_VARIABLE engine}</li>
	 * <li>{@link com.example.type.AutoTableType#TEMP_COLUMN_NAME_VARIABLE tempColumnName}</li>
	 * </ul>
	 *
	 * @return sql模版代码
	 */
	String getCreateTableSql();

	/**
	 * 删除表SQL<br>
	 * 有效变量:<br>
	 * <ul>
	 * <li>{@link com.example.type.AutoTableType#CATALOG_VARIABLE catalog}</li>
	 * <li>{@link com.example.type.AutoTableType#TABLE_NAME_VARIABLE tableName}</li>
	 * <li>{@link com.example.type.AutoTableType#COMMENT_VARIABLE comment}</li>
	 * <li>{@link com.example.type.AutoTableType#ENGINE_VARIABLE engine}</li>
	 * <li>{@link com.example.type.AutoTableType#TEMP_COLUMN_NAME_VARIABLE tempColumnName}</li>
	 * </ul>
	 *
	 * @return sql模版代码
	 */
	String getDropTableSql();

	/**
	 * 创建列SQL<br>
	 * 有效变量:<br>
	 * <ul>
	 * <li>{@link com.example.type.AutoTableType#CATALOG_VARIABLE catalog}</li>
	 * <li>{@link com.example.type.AutoTableType#TABLE_NAME_VARIABLE tableName}</li>
	 * <li>{@link com.example.type.AutoTableType#COMMENT_VARIABLE comment}</li>
	 * <li>{@link com.example.type.AutoTableType#NOT_NULL_VARIABLE engine}</li>
	 * <li>{@link com.example.type.AutoTableType#TYPE_VARIABLE type}</li>
	 * <li>{@link com.example.type.AutoTableType#COLUMN_NAME_VARIABLE columnName}</li>
	 * <li>{@link com.example.type.AutoTableType#AUTOINCREMENT_VARIABLE autoincrement}</li>
	 * <li>{@link com.example.type.AutoTableType#DEFAULT_VALUE_VARIABLE defaultValue}</li>
	 * </ul>
	 *
	 * @return sql模版代码
	 */
	String getCreateColumnSql();
	/**
	 * 删除列SQL<br>
	 * 有效变量:<br>
	 * <ul>
	 * <li>{@link com.example.type.AutoTableType#CATALOG_VARIABLE catalog}</li>
	 * <li>{@link com.example.type.AutoTableType#TABLE_NAME_VARIABLE tableName}</li>
	 * <li>{@link com.example.type.AutoTableType#COMMENT_VARIABLE comment}</li>
	 * <li>{@link com.example.type.AutoTableType#NOT_NULL_VARIABLE engine}</li>
	 * <li>{@link com.example.type.AutoTableType#TYPE_VARIABLE type}</li>
	 * <li>{@link com.example.type.AutoTableType#COLUMN_NAME_VARIABLE columnName}</li>
	 * <li>{@link com.example.type.AutoTableType#AUTOINCREMENT_VARIABLE autoincrement}</li>
	 * <li>{@link com.example.type.AutoTableType#DEFAULT_VALUE_VARIABLE defaultValue}</li>
	 * </ul>
	 *
	 * @return sql模版代码
	 */
	String getDropColumnSql();

	/**
	 * 修改列SQL<br>
	 * 有效变量:<br>
	 * <ul>
	 * <li>{@link com.example.type.AutoTableType#CATALOG_VARIABLE catalog}</li>
	 * <li>{@link com.example.type.AutoTableType#TABLE_NAME_VARIABLE tableName}</li>
	 * <li>{@link com.example.type.AutoTableType#COMMENT_VARIABLE comment}</li>
	 * <li>{@link com.example.type.AutoTableType#NOT_NULL_VARIABLE engine}</li>
	 * <li>{@link com.example.type.AutoTableType#TYPE_VARIABLE type}</li>
	 * <li>{@link com.example.type.AutoTableType#COLUMN_NAME_VARIABLE columnName}</li>
	 * <li>{@link com.example.type.AutoTableType#AUTOINCREMENT_VARIABLE autoincrement}</li>
	 * <li>{@link AutoTableType#DEFAULT_VALUE_VARIABLE defaultValue}</li>
	 * </ul>
	 *
	 * @return sql模版代码
	 */
	String getUpdateColumnSql();

	/**
	 * 属于哪个数据库产品
	 *
	 * @return ProductType
	 */
	ProductType productType();
}
