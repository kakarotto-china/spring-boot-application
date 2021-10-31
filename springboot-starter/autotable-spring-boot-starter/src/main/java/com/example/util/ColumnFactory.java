package com.example.util;

import cn.hutool.core.convert.Convert;
import cn.hutool.core.lang.Assert;
import com.example.annotation.AtColumn;
import com.example.enums.AtEnum;
import com.example.enums.JdbcType;
import com.example.enums.ProductType;
import com.example.exception.AutoTableException;
import com.example.model.AtField;
import com.example.model.ColumnInfo;
import com.example.properties.AutoTableProperties;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.ClassUtils;

import java.sql.Types;
import java.util.HashMap;
import java.util.Map;

/**
 * 字段工厂
 */
@Slf4j
public class ColumnFactory {

    private static AutoTableProperties properties;

    /**
     * 设置配置对象
     *
     * @param properties 配置对象
     */
    public static void setProperties(AutoTableProperties properties) {
        ColumnFactory.properties = properties;
    }

    /**
     * 根据属性对象获取字段信息
     *
     * @param productType 数据库类型
     * @param field       属性对象
     * @return 列信息
     */
    public static ColumnInfo getColumnInfo(ProductType productType, AtField field) {
        ColumnInfo columnInfo = new ColumnInfo();
        AtColumn column = AnnotationUtil.getAnnotation(field.getField(), AtColumn.class);
        columnInfo.setAutoincrement(column.autoincrement());
        columnInfo.setColumnName(column.name());
        columnInfo.setComment(column.comment());
        columnInfo.setLength(column.length());
        columnInfo.setDecimalDigit(column.decimalDigit());
        columnInfo.setCatalog(properties.getCatalog());
        // 获取字段对应的Jdbc类型
        columnInfo.setDataType(getTypeCode(field));
        columnInfo.setType(getProductDbType(productType, columnInfo));
        columnInfo.setPrimaryKey(column.primaryKey());
        columnInfo.setNullable(!column.notNull());
        columnInfo.setDefaultValue(column.defaultValue());
        return columnInfo;
    }

    /**
     * 根据JdbcType获取实际的数据库的数据类型
     *
     * @param productType 数据库类型
     * @param columnInfo  列信息
     * @return 数据类型
     */
    private static String getProductDbType(ProductType productType, ColumnInfo columnInfo) {
        Map<ProductType, Map<JdbcType, String>> JdbcTypes = properties.getJdbcTypes();
        if (JdbcTypes.containsKey(productType)) {
            Map<JdbcType, String> types = JdbcTypes.get(productType);
            JdbcType jdbcType = JdbcType.toJdbcType(columnInfo.getDataType());
            if (types.containsKey(jdbcType)) {
                String type = types.get(jdbcType);
                Map<String, Object> context = new HashMap<>(2);
                context.put("length", columnInfo.getLength());
                context.put("decimal", columnInfo.getDecimalDigit());
                return SqlUtil.parseSql(type, context);
            } else {
                log.warn("类型[{}]的映射配置不存在,将使用默认配置:{}", jdbcType.name(), jdbcType.toString().toLowerCase());
                return jdbcType.toString().toLowerCase();
            }
        }
        throw new AutoTableException("对应数据库的类型映射不存在,请检查${auto-table.Jdbc-types}配置中是否存在数据库[" + productType + "]的映射配置");
    }

    /**
     * 获取JdbcType类型
     *
     * @param field 列注解
     * @return {@link Types 数据类型}
     */
    @SneakyThrows
    private static int getTypeCode(AtField field) {
        AtColumn column = field.getDeclaredAnnotation(AtColumn.class);
        Map<Class<?>, JdbcType> javaTypes = properties.getJavaTypes();
        if (JdbcType.AUTO == column.type()) {
            // 查找Java类映射匹配
            if (javaTypes.containsKey(field.getType())) {
                return javaTypes.get(field.getType()).getType();
            } else if (ClassUtils.isAssignable(AtEnum.class, field.getType())) {
                Object[] enumConstants = field.getType().getEnumConstants();
                Assert.notEmpty(enumConstants, "枚举类型{}没有实例", field.getType().getName());
                AtEnum<?> atEnum = Convert.convert(AtEnum.class, enumConstants[0]);
                Class<?> javaType = atEnum.getJavaType();
                return javaTypes.get(javaType).getType();
            } else {
                throw new AutoTableException("数据类型映射错误:" + field.getType());
            }
        }
        return JdbcType.UNKOWN.getType();
    }
}
