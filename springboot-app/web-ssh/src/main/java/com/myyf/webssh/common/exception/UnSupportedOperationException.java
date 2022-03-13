package com.myyf.webssh.common.exception;

import com.myyf.webssh.common.CodeEnum;
import com.myyf.webssh.common.International;
import com.myyf.webssh.common.Result;

/**
 * 不支持的操作类型异常
 */
public class UnSupportedOperationException extends ServiceRuntimeException {
    public UnSupportedOperationException(CodeEnum codeEnum) {
        super(codeEnum);
    }

    public UnSupportedOperationException(CodeEnum codeEnum, International error) {
        super(codeEnum, error);
    }
}
