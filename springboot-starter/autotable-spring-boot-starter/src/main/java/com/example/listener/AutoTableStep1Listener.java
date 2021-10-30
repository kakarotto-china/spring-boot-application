package com.example.listener;

import com.example.enums.AtType;
import com.example.enums.ProductType;
import com.example.listener.event.AutoTableStep1Event;
import com.example.properties.AutoTableProperties;
import com.example.properties.DDLAction;
import com.example.syntax.Syntax;
import com.example.type.AutoTableType;
import com.example.util.ColumnFactory;
import com.example.util.DataBaseUtil;
import com.example.util.SqlUtil;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.util.Map;

/**
 * AutoTableStep1Listener
 *
 * @since 2021/10/29
 */
@Component
@Slf4j
public class AutoTableStep1Listener implements ApplicationListener<AutoTableStep1Event> {
    private final AutoTableProperties properties;

    private final ApplicationContext applicationContext;

    public AutoTableStep1Listener(AutoTableProperties properties, ApplicationContext applicationContext) {
        this.properties = properties;
        this.applicationContext = applicationContext;
    }

    @SneakyThrows
    @Override
    public void onApplicationEvent(AutoTableStep1Event event) {
        // 注册handler
        log.info("注册AutoTableType handler...");
        Map<AtType, AutoTableType> handlers = properties.getHandlers();
        Map<String, AutoTableType> autoTableTypeMap = applicationContext.getBeansOfType(AutoTableType.class);
        autoTableTypeMap.values().forEach(autoTableType -> handlers.put(autoTableType.autoTableType(), autoTableType));
        // 注册语法
        log.info("注册语法Syntax...");
        Map<String, Syntax> syntaxMap = applicationContext.getBeansOfType(Syntax.class);
        SqlUtil.registerSyntax(syntaxMap.values());
        // 注册column工厂
        log.info("初始化ColumnFactory");
        ColumnFactory.setProperties(properties);
        // 注册 DDLAction
        Map<String, DDLAction> ddlActionMap = applicationContext.getBeansOfType(DDLAction.class);
        Map<ProductType, DDLAction> sql = properties.getSql();
        ddlActionMap.values().forEach(ddlAction -> {
            sql.put(ddlAction.productType(), ddlAction);
        });
        // 设置连接属性
        Connection connection = event.getSource();
        DatabaseMetaData md = connection.getMetaData();
        log.info("初始化数据库元数据DataBaseUtil");
        DataBaseUtil.setDatabaseMetaData(md);
        // 获取数据库类型
        ProductType type = ProductType.findByProductName(md.getDatabaseProductName());
        properties.setProductType(type);
    }
}
