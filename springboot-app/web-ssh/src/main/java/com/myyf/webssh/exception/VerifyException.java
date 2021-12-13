package com.myyf.webssh.exception;

import com.myyf.webssh.common.Result;

public class VerifyException extends ServiceRuntimeException{

    public VerifyException(Result.CodeEnum codeEnum) {
        super(codeEnum);
    }
}
