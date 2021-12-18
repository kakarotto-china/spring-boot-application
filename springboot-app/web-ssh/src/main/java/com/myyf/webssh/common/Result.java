package com.myyf.webssh.common;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

/**
 * 统一的json返回格式
 *
 * @param <D> 返回数据的类型
 */
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

    public static Result<?> fail(CodeEnum codeEnum) {
        Result<?> result = setResultCode(codeEnum);
        result.setData(null);
        return result;
    }

    public static Result<Void> success() {
        return success(null);
    }


    @AllArgsConstructor
    @ToString
    public enum CodeEnum {
        SUCCESS(2000, International.of("成功", "success")),
        FAIL(5000, International.of("失败", "fail")),
        LOGIN_FAIL(5011, International.of("登录失败", "login failed")),
        UN_LOGIN(5012, International.of("未登录", "not logged in")),
        UN_SUPPORTED(5021, International.of("不支持的操作", "unsupported operation")),
        SEND_EMAIL_FAIL(5031, International.of("发送邮件失败", "send email failed")),
        VERIFY_EXPIRED(5041, International.of("验证过期", "verify expired")),
        VERIFY_FAIL(5042, International.of("验证失败", "verify failed"));

        public final int code;
        public final International info;
    }
}
