package com.myyf.webssh.common.exception;

import com.myyf.webssh.common.CodeEnum;
import com.myyf.webssh.common.International;

/**
 * 服务运行异常
 */
public class ServiceRuntimeException extends RuntimeException {
    public final CodeEnum codeEnum;

    public International error;

    public ServiceRuntimeException(CodeEnum codeEnum, International error) {
        super(codeEnum.info);
        this.codeEnum = codeEnum;
        this.error = error;
    }

    public ServiceRuntimeException(CodeEnum codeEnum) {
        super(codeEnum.info);
        this.codeEnum = codeEnum;
    }
}
