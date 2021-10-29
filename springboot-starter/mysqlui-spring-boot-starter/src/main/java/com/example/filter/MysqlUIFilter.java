/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.filter;

import com.example.properties.MysqlUIProperties;
import com.example.util.WebContext;

import cn.hutool.core.util.StrUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.Ordered;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author yWX978481
 * @since 2021/9/13
 */
@WebFilter(filterName = "MysqlUIFilter")
public class MysqlUIFilter implements Filter, Ordered {
    @Autowired
    private MysqlUIProperties mysqluiProperties;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
        throws IOException, ServletException {
        WebContext.setPageDto(servletRequest.getParameter(mysqluiProperties.getPageNoKey()),
            servletRequest.getParameter(mysqluiProperties.getPageSizeKey()));
        String requestURI = ((HttpServletRequest) servletRequest).getRequestURI();
        // 不启用时，拦截所有相关资源
        if (!mysqluiProperties.isEnable() && StrUtil.containsAnyIgnoreCase(requestURI, "/mysql-ui.html", "/mysqlui/")) {
            HttpServletResponse response = (HttpServletResponse) servletResponse;
            response.setStatus(404);
            response.getWriter().write("配置mysqlui未开启");
            return;
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {
    }

    @Override
    public int getOrder() {
        return mysqluiProperties.getOrder();
    }
}
