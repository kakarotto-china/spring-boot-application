package com.example.exception;
/**
 * 语法错误异常
 *
 */
public class AutoTableSyntaxException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public AutoTableSyntaxException() {
		super();
	}

	public AutoTableSyntaxException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public AutoTableSyntaxException(String message, Throwable cause) {
		super(message, cause);
	}

	public AutoTableSyntaxException(String message) {
		super(message);
	}

	public AutoTableSyntaxException(Throwable cause) {
		super(cause);
	}

}
