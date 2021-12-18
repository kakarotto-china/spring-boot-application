package com.myyf.webssh.exception;

import com.myyf.webssh.common.Result;

/**
 * 服务运行异常
 */
public class ServiceRuntimeException extends RuntimeException {
    public final Result.CodeEnum codeEnum;

    public ServiceRuntimeException(Result.CodeEnum codeEnum) {
        super(codeEnum.info.getEn());
        this.codeEnum = codeEnum;
    }
}
