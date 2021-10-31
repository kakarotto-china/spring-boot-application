package com.example.converter;

import cn.hutool.core.convert.Convert;
import com.example.model.ColumnInfo;

import java.sql.DatabaseMetaData;

import org.springframework.stereotype.Component;

/**
 * Integer转Boolean
 * 
 */
public class ColumnInfoIntegerConverter implements Converter<Boolean> {

	private static final String NULLABLE = "NULLABLE";

	@Override
	public Boolean converter(Class<?> clazz, String columnName, Object sourceValue) {
		if (clazz == ColumnInfo.class) {
			if (NULLABLE.equals(columnName)) {
				Integer integer = Convert.toInt(sourceValue);
				if (DatabaseMetaData.columnNoNulls == integer) {
					return false;
				} else if (DatabaseMetaData.columnNullable == integer) {
					return true;
				}
			}
		}
		return null;
	}

}
