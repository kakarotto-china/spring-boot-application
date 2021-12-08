package com.myyf.webssh.ws.config;

import lombok.Data;
import lombok.NoArgsConstructor;

// todo 待重构content类型
@Data
public class WsTextMessage {
    private MessageType messageType;

    private Info info;

    private String content;

    private WsTextMessage() {
    }

    public static WsTextMessage server(String desc, String data) {
        return serverTo(null, desc, data);
    }

    public static WsTextMessage serverTo(String toId, String desc, String data) {
        WsTextMessage wsTextMessage = new WsTextMessage();
        wsTextMessage.setContent(data);
        MessageType server = MessageType.SERVER;
        wsTextMessage.setMessageType(server);
        wsTextMessage.setInfo(Info.of(null, toId, desc));
        return wsTextMessage;
    }

    public static WsTextMessage other(String fromId, String desc, String data) {
        return otherTo(fromId, null, desc, data);
    }

    public static WsTextMessage otherTo(String fromId, String toId, String desc, String data) {
        WsTextMessage wsTextMessage = new WsTextMessage();
        wsTextMessage.setContent(data);
        MessageType other = MessageType.OTHER;
        wsTextMessage.setMessageType(other);
        wsTextMessage.setInfo(Info.of(fromId, toId, desc));
        return wsTextMessage;
    }

    public static WsTextMessage from(String from) {
       WsTextMessage wsTextMessage = new WsTextMessage();
        wsTextMessage.setMessageType(MessageType.CLIENT);
        wsTextMessage.setInfo(Info.of(from, "", ""));
        return wsTextMessage;
    }

    public enum MessageType {
        SERVER, OTHER, CLIENT
    }

    @Data
    @NoArgsConstructor
    public static class Info {
        private String from;
        private String to;
        private String desc;

        public static Info of(String from, String to, String desc) {
            Info info = new Info();
            info.from = from;
            info.to = to;
            info.desc = desc;
            return info;
        }
    }
}
