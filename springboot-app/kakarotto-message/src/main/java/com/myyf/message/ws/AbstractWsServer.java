package com.myyf.message.ws;

import cn.hutool.core.map.MapUtil;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.websocket.WsSession;

import javax.websocket.*;
import java.util.Map;

/**
 * websocket定义了默认的会话管理
 */
@Slf4j
public abstract class AbstractWsServer {
    @Data(staticConstructor = "of")
    public static class OnlineWsSessionKey {
        private final Class<? extends AbstractWsServer> clazz;

        private final String httpSessionId;
    }

    private static final Map<OnlineWsSessionKey, WsSession> onlineWsSession = MapUtil.newConcurrentHashMap(10);
    private final boolean showLog;
    private WsSession wsSession;

    protected AbstractWsServer(boolean showLog) {
        this.showLog = showLog;
    }

    /**
     * 连接成功
     *
     * @param session session
     */
    @OnOpen
    public void onOpen(Session session) {
        wsSession = (WsSession) session;
        String httpSessionId = wsSession.getHttpSessionId();
        onlineWsSession.put(OnlineWsSessionKey.of(open(wsSession), httpSessionId), wsSession);
        if (showLog) {
            log.info("websocket open, http session {}, online {}", httpSessionId, onlineWsSession.size());
        }
    }

    protected abstract Class<? extends AbstractWsServer> open(WsSession wsSession);

    /**
     * 连接关闭
     *
     * @param session session
     */
    @OnClose
    public void onClose(Session session) {
        WsSession wsSession = (WsSession) session;
        String httpSessionId = wsSession.getHttpSessionId();
        onlineWsSession.remove(OnlineWsSessionKey.of(close(wsSession), httpSessionId));
        if (showLog) {
            log.info("websocket close, http session {}, online {}", httpSessionId, onlineWsSession.size());
        }
    }

    protected abstract Class<? extends AbstractWsServer> close(WsSession wsSession);

    /**
     * 接收到消息
     *
     * @param wsTextMessage wsTextMessage
     */
    @OnMessage
    public void onMessage(WsTextMessage wsTextMessage) {
        message(wsTextMessage);
    }

    protected abstract void message(WsTextMessage wsTextMessage);

    /**
     * 发生错误
     *
     * @param error error
     */
    @OnError
    public void onError(Throwable error) {
        String httpSessionId = wsSession.getHttpSessionId();
        if (showLog) {
            log.error("websocket error, http session {}", httpSessionId);
            log.error("[onError]", error);
        }
        error(error);
    }

    protected abstract void error(Throwable error);

    public static int getOnline(){
        return onlineWsSession.size();
    }
}