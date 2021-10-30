package com.example.syntax;

import com.example.exception.AutoTableSyntaxException;

import lombok.NonNull;

import java.util.Map;

import javax.script.Bindings;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

/**
 * 语法解析接口
 */
public interface Syntax {
    /**
     * 语法前缀
     */
    String SYNTAX_PREFIX_PATTERN = "^@\\{";
    /**
     * 语法后缀
     */
    String SYNTAX_SUFFIX_PATTERN = "\\}$";
    /**
     * 代码最低长度
     */
    int SYNTAX_MIN_LENGTH = 4;

    ScriptEngine ENGINE = new ScriptEngineManager().getEngineByName("javascript");

    /**
     * 将代码从占位符中解析出来
     *
     * @param content 包含占位符代码
     * @return 代码
     */
    default String parseCode(@NonNull String content) {
        if (content.length() < SYNTAX_MIN_LENGTH) {
            return "";
        }
        // 去除 #{和}
        return content.substring(2, content.length() - 1);
    }

    /**
     * 检测是否可以处理当前语法
     *
     * @param content 代码内容
     * @return boolean
     */
    public boolean isSyntax(@NonNull String content);

    /**
     * 解析语法
     *
     * @param content 代码内容
     * @param context 上下文环境
     * @return 解析后的代码
     * @throws AutoTableSyntaxException 语法错误异常
     */
    public String parse(String content, Map<String, Object> context) throws AutoTableSyntaxException;

    /**
     * 解析JS代码
     *
     * @param script 脚本代码
     * @param context 上下文环境
     * @return 解析后的结果
     * @throws AutoTableSyntaxException 语法错误异常
     */
    default Object parseSyntax(String script, Map<String, Object> context) throws AutoTableSyntaxException {

        Bindings bindings = ENGINE.createBindings();
        if (context != null) {
            bindings.putAll(context);
        }
        try {
            return ENGINE.eval(script, bindings);
        } catch (ScriptException e) {
            throw new AutoTableSyntaxException("语法错误:@{" + script + "}", e);
        }
    }
}
