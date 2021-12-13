package com.myyf.webssh.interceptor;

import java.lang.annotation.*;

/**
 * 登录过滤
 */
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface LoginIgnore {
}
