package com.myyf.webssh.common;

import lombok.Data;

/**
 * 统一的json返回格式
 *
 * @param <D> 返回数据的类型
 */
@Data
public class Result<D> {
    private int code;
    private String message;
    private D data;

    private static <T> Result<T> setResultCode(CodeEnum codeEnum) {
        Result<T> result = new Result<>();
        result.setCode(codeEnum.code);
        result.setMessage(codeEnum.info);
        return result;
    }

    public static <T> Result<T> success(T t) {
        Result<T> result = setResultCode(CodeEnum.SUCCESS);
        result.setData(t);
        return result;
    }

    public static <T> Result<T> fail(T t) {
        Result<T> result = setResultCode(CodeEnum.FAIL);
        result.setData(t);
        return result;
    }

    public static <T> Result<T> fail(CodeEnum codeEnum) {
        Result<T> result = setResultCode(codeEnum);
        result.setData(null);
        return result;
    }

    public static Result<Void> success() {
        return success(null);
    }

    public static <T> Result<T> fail(CodeEnum codeEnum, T t) {
        Result<T> result = fail(codeEnum);
        result.setData(t);
        return result;
    }
}
