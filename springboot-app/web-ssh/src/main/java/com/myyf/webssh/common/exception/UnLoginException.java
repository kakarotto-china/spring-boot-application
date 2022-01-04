package com.myyf.webssh.common.exception;

import com.myyf.webssh.common.Result;

/**
 * 登录异常
 */
public class LoginException extends ServiceRuntimeException {
    public LoginException(Result.CodeEnum codeEnum) {
        super(codeEnum);
    }
}
