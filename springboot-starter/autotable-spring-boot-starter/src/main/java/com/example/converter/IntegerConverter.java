package com.example.converter;

import com.example.model.ColumnInfo;

import java.sql.DatabaseMetaData;

import org.springframework.stereotype.Component;

/**
 * Integer转Boolean
 * 
 */
@Component
public class IntegerConverter implements Converter<Integer, Boolean> {

	private static final String NULLABLE = "NULLABLE";

	@Override
	public boolean isConverter(Class<?> clazz) {
		if (clazz == com.example.model.ColumnInfo.class) {
			return true;
		}
		return false;
	}

	@Override
	public Boolean converter(Class<?> clazz, String columnName, Integer sourceValue) {
		if (clazz == ColumnInfo.class) {
			if (NULLABLE.equals(columnName)) {
				if (DatabaseMetaData.columnNoNulls == sourceValue) {
					return false;
				} else if (DatabaseMetaData.columnNullable == (sourceValue)) {
					return true;
				}
			}
		}
		return null;
	}

}
