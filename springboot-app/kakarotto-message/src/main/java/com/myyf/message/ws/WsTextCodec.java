package com.myyf.message.ws;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;

import javax.websocket.Decoder;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;

public class WsTextCodec implements Encoder.Text<WsTextMessage>, Decoder.Text<WsTextMessage> {
    private static final ThreadLocal<WsTextMessage> THREAD_LOCAL_MESSAGE = new ThreadLocal<>();

    @SneakyThrows
    @Override
    public String encode(WsTextMessage wsTextMessage) {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(wsTextMessage);
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
        ObjectMapper mapper = new ObjectMapper();
        WsTextMessage wsTextMessage = mapper.readValue(s, WsTextMessage.class);

        WsTextMessage message = THREAD_LOCAL_MESSAGE.get();
        Object content = wsTextMessage.getContent();
        wsTextMessage.setMessageType(WsTextMessage.MessageType.CLIENT);
        WsTextMessage.Info info = wsTextMessage.getInfo();
        info.setFrom("");
        THREAD_LOCAL_MESSAGE.set(wsTextMessage);
        return true;
    }
}
