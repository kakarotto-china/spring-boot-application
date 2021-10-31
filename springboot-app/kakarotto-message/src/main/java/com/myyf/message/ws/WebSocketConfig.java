package com.myyf.message.ws;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.websocket.HandshakeResponse;
import javax.websocket.server.HandshakeRequest;
import javax.websocket.server.ServerEndpointConfig;

/**
 * 扫描websocket原生注解
 */
@Configuration
public class WebSocketConfig {
    @Bean
    public ServerEndpointExporter serverEndpoint() {
        return new ServerEndpointExporter();
    }


//    public static class HttpSessionWsConfigurator extends ServerEndpointConfig.Configurator {
//        /**
//         * 重写修改握手方法
//         *
//         * @param sec
//         * @param request
//         * @param response
//         */
//        @Override
//        public void modifyHandshake(ServerEndpointConfig sec, HandshakeRequest request, HandshakeResponse response) {
//            super.modifyHandshake(sec, request, response);
//            HttpSession httpSession = (HttpSession) request.getHttpSession();
//            sec.getUserProperties().put(HttpSession.class.getName(), httpSession);
//            HttpServletRequest httpServletRequest = (HttpServletRequest) httpSession.getAttribute(RequestListener.HTTP_SERVLET_REQUEST);
//            sec.getUserProperties().put(HttpServletRequest.class.getName(), httpServletRequest);
//        }
//    }
}
