package com.myyf.webssh.common.exception;

import com.myyf.webssh.common.CodeEnum;
import com.myyf.webssh.common.International;

/**
 * 邮件异常
 */
public class EmailException extends ServiceRuntimeException {
    public EmailException(CodeEnum codeEnum) {
        super(codeEnum);
    }

    public EmailException(CodeEnum codeEnum, International error) {
        super(codeEnum, error);
    }
}
