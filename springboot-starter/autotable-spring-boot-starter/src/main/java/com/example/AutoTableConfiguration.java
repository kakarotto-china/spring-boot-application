package com.example;

import com.example.annotation.EnableAutoTable;
import com.example.enums.AtType;

import cn.hutool.core.convert.Convert;
import cn.hutool.core.lang.TypeReference;
import com.example.properties.AutoTableProperties;
import com.example.util.NullHandler;
import lombok.extern.slf4j.Slf4j;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportAware;
import org.springframework.core.type.AnnotationMetadata;
import org.springframework.core.type.StandardAnnotationMetadata;

import java.util.List;

/**
 * AutoTable 入口类
 */
@Configuration
@ComponentScan("com.example")
@Slf4j
public class AutoTableConfiguration implements ImportAware {
    private final AutoTableProperties autoTableContext;

    public AutoTableConfiguration() {
        this.autoTableContext = new AutoTableProperties();
    }

    @Bean
    public AutoTableProperties autoTableProperties() {
        return autoTableContext;
    }

    @Override
    public void setImportMetadata(AnnotationMetadata importMetadata) {
        StandardAnnotationMetadata sam = Convert.convert(StandardAnnotationMetadata.class, importMetadata);
        NullHandler.newInstances(StandardAnnotationMetadata.class).doNoneNull(sam, standardAnnotationMetadata -> {
            EnableAutoTable annotation = standardAnnotationMetadata.getIntrospectedClass().getAnnotation(EnableAutoTable.class);
            // 设置包扫描
            autoTableContext.setBaseBeanPackages(
                    Convert.convert(new TypeReference<List<String>>() {
                    }, annotation.baseAnnotationScan()));
            // 设置数据库主体
            autoTableContext.setCatalog(Convert.convert(String.class, annotation.catalog()));
            // 设置自动建表类型
            autoTableContext.setType(Convert.convert(AtType.class, annotation.type()));
        });
    }
}
