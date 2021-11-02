package com.example.converter;

import com.example.model.ColumnInfo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/**
 * 布尔类型转换
 */
@Slf4j
public class ColumnInfoBooleanConverter implements Converter<Boolean> {
    private static final String NO = "NO";

    private static final String YES = "YES";

    @Override
    public Boolean converter(Class<?> clazz, String columnName, Object sourceValue) {
        Boolean result = null;
        if (YES.equals(sourceValue)) {
            result = true;
        } else if (NO.equals(sourceValue)) {
            result = false;
        }
        log.debug("{}.{} convert to {}", clazz.getSimpleName(), columnName, result);
        return result;
    }

}
