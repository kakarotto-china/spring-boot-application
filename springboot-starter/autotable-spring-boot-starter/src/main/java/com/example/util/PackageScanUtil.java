package com.example.util;

import com.example.annotation.AtColumn;
import com.example.annotation.AtTable;
import com.example.enums.ProductType;
import com.example.exception.AutoTableException;
import com.example.model.AtField;
import com.example.model.ColumnInfo;
import com.example.model.PrimaryKey;
import com.example.model.TableInfo;
import com.example.properties.AutoTableProperties;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.map.MapUtil;
import lombok.extern.slf4j.Slf4j;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

/**
 * @since 2021/10/26
 */
@Slf4j
public class PackageScanUtil {
    /**
     * 获得当前项目的根包
     *
     * @return List<String> 获取@SpringBootApplication所标注的类的包路径
     */
    private static List<String> getRootPackage() {
        Map<String, Object> map = SpringContextUtil.getBeansWithAnnotation(SpringBootApplication.class);
        if (MapUtil.isEmpty(map)) {
            throw new AutoTableException("获取启动类所在包路径失败.");
        }
        Collection<Object> values = map.values();
        List<String> packageList = CollUtil.newArrayList();
        for (Object obj : values) {
            Class<?> applicationType = obj.getClass();
            packageList.add(applicationType.getPackage().getName());
        }
        return packageList;
    }

    /**
     * 扫描实体类
     *
     * @return 扫描基础包下所有@AtTable标注的类
     */
    public static List<Class<?>> scannerByAnnotation(List<String> baseBeanPackages) {
        try {
            List<Class<?>> classList = new ArrayList<>();
            // 若为空，则扫描启动类下所有包
            if (CollUtil.isEmpty(baseBeanPackages)) {
                baseBeanPackages.addAll(getRootPackage());
            }
            // 扫描指定了的基础包
            for (String packageName : baseBeanPackages) {
                List<Class<?>> list = AnnotationUtil.scannerByAnnotation(packageName, AtTable.class);
                classList.addAll(list);
            }
            return classList;
        } catch (IOException | ClassNotFoundException e) {
            throw new AutoTableException(e);
        }
    }

    public static List<TableInfo> scannerEntities(ProductType type, List<Class<?>> tableClasses,
        AutoTableProperties properties) {
        List<TableInfo> tables = new ArrayList<>(10);
        log.info("正在扫描实体...");
        TableInfo table;
        List<ColumnInfo> columns;
        List<PrimaryKey> primaryKeys;
        for (Class<?> clazz : tableClasses) {
            columns = new ArrayList<>(15);
            primaryKeys = new ArrayList<>(5);
            // 解析表信息
            table = new TableInfo();
            table.setColumns(columns);
            table.setPrimaryKeys(primaryKeys);

            table.setCatalog(properties.getCatalog());
            AtTable tableAnnotation = clazz.getDeclaredAnnotation(AtTable.class);
            table.setTableName(AnnotationUtil.getValue(tableAnnotation, "name", clazz.getSimpleName()));
            table.setComment(tableAnnotation.comment());
            table.setEngine(tableAnnotation.engine());

            // 设置临时字段
            ColumnInfo tempColumn = new ColumnInfo();
            tempColumn.setColumnName(properties.getTempColumnName());
            tempColumn.setTableName(table.getTableName());
            tempColumn.setCatalog(table.getCatalog());
            table.setTempColumn(tempColumn);
            // 开始解析字段
            List<AtField> fields = AnnotationUtil.fieldsByAnnotation(clazz, AtColumn.class);
            ColumnInfo column;
            PrimaryKey primaryKey;
            for (AtField field : fields) {
                // 解析字段
                column = ColumnFactory.getColumnInfo(type, field);
                column.setTableName(table.getTableName());
                columns.add(column);
                // 检测是否为主键
                if (column.isPrimaryKey()) {
                    primaryKey = new PrimaryKey();
                    primaryKey.setCatalog(column.getCatalog());
                    primaryKey.setTableName(column.getTableName());
                    primaryKey.setColumnName(column.getColumnName());
                    primaryKey.setAutoincrement(column.getAutoincrement() != null && column.getAutoincrement());
                    primaryKeys.add(primaryKey);
                }
            }
            log.info("类名:{}  表名:{} 字段数:{} 主键数:{}", clazz.getName(), table.getTableName(), columns.size(),
                primaryKeys.size());
            tables.add(table);
        }
        return tables;
    }

}
