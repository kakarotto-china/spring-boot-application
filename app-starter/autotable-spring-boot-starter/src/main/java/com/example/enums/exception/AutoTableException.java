/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.exception;

import cn.hutool.core.util.StrUtil;

/**
 * AutoTable 统一异常对象
 * @author Jason
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
