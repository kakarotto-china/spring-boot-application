package com.myyf.message.common;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class ExceptionResolver {

    @ExceptionHandler(Exception.class)
    public Result<?> exception(Exception e){
        log.error("[ExceptionHandler]", e);
        return Result.fail(e.toString());
    }
}
