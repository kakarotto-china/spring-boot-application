/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.util;

import com.example.syntax.Syntax;

import cn.hutool.core.util.StrUtil;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Sql解析工具类
 *
 * @author Jason
 */
@Slf4j
public class SqlUtil {

    private static final List<Syntax> SYNTAXS = new ArrayList<>(5);

    public static void registerSyntax(Collection<Syntax> syntaxes){
        SYNTAXS.addAll(syntaxes);
    }

    private static final Pattern PATTERN = Pattern.compile("@\\{[^\\}]+\\}");

    /**
     * 解析SQL
     *
     * @param sql sql
     * @param context 上下文环境
     * @return sql
     */
    public static String parseSql(String sql, Map<String, Object> context) {
        Matcher matcher = PATTERN.matcher(sql);
        while (matcher.find()) {
            String s = matcher.group();
            String value = "";
            // 处理自定义语法
            for (Syntax syntax : SYNTAXS) {
                if (syntax.isSyntax(s)) {
                    value = syntax.parse(s, context);
                }
            }
            // 变量取值
            if (StrUtil.isBlank(value)) {
                value = s.substring(2, s.length() - 1);
                if (context.containsKey(value)) {
                    value = Objects.toString(context.get(value));
                } else {
                    value = "";
                }
            }
            sql = sql.replace(s, value);
        }
        return sql;
    }
}
