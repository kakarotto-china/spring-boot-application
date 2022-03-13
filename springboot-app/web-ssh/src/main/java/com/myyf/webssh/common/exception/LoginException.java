package com.myyf.webssh.common.exception;

import com.myyf.webssh.common.CodeEnum;
import com.myyf.webssh.common.International;
import com.myyf.webssh.common.Result;

/**
 * 登录异常
 */
public class LoginException extends ServiceRuntimeException {
    public LoginException(CodeEnum codeEnum) {
        super(codeEnum);
    }

    public LoginException(CodeEnum codeEnum, International error) {
        super(codeEnum, error);
    }
}
