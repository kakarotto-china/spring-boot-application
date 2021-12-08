package com.myyf.webssh.ws.config;

import cn.hutool.json.JSONUtil;
import lombok.SneakyThrows;

import javax.websocket.Decoder;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;

/**
 * websocket消息编码/解码器
 */
public class WsTextCodec implements Encoder.Text<WsTextMessage>, Decoder.Text<WsTextMessage> {
    private static final ThreadLocal<WsTextMessage> THREAD_LOCAL_MESSAGE = new ThreadLocal<>();

    @SneakyThrows
    @Override
    public String encode(WsTextMessage wsTextMessage) {
        return JSONUtil.toJsonStr(wsTextMessage);
    }

    @Override
    public void init(EndpointConfig endpointConfig) {
        WsTextMessage wsTextMessage = WsTextMessage.from((String) endpointConfig.getUserProperties().get(WsTextMessage.MessageType.CLIENT.name()));
        THREAD_LOCAL_MESSAGE.set(wsTextMessage);
    }

    @Override
    public void destroy() {

    }

    @SneakyThrows
    @Override
    public WsTextMessage decode(String s) {
        try {
            return THREAD_LOCAL_MESSAGE.get();
        } finally {
            THREAD_LOCAL_MESSAGE.remove();
        }
    }

    @SneakyThrows
    @Override
    public boolean willDecode(String s) {
        WsTextMessage wsTextMessage = JSONUtil.toBean(s, WsTextMessage.class);

        WsTextMessage message = THREAD_LOCAL_MESSAGE.get();
        Object content = wsTextMessage.getContent();
        wsTextMessage.setMessageType(WsTextMessage.MessageType.CLIENT);
        WsTextMessage.Info info = wsTextMessage.getInfo();
        info.setFrom("");
        THREAD_LOCAL_MESSAGE.set(wsTextMessage);
        return true;
    }
}
