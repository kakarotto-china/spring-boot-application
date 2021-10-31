package com.example.enums;

import com.example.exception.AutoTableException;

import java.sql.Types;

/**
 * JdbcType枚举
 */
public enum JdbcType {
    /**
     * 未知类型
     */
    UNKOWN(-1),
    /**
     * 自动识别
     */
    AUTO(0),
    /**
     * 标识一般 SQL 类型 ARRAY 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    ARRAY(Types.ARRAY),
    /**
     * 标识一般 SQL 类型 BIGINT 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    BIGINT(Types.BIGINT),
    /**
     * 标识一般 SQL 类型 BINARY 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    BINARY(Types.BINARY),
    /**
     * 标识一般 SQL 类型 BIT 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    BIT(Types.BIT),
    /**
     * 标识一般 SQL 类型 BLOB 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    BLOB(Types.BLOB),
    /**
     * 标识一般 SQL 类型 BOOLEAN 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    BOOLEAN(Types.BOOLEAN),
    /**
     * 标识一般 SQL 类型 CHAR 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    CHAR(Types.CHAR),
    /**
     * 标识一般 SQL 类型 CLOB 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    CLOB(Types.CLOB),
    /**
     * 标识一般 SQL 类型 DATALINK 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    DATALINK(Types.DATALINK),
    /**
     * 标识一般 SQL 类型 DATE 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    DATE(Types.DATE),
    /**
     * 标识一般 SQL 类型 DECIMAL 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    DECIMAL(Types.DECIMAL),
    /**
     * 标识一般 SQL 类型 DISTINCT 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    DISTINCT(Types.DISTINCT),
    /**
     * 标识一般 SQL 类型 DOUBLE 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    DOUBLE(Types.DOUBLE),
    /**
     * 标识一般 SQL 类型 FLOAT 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    FLOAT(Types.FLOAT),
    /**
     * 标识一般 SQL 类型 INTEGER 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    INTEGER(Types.INTEGER),
    /**
     * 标识一般 SQL 类型 JAVA_OBJECT 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    JAVA_OBJECT(Types.JAVA_OBJECT),
    /**
     * 标识一般 SQL 类型 LONGNVARCHAR 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    LONGNVARCHAR(Types.LONGNVARCHAR),
    /**
     * 标识一般 SQL 类型 LONGVARBINARY 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    LONGVARBINARY(Types.LONGVARBINARY),
    /**
     * 标识一般 SQL 类型 LONGVARCHAR 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    LONGVARCHAR(Types.LONGVARCHAR),
    /**
     * 标识一般 SQL 类型 NCHAR 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    NCHAR(Types.NCHAR),
    /**
     * 标识一般 SQL 类型 NCLOB 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    NCLOB(Types.NCLOB),
    /**
     * 标识一般 SQL 值 NULL 的 Java 编程语言中的常量。
     */
    NULL(Types.NULL),
    /**
     * 标识一般 SQL 类型 NUMERIC 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    NUMERIC(Types.NUMERIC),
    /**
     * 标识一般 SQL 类型 NVARCHAR 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    NVARCHAR(Types.NVARCHAR),
    /**
     * Java 编程语言中的常量，该常量指示 SQL 类型是特定于数据库的并且被映射到可通过 getObject 和 setObject 方法访问的 Java
     * 对象。
     */
    OTHER(Types.OTHER),
    /**
     * 标识一般 SQL 类型 REAL 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    REAL(Types.REAL),
    /**
     * 标识一般 SQL 类型 REF 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    REF(Types.REF),
    /**
     * 标识一般 SQL 类型 ROWID 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    ROWID(Types.ROWID),
    /**
     * 标识一般 SQL 类型 SMALLINT 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    SMALLINT(Types.SMALLINT),
    /**
     * 标识一般 SQL 类型 XML 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    SQLXML(Types.SQLXML),
    /**
     * 标识一般 SQL 类型 STRUCT 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    STRUCT(Types.STRUCT),
    /**
     * 标识一般 SQL 类型 TIME 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    TIME(Types.TIME),
    /**
     * 标识一般 SQL 类型 TIMESTAMP 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    TIMESTAMP(Types.TIMESTAMP),
    /**
     * 标识一般 SQL 类型 TINYINT 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    TINYINT(Types.TINYINT),
    /**
     * 标识一般 SQL 类型 VARBINARY 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    VARBINARY(Types.VARBINARY),
    /**
     * 标识一般 SQL 类型 VARCHAR 的 Java 编程语言中的常量（有时称为类型代码）。
     */
    VARCHAR(Types.VARCHAR);

    int type;

    private JdbcType(int type) {
        this.type = type;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public static JdbcType toJdbcType(int type) {
        JdbcType[] values = values();
        for (JdbcType jdbcType : values) {
            if (jdbcType.getType() == type) {
                return jdbcType;
            }
        }
        throw new AutoTableException("type[" + type + "]未找到对应的JdbcType");
    }
}
