package com.myyf.message.common;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

@Data
public class Result<D> {
    private int code;
    private International message;
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

    public static Result<Void> success() {
        return success(null);
    }


    @AllArgsConstructor
    @ToString
    public enum CodeEnum {
        SUCCESS(2000, International.of("成功", "success")),
        FAIL(5000, International.of("失败", "fail"));
        public final int code;
        public final International info;
    }
}
