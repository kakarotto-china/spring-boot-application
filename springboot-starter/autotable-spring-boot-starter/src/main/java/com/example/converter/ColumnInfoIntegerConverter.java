package com.example.converter;

import cn.hutool.core.util.ObjectUtil;
import lombok.extern.slf4j.Slf4j;

import java.sql.DatabaseMetaData;

/**
 * Integer转Boolean
 */
@Slf4j
public class ColumnInfoIntegerConverter implements Converter<Boolean> {
    @Override
    public Boolean converter(Class<?> clazz, String columnName, Object sourceValue) {
        Boolean result = null;
        if (ObjectUtil.equal(sourceValue, DatabaseMetaData.columnNoNulls)) {
            result = false;
        } else if (ObjectUtil.equal(sourceValue, DatabaseMetaData.columnNullable)) {
            result = true;
        }
        log.debug("{}.{} convert to {}", clazz.getSimpleName(), columnName, result);
        return result;
    }

}
