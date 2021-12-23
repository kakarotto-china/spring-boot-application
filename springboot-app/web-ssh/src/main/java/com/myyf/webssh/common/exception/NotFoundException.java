package com.myyf.webssh.common.exception;

import com.myyf.webssh.common.Result;

/**
 * 资源未找到异常
 */
public class NotFoundException extends ServiceRuntimeException {
    public NotFoundException(Result.CodeEnum codeEnum) {
        super(codeEnum);
    }
}
