package com.myyf.webssh.common.exception;

import com.myyf.webssh.common.CodeEnum;
import com.myyf.webssh.common.International;
import com.myyf.webssh.common.Result;

/**
 * 绑定异常
 */
public class BindException extends ServiceRuntimeException {
    public BindException(CodeEnum codeEnum) {
        super(codeEnum);
    }

    public BindException(CodeEnum codeEnum, International error) {
        super(codeEnum, error);
    }
}
