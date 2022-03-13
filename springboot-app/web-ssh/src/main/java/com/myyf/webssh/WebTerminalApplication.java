package com.myyf.webssh;

import com.myyf.japidocs.annotation.EnableJApiDocs;
import com.myyf.webssh.common.CodeEnum;
import com.myyf.webssh.common.Result;
import com.myyf.webssh.common.exception.UnLoginException;
import com.myyf.webssh.entity.User;
import com.myyf.webssh.interceptor.LoginInterceptor;
import com.myyf.webssh.util.JWTUtils;
import org.springframework.beans.BeansException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Objects;

@SpringBootApplication
@ServletComponentScan
@EnableJApiDocs(rootPath = "/media/kakarotto/软件/Develop/Java/IDE/IDEA/WorkSpace/springboot-application/springboot-app/web-ssh", projectName = "", version = "v1.0", docsPath = "")
public class WebTerminalApplication implements WebMvcConfigurer, ApplicationContextAware {
    private static ApplicationContext CONTEXT;

    public static void main(String[] args) {
        SpringApplication.run(WebTerminalApplication.class, args);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedHeaders("*").allowedMethods("*").allowedOrigins("http://localhost:8080");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginInterceptor("token")).addPathPatterns("/**");
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        CONTEXT = applicationContext;
    }

    public static ApplicationContext getContext() {
        return CONTEXT;
    }

    public static HttpServletRequest getRequest() {
        return ((ServletRequestAttributes) Objects.requireNonNull(RequestContextHolder.getRequestAttributes())).getRequest();
    }

    public static HttpServletResponse getResponse() {
        return ((ServletRequestAttributes) Objects.requireNonNull(RequestContextHolder.getRequestAttributes())).getResponse();
    }

    public static User getUser() {
        String token = getRequest().getHeader("token");
        return JWTUtils.verify(token).orElseThrow(() -> new UnLoginException(
                CodeEnum.UN_LOGIN));
    }
}
