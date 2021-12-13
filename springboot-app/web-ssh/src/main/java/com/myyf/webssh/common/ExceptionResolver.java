package com.myyf.webssh.common;

import com.myyf.webssh.exception.LoginException;
import com.myyf.webssh.exception.ServiceRuntimeException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * 全局异常处理
 */
@RestControllerAdvice
@Slf4j
public class ExceptionResolver {
    /**
     * 捕获Exception异常
     *
     * @param e Exception
     * @return Result.fail(e.toString ())
     */
    @ExceptionHandler(Exception.class)
    public Result<?> exception(Exception e) {
        log.error("[ExceptionHandler]", e);
        return Result.fail(e.toString());
    }

    @ExceptionHandler(ServiceRuntimeException.class)
    public Result<?> serviceRuntimeException(ServiceRuntimeException e) {
        log.error("[ExceptionHandler]", e);
        return Result.fail(e.codeEnum);
    }

    @ResponseStatus(value = HttpStatus.UNAUTHORIZED, reason = "未登录")
    @ExceptionHandler(LoginException.class)
    public Result<?> loginException(LoginException e) {
        log.error("[LoginException]", e);
        return Result.fail(e.codeEnum);
    }
}
