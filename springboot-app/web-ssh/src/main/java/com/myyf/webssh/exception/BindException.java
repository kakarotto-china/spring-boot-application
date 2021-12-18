package com.myyf.webssh.exception;

import com.myyf.webssh.common.Result;

/**
 * 绑定异常
 */
public class BindException extends ServiceRuntimeException{
    public BindException(Result.CodeEnum codeEnum) {
        super(codeEnum);
    }
}
