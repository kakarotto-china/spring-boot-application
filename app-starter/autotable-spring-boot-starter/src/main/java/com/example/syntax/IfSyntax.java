/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.syntax;

import com.example.exception.AutoTableSyntaxException;

import lombok.NonNull;

import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.Objects;

/**
 * 语法解析器: @{express?value1:value2} or @{express?defaultValue}
 *
 * @author Jason
 */
@Component
public class IfSyntax implements Syntax {
    /**
     * 检测是否是三元预算的关键字符
     */
    private static final String TERNARY_OPERATOR = ":";

    @Override
    public boolean isSyntax(@NonNull String content) {
        return content.matches(SYNTAX_PREFIX_PATTERN + "[^\\\\?]+\\?[^:]+[:]?[^}]*" + SYNTAX_SUFFIX_PATTERN);
    }

    @Override
    public String parse(String content, Map<String, Object> context) throws AutoTableSyntaxException {
        if (!isSyntax(content)) {
            throw new AutoTableSyntaxException("语法错误:" + content);
        }
        // 去除 #{和}
        content = parseCode(content);
        // 检测是否是三元运算符,如果不是,则转换为三元运算符
        if (!content.contains(TERNARY_OPERATOR)) {
            // 获取表达式
            String expression = content.substring(0, content.indexOf("?"));
            content = expression + "?" + expression + ":" + content.substring(content.indexOf("?") + 1);
        }
        return Objects.toString(parseSyntax(content, context));
    }
}
