package com.myyf.webssh.ws;

import lombok.extern.slf4j.Slf4j;

import javax.websocket.OnMessage;
import java.io.IOException;
import java.nio.ByteBuffer;

@Slf4j
public abstract class AbstractWsByteServer  extends AbstractWsServer{
    protected AbstractWsByteServer(boolean showLog) {
        super(showLog);
    }

    /**
     * 接收到消息
     *
     * @param bytes 字节消息
     */
    @OnMessage
    public void onMessage(byte[] bytes) {
        message(bytes);
    }

    /**
     * 处理字节消息
     *
     * @param bytes
     */
    protected abstract void message(byte[] bytes);

    /**
     * 异步发送字节
     *
     * @param bytes bytes
     */
    protected void sendAsync(byte[] bytes) {
        this.wsSession.getAsyncRemote().sendBinary(ByteBuffer.wrap(bytes));
    }

    /**
     * 同步发送字节
     *
     * @param bytes bytes
     */
    protected synchronized void send(byte[] bytes) {
        try {
            this.wsSession.getBasicRemote().sendBinary(ByteBuffer.wrap(bytes));
        } catch (IOException e) {
            log.error("[send]", e);
        }
    }
}
