package com.example.converter;

import cn.hutool.core.collection.CollUtil;
import com.example.model.AtField;
import com.example.util.AnnotationUtil;
import com.example.util.ReflectUtil;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;

import java.sql.ResultSet;
import java.util.List;

@Slf4j
public class ResultSetMapper {
    private ResultSetMapper() {
    }

    @SneakyThrows
    public static <T> List<T> toJava(ResultSet resultSet, Class<T> javaClass) {
        List<T> result = CollUtil.newArrayList();
        while (resultSet.next()) {
            T t = ReflectUtil.newInstance(javaClass);
            List<AtField> list = AnnotationUtil.fieldsByAnnotation(javaClass, ResultSetField.class);
            for (AtField field : list) {
                ResultSetField annotation = AnnotationUtil.getAnnotation(field.getField(), ResultSetField.class);
                String columnName = annotation.name();
                Object value = resultSet.getObject(columnName);
                if (annotation.converter() == Converter.class) {
                    ReflectUtil.setAtFieldValue(field, t, value);
                } else {
                    Converter<?> converter = annotation.converter().newInstance();
                    ReflectUtil.setAtFieldValue(field, t, converter.converter(javaClass, columnName, value));
                }
            }
            log.trace("ResultSetField => {}", t);
            result.add(t);
        }
        return result;
    }
}
