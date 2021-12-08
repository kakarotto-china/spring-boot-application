package com.myyf.webssh.exception;

import com.myyf.webssh.common.Result;

/**
 * 不支持的操作类型异常
 */
public class UnSupportedOperationException extends ServiceRuntimeException {
    public UnSupportedOperationException(Result.CodeEnum codeEnum) {
        super(codeEnum);
    }
}
