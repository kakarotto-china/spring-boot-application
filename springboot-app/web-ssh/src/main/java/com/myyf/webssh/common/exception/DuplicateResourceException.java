package com.myyf.webssh.common.exception;

import com.myyf.webssh.common.CodeEnum;
import com.myyf.webssh.common.International;
import com.myyf.webssh.common.Result;

/**
 * 资源已存在异常
 */
public class DuplicateResourceException extends ServiceRuntimeException {
    public DuplicateResourceException(CodeEnum codeEnum) {
        super(codeEnum);
    }

    public DuplicateResourceException(CodeEnum codeEnum, International error) {
        super(codeEnum, error);
    }
}
