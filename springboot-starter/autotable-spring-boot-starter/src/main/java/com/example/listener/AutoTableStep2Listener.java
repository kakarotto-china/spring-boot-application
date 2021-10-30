package com.example.listener;

import com.example.enums.AtType;
import com.example.enums.ProductType;
import com.example.exception.AutoTableException;
import com.example.listener.event.AutoTableStep2Event;
import com.example.properties.AutoTableProperties;
import com.example.properties.DDLAction;
import com.example.type.AutoTableType;

import cn.hutool.core.util.StrUtil;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;

import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.util.Map;

/**
 * AutoTableStep2Listener
 *
 * @since 2021/10/29
 */
@Component
@Slf4j
public class AutoTableStep2Listener implements ApplicationListener<AutoTableStep2Event> {
    private final AutoTableProperties properties;

    public AutoTableStep2Listener(AutoTableProperties properties) {
        this.properties = properties;
    }

    @SneakyThrows
    @Override
    public void onApplicationEvent(AutoTableStep2Event event) {
        log.info(event.getSource());
        // 获取Sql配置
        Map<ProductType, DDLAction> sqlMap = properties.getSql();
        ProductType productType = properties.getProductType();
        if (!sqlMap.containsKey(productType)) {
            log.info("支持的数据库类型:{}", sqlMap.keySet());
            throw new AutoTableException("数据库类型错误或暂不支持数据库:" + productType);
        }
        // 数据源catalog todo 需要核实： 是否是只有mysql需要检查？
        String catalog = properties.getCatalog();
        if (StrUtil.isBlank(catalog)) {
            throw new AutoTableException("@EnableAutoTable.catalog属性为空");
        }
        // sql模板处理器
        AtType aTType = properties.getType();
        Map<AtType, AutoTableType> handlers = properties.getHandlers();
        if (!handlers.containsKey(aTType)) {
            throw new AutoTableException("[{}]模式的处理未找到,请检查是否有{}类型的{}的实现bean", aTType, AutoTableType.class.getName(),
                aTType);
        }
    }
}
