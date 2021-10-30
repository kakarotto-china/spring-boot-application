package com.example.syntax;

import com.example.exception.AutoTableSyntaxException;

import cn.hutool.core.util.StrUtil;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.Objects;

/**
 * 语法解析器: @{for(item:collections) bodyCode}
 */
@Slf4j
@Component
public class ForSyntax implements Syntax {
	/**
	 * 临时代码中用来拼接字符串的临时变量名称
	 */
	private static final String ATTR_NAME = "AT_FOR_STR";
	/**
	 * 包含分隔符 		#{for(迭代变量:迭代集合 "分隔符") 迭代内容}
	 */
	private static final int TYPE_1=2;
	
	/**
	 * 不包含分隔符 	#{for(迭代变量:迭代集合) 迭代内容}
	 */
	private static final int TYPE_2=1;

	@Override
	public boolean isSyntax(@NonNull String content) {

		return content.matches(SYNTAX_PREFIX_PATTERN + "for\\([\\w_\\$]+:[\\w_\\$]+[\\s]?[^\\s]*\\) .+" + SYNTAX_SUFFIX_PATTERN);
	}
	

	@Override
	public String parse(String content, Map<String, Object> context) throws AutoTableSyntaxException {
		if (!isSyntax(content)) {
			throw new AutoTableSyntaxException("语法错误:" + content);
		}
		// 去除 #{和}
		String scriptCode = parseCode(content);
		// 循环变量
		String item = "";
		// 循环集合
		String collections = "";
		// 分割符
		String separation = "";
		// for(item:collections 分隔符) 循环体
		// 分离出循环体
		String eachBody = scriptCode.substring(scriptCode.lastIndexOf(")") + 1).trim();
		// 去除'for('和')'
		scriptCode = scriptCode.substring(4, scriptCode.lastIndexOf(")"));
		// 使用空格进行分割
		String[] split = scriptCode.split(" ");
		// 根据分割后数组的长度按照以下几种情况分别处理

		StringBuilder script = new StringBuilder();

		// 获得循环变量
		item = split[0].substring(0, split[0].indexOf(':'));
		// 获得循环集合
		collections = split[0].substring(split[0].indexOf(':') + 1);
		
		
		if (split.length == TYPE_1) {
			// #{for(迭代变量:迭代集合 "分隔符") 迭代内容}
			separation = split[1];
		} else if (split.length == TYPE_2) {
			// #{for(迭代变量:迭代集合) 迭代内容}
		} else {
			throw new AutoTableSyntaxException("语法错误:" + content);
		}
		script.append("var ").append(ATTR_NAME).append("='';\n");
		// for(let i in collections)
		script.append("for(var index in ").append(collections).append(")");
		script.append("{\n");
		// item=collections[index];
		script.append("\t").append(item).append("=").append(collections).append("[index];\n");
		script.append("\t").append(ATTR_NAME).append("+=").append(eachBody).append(";\n");
		if (StrUtil.isNotBlank(separation)) {
			script.append("\t").append(ATTR_NAME).append("+='").append(separation).append("';\n");
		}
		script.append("}\n");
		if (StrUtil.isNotBlank(separation)) {
			script.append(ATTR_NAME).append("=").append(ATTR_NAME).append(".substr(0,").append(ATTR_NAME).append(".length-1);\n");
		}
		log.trace("{}->{}", content,script);
		return Objects.toString(parseSyntax(script.toString(), context));
	}
	

}

