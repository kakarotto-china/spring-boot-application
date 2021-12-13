package com.myyf.webssh.exception;

import com.myyf.webssh.common.Result;

/**
 * 邮件异常
 */
public class EmailException extends ServiceRuntimeException{
    public EmailException(Result.CodeEnum codeEnum) {
        super(codeEnum);
    }
}
