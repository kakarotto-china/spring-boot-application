package com.example.model;

import com.example.converter.Field;

import cn.hutool.core.util.StrUtil;
import lombok.Data;

import java.sql.DatabaseMetaData;

/**
 * 
 * 数据库字段信息
 * 
 */
@Data
public class ColumnInfo {
	/**
	 * TABLE_CAT String => 表类别（可为 null）
	 */
	@Field("TABLE_CAT")
	private String catalog;
	/**
	 * TABLE_NAME String => 表名称
	 */
	@Field("TABLE_NAME")
	private String tableName;
	/**
	 * COLUMN_NAME String => 列名称
	 */
	@Field("COLUMN_NAME")
	private String columnName;
	/**
	 * DATA_TYPE int => 来自 java.sql.Types 的 SQL 类型
	 */
	@Field("DATA_TYPE")
	private int dataType;
	/**
	 * TYPE_NAME String => 数据源依赖的类型名称，对于 UDT，该类型名称是完全限定的
	 */
	@Field("TYPE_NAME")
	private String typeName;
	/**
	 * 实际的数据库类型
	 */
	private String type;
	/**
	 * COLUMN_SIZE int => 列的大小。
	 */
	@Field("COLUMN_SIZE")
	private int length;
	/**
	 * DECIMAL_DIGITS int => 小数部分的位数。对于 DECIMAL_DIGITS 不适用的数据类型，则返回 Null。
	 */
	@Field("DECIMAL_DIGITS")
	private Integer decimalDigit;
	/**
	 * NULLABLE int => 是否允许使用 NULL。 <br>
	 * columnNoNulls - 可能不允许使用 NULL 值 <br>
	 * columnNullable - 明确允许使用 NULL 值 <br>
	 * columnNullableUnknown - 不知道是否可使用 null
	 */
	@Field("NULLABLE")
	private Boolean nullable;

	/**
	 * REMARKS String => 描述列的注释（可为 null）
	 */
	@Field("REMARKS")
	private String comment;
	/**
	 * COLUMN_DEF String => 该列的默认值，当值在单引号内时应被解释为一个字符串（可为 null）
	 */
	@Field("COLUMN_DEF")
	private String defaultValue;
	/**
	 * CHAR_OCTET_LENGTH int => 对于 char 类型，该长度是列中的最大字节数
	 */
	@Field("CHAR_OCTET_LENGTH")
	private int charOctetLength;
	/**
	 * IS_NULLABLE String => ISO 规则用于确定列是否包括 null。 <br>
	 * YES --- 如果参数可以包括 NULL <br>
	 * NO --- 如果参数不可以包括 NULL <br>
	 * 空字符串 --- 如果不知道参数是否可以包括 null
	 */
	@Field("IS_NULLABLE")
	private String isNullable;
	/**
	 * IS_AUTOINCREMENT String => 指示此列是否自动增加<br>
	 * YES --- 如果该列自动增加 <br>
	 * NO --- 如果该列不自动增加 <br>
	 * 空字符串 --- 如果不能确定该列是否是自动增加参数
	 */
	@Field("IS_AUTOINCREMENT")
	private Boolean autoincrement;
	/**
	 * 是否为主键
	 */
	private boolean primaryKey;

	public void setAutoincrement(Boolean autoincrement) {
		this.autoincrement = autoincrement;
	}

	public void setAutoincrement(String autoincrement) {
		if (StrUtil.isNotBlank(autoincrement)) {
			this.autoincrement = "YES".equals(autoincrement);
		}
	}

	public void setNullable(Boolean nullable) {
		this.nullable = nullable;
	}

	public void setNullable(int nullable) {
		if (DatabaseMetaData.attributeNullableUnknown != nullable) {
			this.nullable = DatabaseMetaData.attributeNullable == nullable;
		}
	}

}
