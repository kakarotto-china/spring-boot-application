package com.myyf.webssh.common;

import lombok.AllArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@ToString
public enum CodeEnum {
    SUCCESS(2000, "成功"),
    FAIL(5000, "失败"),
    NOT_FOUND(5001, "资源未找到"),
    DUPLICATE_RESOURCE(5002, "资源已存在"),
    LOGIN_FAIL(5011, "登录失败"),
    UN_LOGIN(5012, "未登录"),
    USER_NOT_FOUND(5013, "用户未找到"),
    USER_PASSWD_ERROR(5014, "密码不正确"),
    LOGIN_EXPIRED(5015, "登陆过期"),
    UN_SUPPORTED(5021, "不支持的操作"),
    SEND_EMAIL_FAIL(5031, "发送邮件失败"),
    VERIFY_EXPIRED(5041, "验证过期"),
    VERIFY_FAIL(5042, "验证失败"),
    UN_AUTHORIZE(5051, "终端连接信息未授权"),
    UN_OPEN_AUTHORIZE_CHANNEL_SHELL_ERROR(5052, "终端授权通道未打开");

    public final int code;
    public final String info;
}