package com.myyf.webssh.ws;

import com.myyf.webssh.ws.config.WsTextMessage;
import lombok.extern.slf4j.Slf4j;

import javax.websocket.*;
import java.io.IOException;

/**
 * websocket定义了默认的会话管理
 */
@Slf4j
public abstract class AbstractWsTextServer extends AbstractWsServer{
    protected AbstractWsTextServer(boolean showLog) {
        super(showLog);
    }

    /**
     * 接收到消息
     *
     * @param wsTextMessage wsTextMessage
     */
    @OnMessage
    public void onMessage(WsTextMessage wsTextMessage) {
        message(wsTextMessage);
    }

    /**
     * 处理接收到的消息
     *
     * @param wsTextMessage wsTextMessage
     */
    protected abstract void message(WsTextMessage wsTextMessage);

    /**
     * 异步发送方法
     *
     * @param msg 消息
     * @param desc 描述
     */
    protected void sendAsync(String msg, String desc) {
        this.wsSession.getAsyncRemote().sendObject(WsTextMessage.server(desc, msg));
    }

    /**
     * 同步发送方法
     *
     * @param msg 消息
     * @param desc 描述
     */
    protected synchronized void send(String msg, String desc) {
        try {
            this.wsSession.getBasicRemote().sendObject(WsTextMessage.server(desc, msg));
        } catch (IOException | EncodeException e) {
            log.error("[send]", e);
        }
    }
}