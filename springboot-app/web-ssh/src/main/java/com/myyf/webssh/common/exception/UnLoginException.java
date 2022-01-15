package com.myyf.webssh.common.exception;

import com.myyf.webssh.common.Result;

/**
 * 登录异常
 */
public class UnLoginException extends ServiceRuntimeException {
    public UnLoginException(Result.CodeEnum codeEnum) {
        super(codeEnum);
    }
}
