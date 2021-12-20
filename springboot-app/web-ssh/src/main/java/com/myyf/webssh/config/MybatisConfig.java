package com.myyf.webssh.config;

import com.baomidou.mybatisplus.core.handlers.MetaObjectHandler;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.reflection.MetaObject;
import org.springframework.context.annotation.Configuration;

import java.util.Date;

@Configuration
@Slf4j
public class MybatisConfig implements MetaObjectHandler {
    @Override
    public void insertFill(MetaObject metaObject) {
        log.debug("[insertFill] start insert fill ...");
        this.setFieldValByName("createTime", new Date(), metaObject);
        this.setFieldValByName("updateTime", new Date(), metaObject);
        this.setFieldValByName("deleted", 0, metaObject);
    }

    @Override
    public void updateFill(MetaObject metaObject) {
        log.debug("[insertFill] start update fill ...");
        this.setFieldValByName("updateTime", new Date(), metaObject);
    }
}
