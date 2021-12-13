package com.myyf.webssh.exception;

import com.myyf.webssh.common.Result;

public class EmailException extends ServiceRuntimeException{

    public EmailException(Result.CodeEnum codeEnum) {
        super(codeEnum);
    }
}
