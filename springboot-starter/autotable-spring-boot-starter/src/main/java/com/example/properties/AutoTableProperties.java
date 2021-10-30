package com.example.properties;

import com.example.enums.AtType;
import com.example.enums.JdbcType;
import com.example.enums.ProductType;
import com.example.type.AutoTableType;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.map.MapUtil;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * 核心配置类
 *
 */
@Slf4j
@Data
public class AutoTableProperties {
    /**
     * 产品类型
     */
    private ProductType productType;
    /**
     * 生成模式
     */
    private AtType type = AtType.NONE;

    /**
     * 模式处理器
     */
    private Map<AtType,AutoTableType> handlers = MapUtil.newHashMap();

    /**
     * 数据库SQL配置
     */
    private Map<ProductType, DDLAction> sql = MapUtil.newHashMap();

    /**
     * 类型转换映射
     */
    private Map<ProductType, Map<JdbcType, String>> JdbcTypes = MapUtil.newHashMap();

    {
        Map<JdbcType, String> mysqlJdbcType = MapUtil.newHashMap();
        {
            mysqlJdbcType.put(JdbcType.VARCHAR, "varchar(@{length>0?length:255})");
            mysqlJdbcType.put(JdbcType.FLOAT, "float(@{length>0?length:11},@{decimal>0?decimal:2})");
            mysqlJdbcType.put(JdbcType.DOUBLE, "double(@{length>0?length:11},@{decimal>0?decimal:2})");
            mysqlJdbcType.put(JdbcType.INTEGER, "int(@{length>0?length:11})");
            mysqlJdbcType.put(JdbcType.BIGINT, "bigint(@{length>0?length:11})");
            mysqlJdbcType.put(JdbcType.BIT, "bit(1)");
            mysqlJdbcType.put(JdbcType.TIMESTAMP, "timestamp");
            mysqlJdbcType.put(JdbcType.DATE, "datetime");
        }
        JdbcTypes.put(ProductType.MYSQL, mysqlJdbcType);
    }

    /**
     * Java类到JdbcType映射
     */
    private Map<Class<?>, JdbcType> javaTypes = MapUtil.newHashMap();

    {
        javaTypes.put(String.class, JdbcType.VARCHAR);
        javaTypes.put(Date.class, JdbcType.DATE);
        javaTypes.put(Integer.class, JdbcType.INTEGER);
        javaTypes.put(Double.class, JdbcType.DOUBLE);
        javaTypes.put(Float.class, JdbcType.FLOAT);
        javaTypes.put(Long.class, JdbcType.BIGINT);
        javaTypes.put(Short.class, JdbcType.INTEGER);
        javaTypes.put(Boolean.class, JdbcType.BOOLEAN);
        javaTypes.put(Timestamp.class, JdbcType.TIMESTAMP);
    }

    /**
     * 临时字段名称
     */
    private String tempColumnName = "$_auto_table_temp";

    /**
     * 类别名称: 在Mysql中对应数据库名称,在Oracle中对应实例名称
     */
    private String catalog = "";

    /**
     * bean所在包配置
     */
    private List<String> baseBeanPackages = CollUtil.newArrayList();
}
