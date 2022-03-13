package com.myyf.webssh.ws.server;

    import cn.hutool.core.map.MapUtil;
import cn.hutool.json.JSONUtil;
import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelShell;
import com.myyf.webssh.WebTerminalApplication;
import com.myyf.webssh.common.CodeEnum;
import com.myyf.webssh.common.Result;
import com.myyf.webssh.common.exception.LoginException;
import com.myyf.webssh.common.exception.UnAuthorizeException;
import com.myyf.webssh.entity.UserTerminal;
import com.myyf.webssh.mapper.UserTerminalMapper;
import com.myyf.webssh.service.TerminalService;
import com.myyf.webssh.util.JWTUtils;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.net.ConnectException;
import java.util.Map;
import java.util.Optional;
import java.util.function.Consumer;

@ServerEndpoint(value = "/web-terminal/{authorize-code}")
@Slf4j
@Component
public class TerminalAttachServer {
    private final TerminalService terminalService;

    private final Consumer<byte[]> bytesConsumer = bytes -> {
        TextMessage textMessage = new TextMessage(bytes);
        String payload = textMessage.getPayload();
        System.out.println(payload);
        send(payload);
    };

    private com.jcraft.jsch.Session session;

    private Session wsSession;

    private Channel channel;

    private String authorizeCode;

    public TerminalAttachServer() {
        this.terminalService = WebTerminalApplication.getContext().getBean(TerminalService.class);
    }

    @OnOpen
    public void open(Session session, @PathParam("authorize-code") String authorizeCode) {
        this.wsSession = session;
        init(authorizeCode);
    }

    private void init(String authorizeCode) {
        this.authorizeCode = authorizeCode;
        TerminalConnectInfo terminalConnectInfo = Optional.ofNullable(TerminalService.CONNECT_AUTHORIZE_INFO.get(authorizeCode)).orElseThrow(() -> new UnAuthorizeException(CodeEnum.UN_AUTHORIZE));
        session = terminalService.connectSession(terminalConnectInfo); // 连接session
        channel = terminalService.connectChannel(session, terminalConnectInfo); // 获取通道
        terminalService.consumerTerminal(channel, terminalConnectInfo, bytesConsumer); // 监听通道
        TerminalService.AUTHORIZE_CHANNEL_SHELL.put(authorizeCode, (ChannelShell)channel); // 保存通道信息
    }

    @OnMessage
    public void message(String message) {
        terminalService.execTerminal(channel, message);
    }

    @SneakyThrows
    private void send(String message) {
        this.wsSession.getBasicRemote().sendText(message);
    }

    @OnClose
    public void close(Session wsSession) {
        log.info("[close] a session closed");
        terminalService.close(session, channel);
        TerminalService.AUTHORIZE_CHANNEL_SHELL.remove(authorizeCode); // 移除通道信息
    }

    @OnError
    public void error(Throwable error) {
        log.error("[error]", error);
        Throwable cause = error.getCause();
        if (cause instanceof ConnectException) {
            send("连接异常...");
        } else if (error instanceof LoginException) {
            send("登录过期...");
        } else {
            send(error.getMessage());
        }
    }
}
