package com.myyf.webssh.interception;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.convert.Convert;
import cn.hutool.core.util.ClassUtil;
import cn.hutool.core.util.StrUtil;
import com.myyf.webssh.common.Result;
import com.myyf.webssh.exception.LoginException;
import com.myyf.webssh.util.JWTUtils;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.mvc.ParameterizableViewController;
import org.springframework.web.servlet.resource.ResourceHttpRequestHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class LoginInterceptor implements HandlerInterceptor {
    private final String[] indexHtmls;
    private final String signinHtml;
    private final String tokenName;

    public LoginInterceptor(String signinHtml, String tokenName, String indexHtml, String... any) {
        List<String> indexHtmlList = CollUtil.newArrayList();
        indexHtmlList.add(indexHtml);
        if (any != null) {
            indexHtmlList.addAll(Arrays.asList(any));
        }
        this.indexHtmls = indexHtmlList.toArray(new String[0]);
        this.signinHtml = signinHtml;
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


//    @Override
//    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
//        if (ClassUtil.isAssignable(ResourceHttpRequestHandler.class, handler.getClass())) {
//            // 资源
//            return resourceHandler(request, response);
//        }
//        if (ClassUtil.isAssignable(HandlerMethod.class, handler.getClass())) {
//            // 方法
//            return methodHandler(request, response, handler);
//        }
//        if (ClassUtil.isAssignable(ParameterizableViewController.class, handler.getClass())) {
//            // 路径/
//            checkSignedRedirect(request, response);
//        }
//        // 其他
//        return true;
//    }

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

    private boolean resourceHandler(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String uri = request.getRequestURI();
        if (StrUtil.equalsAny(uri, indexHtmls)) {
            checkSignedRedirect(request, response);
        }
        return true;
    }

    private void checkSignedRedirect(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try {
            checkSignin(request, response);
        } catch (LoginException e) {
            response.sendRedirect(signinHtml);
        }
    }

    private void checkSignin(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String token = Optional.ofNullable(request.getHeader(tokenName)).orElse(request.getParameter(tokenName));
        JWTUtils.verify(token).orElseThrow(() -> new LoginException(Result.CodeEnum.UN_LOGIN));
    }
}
