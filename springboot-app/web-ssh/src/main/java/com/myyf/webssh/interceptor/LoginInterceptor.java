package com.myyf.webssh.interceptor;

import cn.hutool.core.convert.Convert;
import cn.hutool.core.util.ClassUtil;
import com.myyf.webssh.common.CodeEnum;
import com.myyf.webssh.common.Result;
import com.myyf.webssh.common.exception.UnLoginException;
import com.myyf.webssh.util.JWTUtils;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

/**
 * 登录拦截器
 */
public class LoginInterceptor implements HandlerInterceptor {
    private final String tokenName;

    public LoginInterceptor(String tokenName) {
        this.tokenName = tokenName;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (!ClassUtil.isAssignable(HandlerMethod.class, handler.getClass())) {
            // 资源
            return true;
        }
        return methodHandler(request, response, handler);
    }

    private boolean methodHandler(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {
        HandlerMethod handlerMethod = Convert.convert(HandlerMethod.class, handler);
        if (ClassUtil.isAssignable(ErrorController.class, handlerMethod.getBean().getClass())) {
            return true;
        }
        LoginIgnore loginIgnore = handlerMethod.getMethodAnnotation(LoginIgnore.class);
        if (loginIgnore != null) {
            return true;
        }
        checkSignin(request, response);
        return true;
    }

    private void checkSignin(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String token = Optional.ofNullable(request.getHeader(tokenName)).orElse(request.getParameter(tokenName));
        JWTUtils.verify(token).orElseThrow(() -> new UnLoginException(CodeEnum.UN_LOGIN));
    }
}
