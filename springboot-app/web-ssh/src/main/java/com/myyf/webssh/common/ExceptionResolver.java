package com.myyf.webssh.common;

import cn.hutool.core.collection.CollUtil;
import com.myyf.webssh.common.exception.UnLoginException;
import com.myyf.webssh.common.exception.ServiceRuntimeException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindException;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.List;
import java.util.stream.Collectors;

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
        log.error("[Exception]", e);
        return Result.fail(e.toString());
    }

    @ExceptionHandler(ServiceRuntimeException.class)
    public Result<?> serviceRuntimeException(ServiceRuntimeException e) {
        log.error("[ServiceRuntimeException]", e);
        return Result.fail(e.codeEnum);
    }

    @ResponseStatus(value = HttpStatus.UNAUTHORIZED, reason = "未登录")
    @ExceptionHandler(UnLoginException.class)
    public Result<?> loginException(UnLoginException e) {
        log.error("[UnLoginException]", e);
        return Result.fail(e.codeEnum);
    }

    /**
     * javax校验异常
     *
     * @param ex ex
     * @return Result
     */
    @ExceptionHandler(ConstraintViolationException.class)
    public Result<?> constraintViolationException(ConstraintViolationException ex) {
        log.error("[constraintViolationException]", ex);
        List<String> errors = ex.getConstraintViolations().stream().map(ConstraintViolation::getMessage).collect(Collectors.toList());
        return getResult(errors, ex.getMessage());
    }

    /**
     * springboot参数绑定异常
     *
     * @param ex ex
     * @return Result
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Result<?> methodArgumentNotValidException(MethodArgumentNotValidException ex) {
        log.error("[methodArgumentNotValidException]", ex);
        List<String> errors = ex.getBindingResult().getAllErrors().stream().map(ObjectError::getDefaultMessage).collect(Collectors.toList());
        return getResult(errors, ex.getMessage());
    }

    /**
     * springboot校验异常
     *
     * @param ex ex
     * @return Result
     */
    @ExceptionHandler(BindException.class)
    public Result<?> bindException(BindException ex) {
        log.error("[bindException]", ex);
        List<String> errors = ex.getBindingResult().getAllErrors().stream().map(ObjectError::getDefaultMessage).collect(Collectors.toList());
        return getResult(errors, ex.getMessage());
    }

    private Result<?> getResult(List<String> errors, String exMessage) {
        if (CollUtil.isNotEmpty(errors)) {
            return Result.fail(errors.stream().sorted().collect(Collectors.joining(";")));
        }
        return Result.fail(exMessage);
    }
}
