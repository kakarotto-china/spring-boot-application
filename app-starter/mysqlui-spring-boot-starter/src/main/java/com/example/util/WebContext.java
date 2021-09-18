/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.util;

import com.example.domain.dto.PageDto;
import com.example.domain.value.PageNo;
import com.example.domain.value.PageSize;

import cn.hutool.core.util.NumberUtil;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import java.util.Optional;

/**
 * @author yWX978481
 * @since 2021/9/17
 */
@Component
@Slf4j
public class WebContext implements ApplicationContextAware {
    private static final ThreadLocal<PageDto> PAGE_DTO_THREAD_LOCAL = new ThreadLocal<>();

    private static ApplicationContext applicationContext;

    /**
     * 设置分页参数，在过滤器中使用
     *
     * @param pageNo pageNo
     * @param pageSize pageSize
     */
    public static void setPageDto(String pageNo, String pageSize) {
        if (NumberUtil.isInteger(pageNo) && NumberUtil.isInteger(pageSize)) {
            PAGE_DTO_THREAD_LOCAL.set(
                PageDto.of(PageNo.of(Integer.parseInt(pageNo)), PageSize.of(Integer.parseInt(pageSize))));
            log.info("设置分页参数，pageNo={}， pageSize={}", pageNo, pageSize);
        }
    }

    /**
     * 获取分页参数，一次请求只能使用一次
     *
     * @return PageDto
     */
    public static PageDto getPageDto() {
        PageDto pageDto = Optional.ofNullable(PAGE_DTO_THREAD_LOCAL.get())
            .orElseThrow(() -> new RuntimeException("当前请求上下文非分页环境"));
        PAGE_DTO_THREAD_LOCAL.remove();
        log.info("获取分页参数，pageDto={}，并清理PAGE_DTO_THREAD_LOCAL上下文", pageDto);
        return pageDto;
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        WebContext.applicationContext = applicationContext;
    }
}
