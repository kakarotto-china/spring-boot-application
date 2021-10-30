package com.example.util;

import com.example.converter.Field;
import com.example.converter.Converter;
import com.example.model.AtField;
import com.example.model.ColumnInfo;
import com.example.model.PrimaryKey;
import com.example.model.TableInfo;

import lombok.extern.slf4j.Slf4j;

import java.lang.reflect.Type;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 数据库工具类
 * 
 */
@SuppressWarnings("unused")
@Slf4j
public class DataBaseUtil {
	/**
	 * 表类型
	 */
	private static final String[] TABLE_TYPES = { "TABLE" };
	private static DatabaseMetaData md;

	/**
	 * 设置元数据对象
	 * 
	 * @param md 元数据对象
	 */
	public static void setDatabaseMetaData(DatabaseMetaData md) {
		DataBaseUtil.md = md;
	}

	/**
	 * 检测表是否存在
	 * 
	 * @param catalog   类别名称: 在Mysql中对应数据库名称,在Oracle中对应实例名称
	 * @param tableName 表名
	 * @return boolean
	 * @throws SQLException 数据库异常
	 */
	public static boolean isTable(String catalog, String tableName) throws SQLException {
		try (ResultSet rs = md.getTables(catalog, null, tableName, TABLE_TYPES)) {
			return rs.next();
		}
	}

	/**
	 * 检测表是否存在
	 * 
	 * @param table 表信息
	 * @return boolean
	 * @throws SQLException 数据库异常
	 */
	public static boolean isTable(TableInfo table) throws SQLException {
		return isTable(table.getCatalog(), table.getTableName());
	}

	/**
	 * 获取指定表的主键
	 * 
	 * @param tableInfo 表信息
	 * @return 主键列表
	 */
	public static List<PrimaryKey> getPrimaryKeys(TableInfo tableInfo) {
		return getPrimaryKeys(tableInfo.getCatalog(), tableInfo.getTableName());
	}

	/**
	 * 获取指定表的主键
	 * 
	 * @param catalog   类别名称: 在Mysql中对应数据库名称,在Oracle中对应实例名称
	 * @param tableName 表名
	 * @return 主键列表
	 */
	public static List<PrimaryKey> getPrimaryKeys(String catalog, String tableName) {
		List<PrimaryKey> list = new ArrayList<PrimaryKey>(5);
		try (ResultSet rs = md.getPrimaryKeys(catalog, null, tableName)) {
			PrimaryKey pk = null;
			while (rs.next()) {
				pk = new PrimaryKey();
//				TABLE_CAT String => 表类别（可为 null） 
				pk.setCatalog(rs.getString("TABLE_CAT"));
//				TABLE_SCHEM String => 表模式（可为 null） 
				pk.setTableSchem(rs.getString("TABLE_SCHEM"));
//				TABLE_NAME String => 表名称 
				pk.setTableName(rs.getString("TABLE_NAME"));
//				COLUMN_NAME String => 列名称 
				pk.setColumnName(rs.getString("COLUMN_NAME"));
//				KEY_SEQ short => 主键中的序列号（值 1 表示主键中的第一列，值 2 表示主键中的第二列）。
				pk.setKeySeq(rs.getInt("KEY_SEQ"));
//				PK_NAME String => 主键的名称（可为 null）
				pk.setPkName(rs.getString("PK_NAME"));
				list.add(pk);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	}

	/**
	 * 检测字段是否存在
	 * 
	 * @param columnInfo 字段信息
	 * @return boolean
	 * @throws SQLException 数据库异常
	 */
	public static boolean isColumn(ColumnInfo columnInfo) throws SQLException {
		return isColumn(columnInfo.getCatalog(), columnInfo.getTableName(), columnInfo.getColumnName());
	}

	/**
	 * 检测字段在表中是否存在
	 * 
	 * @param catalog           类别名称: 在Mysql中对应数据库名称,在Oracle中对应实例名称
	 * @param tableName         表名
	 * @param columnNamePattern 列名称
	 * @return boolean
	 * @throws SQLException 数据库异常
	 */
	public static boolean isColumn(String catalog, String tableName, String columnNamePattern) throws SQLException {
		return !getColumns(catalog, tableName, columnNamePattern).isEmpty();

	}

	/**
	 * 获取表的所有字段
	 * 
	 * @param catalog           类别名称: 在Mysql中对应数据库名称,在Oracle中对应实例名称
	 * @param tableName         表名
	 * @param columnNamePattern 列名称
	 * @return 字段列表
	 * @throws SQLException 数据库异常
	 */
	public static List<ColumnInfo> getColumns(String catalog, String tableName, String columnNamePattern)
			throws SQLException {
		List<ColumnInfo> list = new ArrayList<>(10);
		try (ResultSet rs = md.getColumns(catalog, null, tableName, columnNamePattern)) {
			ColumnInfo columnInfo = null;
			while (rs.next()) {
				columnInfo = new ColumnInfo();
				columnInfo.setCharOctetLength(rs.getInt("CHAR_OCTET_LENGTH"));
				columnInfo.setDefaultValue(rs.getString("COLUMN_DEF"));
				columnInfo.setColumnName(rs.getString("COLUMN_NAME"));
				columnInfo.setLength(rs.getInt("COLUMN_SIZE"));
				columnInfo.setDataType(rs.getInt("DATA_TYPE"));
				columnInfo.setDecimalDigit(rs.getInt("DECIMAL_DIGITS"));
				columnInfo.setAutoincrement(rs.getString("IS_AUTOINCREMENT"));
				columnInfo.setIsNullable(rs.getString("IS_NULLABLE"));
				columnInfo.setNullable(rs.getInt("NULLABLE"));
				columnInfo.setComment(rs.getString("REMARKS"));
				columnInfo.setCatalog(rs.getString("TABLE_CAT"));
				columnInfo.setTableName(rs.getString("TABLE_NAME"));
				columnInfo.setTypeName(rs.getString("TYPE_NAME"));
//				list.add(parseResultSet(rs, ColumnInfo.class));
				list.add(columnInfo);
			}
		}

		return list;
	}
	/**
	 * 下个版本更新内容
	 * TODO 未完成
	 * @param <T>
	 * @param rs
	 * @param clazz
	 * @return
	 */
	private static <T> T parseResultSet(ResultSet rs, Class<T> clazz) {
		T t = ClassUtil.newInstance(clazz);
		List<Converter> converters = SpringContextUtil.getBeans(Converter.class);
		List<AtField> list = AnnotationUtil.fieldsByAnnotation(clazz, Field.class);
		for (AtField field : list) {
			String columnName = ClassUtil.getAnnotationValue(field, Field.class, "name",
					field.getName());
			try {
				Object value = rs.getObject(columnName);
				List<Converter> collect = converters.stream().filter(c -> {
					Type[] types = ClassUtil.getParameterizedTypes(c.getClass());
					return c.isConverter(clazz) && field.getType() == types[1] && ((Class) types[0]).isInstance(value);
				}).collect(Collectors.toList());
				if (collect.isEmpty()) {
					ClassUtil.setFieldValue(field, t, value);
				} else {
					collect.stream().forEach(c -> {
						ClassUtil.setFieldValue(field, t, c.converter(clazz, columnName, value));
					});
				}

			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		log.trace("ResultSet => ", t);
		return t;
	}
}
