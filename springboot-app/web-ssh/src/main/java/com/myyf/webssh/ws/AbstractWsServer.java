package com.myyf.webssh.ws;

import cn.hutool.core.map.MapUtil;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.websocket.WsSession;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import java.util.Map;

@Slf4j
public abstract class AbstractWsServer {
    /**
     * websocket服务对象
     */
    @Data(staticConstructor = "of")
    public static class OnlineWsSessionKey {
        /**
         * 服务类
         */
        private final Class<? extends AbstractWsServer> clazz;

        /**
         * http session id
         */
        private final String httpSessionId;
    }

    /**
     * 全局管理在线用户
     */
    protected static final Map<AbstractWsServer.OnlineWsSessionKey, WsSession> onlineWsSession = MapUtil.newConcurrentHashMap(10);
    /**
     * 是否开启log
     */
    private final boolean showLog;
    /**
     * ws session对象
     */
    protected WsSession wsSession;

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
        onlineWsSession.put(AbstractWsServer.OnlineWsSessionKey.of(this.getClass(), httpSessionId), wsSession);
        open(wsSession);
        if (showLog) {
            log.info("websocket open, http session {}, online {}", httpSessionId, onlineWsSession.size());
        }
    }

    /**
     * 连接成功后续处理
     *
     * @param wsSession wsSession
     */
    protected abstract void open(WsSession wsSession);

    /**
     * 连接关闭
     *
     * @param session session
     */
    @OnClose
    public void onClose(Session session) {
        WsSession wsSession = (WsSession) session;
        String httpSessionId = wsSession.getHttpSessionId();
        onlineWsSession.remove(AbstractWsServer.OnlineWsSessionKey.of(this.getClass(), httpSessionId));
        close(wsSession);
        if (showLog) {
            log.info("websocket close, http session {}, online {}", httpSessionId, onlineWsSession.size());
        }
    }

    /**
     * 连关闭后续处理
     *
     * @param wsSession wsSession
     */
    protected abstract void close(WsSession wsSession);

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

    /**
     * 发生错误后续处理
     *
     * @param error error
     */
    protected abstract void error(Throwable error);

    /**
     * 在线用户数
     *
     * @return 在线数
     */
    public static int getOnline(){
        return onlineWsSession.size();
    }
}
