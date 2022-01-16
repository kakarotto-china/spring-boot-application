package com.myyf.webssh.ws.server;

import com.jcraft.jsch.Channel;
import com.myyf.webssh.WebTerminalApplication;
import com.myyf.webssh.entity.UserTerminal;
import com.myyf.webssh.mapper.UserTerminalMapper;
import com.myyf.webssh.service.TerminalService;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.util.function.Consumer;

@ServerEndpoint(value = "/webssh/{id}")
@Slf4j
@Component
public class TerminalAttachServer {
    private final TerminalService terminalService;

    private final UserTerminalMapper userTerminalMapper;

    private final Consumer<byte[]> bytesConsumer = bytes -> {
        TextMessage textMessage = new TextMessage(bytes);
        String payload = textMessage.getPayload();
        System.out.println(payload);
        send(payload);
    };

    private com.jcraft.jsch.Session session;

    private Session wsSession;

    private Channel channel;

    public TerminalAttachServer() {
        this.terminalService = WebTerminalApplication.getContext().getBean(TerminalService.class);
        this.userTerminalMapper = WebTerminalApplication.getContext().getBean(UserTerminalMapper.class);
    }

    @OnOpen
    public void open(Session session, @PathParam("id") long id) {
        this.wsSession = session;
        init(id);
    }

    private void init(long id) {
        UserTerminal userTerminal = userTerminalMapper.selectById(id);
        TerminalConnectInfo terminalConnectInfo = new TerminalConnectInfo();
        terminalConnectInfo.setHost(userTerminal.getHost());
        terminalConnectInfo.setUsername(userTerminal.getUser());
        terminalConnectInfo.setPasswd(userTerminal.getPasswd());
        terminalConnectInfo.setPort(userTerminal.getPort());
        session = terminalService.connectSession(terminalConnectInfo);
        channel = terminalService.connectChannel(session, terminalConnectInfo);
        terminalService.consumerTerminal(channel, terminalConnectInfo, bytesConsumer);
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
    }

    @OnError
    public void error(Throwable error) {
        log.error("[error]", error);
    }
}
