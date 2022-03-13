package com.myyf.webssh.common.exception;

import com.myyf.webssh.common.CodeEnum;
import com.myyf.webssh.common.International;
import com.myyf.webssh.common.Result;

/**
 * 资源未找到异常
 */
public class NotFoundException extends ServiceRuntimeException {
    public NotFoundException(CodeEnum codeEnum) {
        super(codeEnum);
    }

    public NotFoundException(CodeEnum codeEnum, International error) {
        super(codeEnum, error);
    }
}
