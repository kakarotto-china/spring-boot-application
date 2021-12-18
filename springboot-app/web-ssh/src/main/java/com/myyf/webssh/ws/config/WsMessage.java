package com.myyf.webssh.ws.config;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class WsMessage {
    private MessageType messageType;

    private Info info;

    private Object content;

    private WsMessage() {
    }

    public static WsMessage server(String desc, String data) {
        return serverTo(null, desc, data);
    }

    public static WsMessage serverTo(String toId, String desc, String data) {
        WsMessage wsTextMessage = new WsMessage();
        wsTextMessage.setContent(data);
        MessageType server = MessageType.SERVER;
        wsTextMessage.setMessageType(server);
        wsTextMessage.setInfo(Info.of(null, toId, desc));
        return wsTextMessage;
    }

    public static WsMessage other(String fromId, String desc, String data) {
        return otherTo(fromId, null, desc, data);
    }

    public static WsMessage otherTo(String fromId, String toId, String desc, String data) {
        WsMessage wsTextMessage = new WsMessage();
        wsTextMessage.setContent(data);
        MessageType other = MessageType.OTHER;
        wsTextMessage.setMessageType(other);
        wsTextMessage.setInfo(Info.of(fromId, toId, desc));
        return wsTextMessage;
    }

    public static WsMessage from(String from) {
        WsMessage wsTextMessage = new WsMessage();
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
