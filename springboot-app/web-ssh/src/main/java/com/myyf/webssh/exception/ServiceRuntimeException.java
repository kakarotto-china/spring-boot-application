package com.myyf.webssh.exception;

import com.myyf.webssh.common.Result;

public class ServiceRuntimeException extends RuntimeException{
    public final Result.CodeEnum codeEnum;

    public ServiceRuntimeException(Result.CodeEnum codeEnum) {
        super(codeEnum.info.getEn());
        this.codeEnum = codeEnum;
    }
}
