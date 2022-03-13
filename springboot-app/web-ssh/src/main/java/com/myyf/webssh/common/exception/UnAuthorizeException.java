package com.myyf.webssh.common.exception;

import com.myyf.webssh.common.CodeEnum;
import com.myyf.webssh.common.International;

/**
 * 验证异常
 */
public class UnAuthorizeException extends ServiceRuntimeException {
    public UnAuthorizeException(CodeEnum codeEnum) {
        super(codeEnum);
    }

    public UnAuthorizeException(CodeEnum codeEnum, International error) {
        super(codeEnum, error);
    }
}
