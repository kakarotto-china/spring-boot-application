package com.example.converter;

import com.example.model.ColumnInfo;

import org.springframework.stereotype.Component;

/**
 * 布尔类型转换
 * 
 */
public class ColumnInfoBooleanConverter implements Converter<Boolean> {

	private static final String NO = "NO";
	private static final String YES = "YES";
	private static final String IS_AUTOINCREMENT = "IS_AUTOINCREMENT";

	@Override
	public Boolean converter(Class<?> clazz,String columnName, Object sourceValue) {
		if(clazz== ColumnInfo.class) {
			if(IS_AUTOINCREMENT.equals(columnName)) {
				if(YES.equals(sourceValue)) {
					return true;
				}else if(NO.equals(sourceValue)) {
					return false;
				}
			}
		}
		return null;
	}

}
