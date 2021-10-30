package com.example.exception;

import cn.hutool.core.util.StrUtil;

/**
 * AutoTable 统一异常对象
 *
 */
public class AutoTableException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public AutoTableException() {
		super();
	}

	public AutoTableException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public AutoTableException(String message, Throwable cause) {
		super(message, cause);
	}

	public AutoTableException(String message, Object... param) {
		super(StrUtil.format(message, param));
	}

	public AutoTableException(Throwable cause) {
		super(cause);
	}

}
