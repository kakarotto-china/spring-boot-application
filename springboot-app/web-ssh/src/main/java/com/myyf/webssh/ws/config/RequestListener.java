package com.myyf.webssh.ws.config;

import lombok.extern.slf4j.Slf4j;

import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;
import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * 监听器类:主要任务是用ServletRequest将我们的HttpSession携带过去
 */
@WebListener // 此注解千万千万不要忘记，它的主要作用就是将这个监听器纳入到Spring容器中进行管理,相当于注册监听吧
@Slf4j
public class RequestListener implements ServletRequestListener {
    @Override
    public void requestInitialized(ServletRequestEvent sre) {
        //将所有request请求都携带上httpSession
        HttpServletRequest httpServletRequest = ((HttpServletRequest) sre.getServletRequest());
        HttpSession session = httpServletRequest.getSession();
        // 此处可以携带其他信息到session中
    }

    public RequestListener() {
    }

    @Override
    public void requestDestroyed(ServletRequestEvent sre) {
    }
}