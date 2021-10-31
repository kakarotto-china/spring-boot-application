package com.myyf.message.ws;

import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.websocket.WsSession;
import org.springframework.stereotype.Component;

import javax.websocket.server.ServerEndpoint;

@ServerEndpoint(value = "/kakarotto/message", encoders = WsTextCodec.class, decoders = WsTextCodec.class)
@Slf4j
@Component
public class MessageWsServer extends AbstractWsServer {
    public MessageWsServer() {
        super(true);
    }

    @Override
    protected Class<? extends AbstractWsServer> open(WsSession wsSession) {
        wsSession.getAsyncRemote().sendObject(WsTextMessage.server("初始化连接", getOnline()));
        return MessageWsServer.class;
    }

    @Override
    protected Class<? extends AbstractWsServer> close(WsSession wsSession) {
        return MessageWsServer.class;
    }

    @Override
    protected void message(WsTextMessage text) {

    }

    @Override
    protected void error(Throwable error) {

    }
}
