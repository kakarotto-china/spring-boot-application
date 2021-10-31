package com.example.runner;

import cn.hutool.core.util.StrUtil;
import com.example.annotation.AtTable;
import com.example.enums.AtType;
import com.example.enums.ProductType;
import com.example.exception.AutoTableException;
import com.example.listener.event.AutoTableInitEvent;
import com.example.listener.event.AutoTableStep1Event;
import com.example.listener.event.AutoTableStep3Event;
import com.example.model.TableInfo;
import com.example.properties.AutoTableProperties;
import com.example.properties.DDLAction;
import com.example.type.AutoTableType;
import com.example.util.PackageScanUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

/**
 * AutoTable 业务启动类
 *
 * @author Jason
 */
@Component
@Slf4j
public class AutoTableApplicationRunner implements ApplicationRunner {
    private final AutoTableProperties properties;

    private final DataSource dataSource;

    private final ApplicationContext applicationContext;

    public AutoTableApplicationRunner(AutoTableProperties properties, DataSource dataSource,
                                      ApplicationContext applicationContext) {
        this.properties = properties;
        this.dataSource = dataSource;
        this.applicationContext = applicationContext;
    }

    @PostConstruct
    private void init() {
        // 构造完成后
        applicationContext.publishEvent(new AutoTableInitEvent(new Object()));
    }

    @Override
    public void run(ApplicationArguments args) {
        // --------------------------------- start ----------------------
        log.info("AutoTable 开始工作");
        AtType aTType = properties.getType();
        if (aTType == AtType.NONE) {
            log.warn("由于启动模式为[{}],AutoTable不做任何处理", AtType.NONE);
            log.info("AutoTable 停止工作");
            return;
        }
        log.info("当前启动模式:{}", aTType);
        // ------------------打开连接--------------
        try (Connection connection = dataSource.getConnection(); Statement statement = connection.createStatement()) {
            applicationContext.publishEvent(new AutoTableStep1Event(connection));
            applicationContext.publishEvent("检查基本参数");

            // 获取需要创建表的实体对象
            List<Class<?>> tableClasses = PackageScanUtil.scannerByAnnotation(properties.getBaseBeanPackages(), AtTable.class);
            ProductType productType = properties.getProductType();
            // 扫描实体
            List<TableInfo> tables = PackageScanUtil.scannerEntities(productType, tableClasses, properties);
            log.info("开始构建DDL...");
            // 得到对应数据库的Sql配置对象
            DDLAction ddlAction = properties.getSql().get(productType);
            // 准备Sql代码存放容器
            AutoTableType handle = properties.getHandlers().get(properties.getType());
            List<String> sqlList = handle.autoTable(ddlAction, tables);
            log.info("开始执行DDL...");
            // 集中运行Sql
            for (String sql : sqlList) {
                if (StrUtil.isBlank(sql)) {
                    continue;
                }
                log.debug("执行Sql: {}", sql);
                statement.addBatch(sql);
            }
            statement.executeBatch();
            log.info("AutoTable处理完成!");
        } catch (SQLException e) {
            throw new AutoTableException(e);
        } finally {
            // 结束前的工作
            applicationContext.publishEvent(new AutoTableStep3Event(new Object()));
        }
    }

}
