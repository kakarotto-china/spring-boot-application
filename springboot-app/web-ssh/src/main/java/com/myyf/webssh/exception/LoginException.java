package com.myyf.webssh.exception;

import com.myyf.webssh.common.Result;

public class LoginException extends ServiceRuntimeException{

    public LoginException(Result.CodeEnum codeEnum) {
        super(codeEnum);
    }
}
