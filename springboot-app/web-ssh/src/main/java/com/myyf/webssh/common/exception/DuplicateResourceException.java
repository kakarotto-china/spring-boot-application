package com.myyf.webssh.common.exception;

import com.myyf.webssh.common.Result;

/**
 * 资源已存在异常
 */
public class DuplicateResourceException extends ServiceRuntimeException {
    public DuplicateResourceException(Result.CodeEnum codeEnum) {
        super(codeEnum);
    }
}
