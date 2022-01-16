package com.myyf.webssh.ws;

import lombok.extern.slf4j.Slf4j;

import javax.websocket.OnMessage;
import java.io.IOException;

/**
 * websocket定义了默认的会话管理
 */
@Slf4j
public abstract class AbstractTextServer extends AbstractWsServer {
    protected AbstractTextServer(boolean showLog) {
        super(showLog);
    }

    /**
     * 接收到消息
     *
     * @param message message
     */
    @OnMessage
    public void onMessage(String message) {
        message(message);
    }

    /**
     * 处理接收到的消息
     *
     * @param message message
     */
    protected abstract void message(String message);

    /**
     * 异步发送方法
     *
     * @param msg  消息
     */
    protected void sendAsync(String msg) {
        this.wsSession.getAsyncRemote().sendText(msg);
    }

    /**
     * 同步发送方法
     *
     * @param msg  消息
     */
    protected synchronized void send(String msg) {
        try {
            this.wsSession.getBasicRemote().sendText(msg);
        } catch (IOException e) {
            log.error("[send]", e);
        }
    }
}