package com.example.properties;

import com.example.enums.ProductType;

import lombok.AllArgsConstructor;
import lombok.ToString;

import org.springframework.stereotype.Component;

/**
 * DDLAction mysql的基本实现
 *
 * @since 2021/10/26
 */
@Component
@AllArgsConstructor
@ToString
public class MysqlDDLAction implements DDLAction {
    public final String createPrimaryKey = "alter table `@{catalog}`.`@{tableName}` @{oldPkSize>0?'drop primary key,':''} add primary key (@{for(pk:primaryKeys ,) '`'+pk+'`'}) USING BTREE";

    public final String createColumnSql = "alter table `@{catalog}`.`@{tableName}` add `@{columnName}` @{type} @{notNull?'not null':''} @{autoincrement?'primary key AUTO_INCREMENT':''} @{defaultValue?('default '+defaultValue):''} comment '@{comment}'";

    public final String createTableSql = "create table `@{catalog}`.`@{tableName}`(`@{tempColumnName}` int) comment '@{comment}'";

    public final String dropColumnSql = "alter table `@{catalog}`.`@{tableName}` drop `@{columnName}`";

    public final String dropTableSql = "drop table `@{catalog}`.`@{tableName}`";

    public final String updateColumnSql ="alter table `@{catalog}`.`@{tableName}` modify `@{columnName}` @{type} @{notNull?'not null':''} comment '@{comment}'";

    @Override
    public String getCreatePrimaryKey() {
        return createPrimaryKey;
    }

    @Override
    public String getCreateTableSql() {
        return createTableSql;
    }

    @Override
    public String getDropTableSql() {
        return dropTableSql;
    }

    @Override
    public String getCreateColumnSql() {
        return createColumnSql;
    }

    @Override
    public String getDropColumnSql() {
        return dropColumnSql;
    }

    @Override
    public String getUpdateColumnSql() {
        return updateColumnSql;
    }

    @Override
    public ProductType productType() {
        return ProductType.MYSQL;
    }
}
