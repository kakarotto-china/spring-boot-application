package com.example.util;

import com.example.annotation.AtColumn;
import com.example.annotation.AtTable;
import com.example.enums.ProductType;
import com.example.exception.AutoTableException;
import com.example.model.AtField;
import com.example.model.ColumnInfo;
import com.example.model.PrimaryKey;
import com.example.model.TableInfo;
import com.example.core.AutoTableContext;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.map.MapUtil;
import lombok.extern.slf4j.Slf4j;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.core.type.classreading.CachingMetadataReaderFactory;
import org.springframework.core.type.classreading.MetadataReader;
import org.springframework.core.type.classreading.MetadataReaderFactory;
import org.springframework.core.type.filter.AnnotationTypeFilter;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

/**
 * @since 2021/10/26
 */
@Slf4j
public class PackageScanUtil {
    private static final ResourcePatternResolver RESOURCE_PATTERN_RESOLVER = new PathMatchingResourcePatternResolver();

    private static final MetadataReaderFactory READER_FACTORY = new CachingMetadataReaderFactory(
            RESOURCE_PATTERN_RESOLVER);

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
    public static List<Class<?>> scannerByAnnotation(List<String> baseBeanPackages, Class<? extends Annotation> annotationType) {
        try {
            List<Class<?>> classList = new ArrayList<>();
            // 若为空，则扫描启动类下所有包
            if (CollUtil.isEmpty(baseBeanPackages)) {
                baseBeanPackages.addAll(getRootPackage());
            }
            // 扫描指定了的基础包
            for (String packageName : baseBeanPackages) {
                List<Class<?>> list = scannerByAnnotation(packageName, annotationType);
                classList.addAll(list);
            }
            return classList;
        } catch (IOException | ClassNotFoundException e) {
            throw new AutoTableException(e);
        }
    }

    /**
     * 根据注解扫描类
     *
     * @param packageName 包名
     * @param annotationType 注解
     * @return 类集合
     * @throws IOException IO异常
     * @throws ClassNotFoundException 类找不到异常
     */
    public static List<Class<?>> scannerByAnnotation(String packageName, Class<? extends Annotation> annotationType)
            throws IOException, ClassNotFoundException {
        String classpathAllUrlPrefix = ResourcePatternResolver.CLASSPATH_ALL_URL_PREFIX + packageName.replace('.', '/')
                + "/**/*.class";
        Resource[] resources = RESOURCE_PATTERN_RESOLVER.getResources(classpathAllUrlPrefix);

        AnnotationTypeFilter filter = new AnnotationTypeFilter(annotationType);
        List<Class<?>> list = new ArrayList<>();
        log.trace("正在扫描:{}", classpathAllUrlPrefix);
        for (Resource resource : resources) {
            MetadataReader reader = READER_FACTORY.getMetadataReader(resource);
            if (filter.match(reader, READER_FACTORY)) {
                Class<?> type = Class.forName(reader.getClassMetadata().getClassName());
                list.add(type);
                log.trace("扫描结果:{}", type.getName());
            }
        }
        return list;
    }

    public static List<TableInfo> scannerEntities(ProductType type, List<Class<?>> tableClasses,
        AutoTableContext properties) {
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
            AtTable tableAnnotation = AnnotationUtil.getAnnotation(clazz, AtTable.class);
            table.setTableName(tableAnnotation.name());
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
