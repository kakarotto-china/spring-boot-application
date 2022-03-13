//package com.myyf.webssh.ws.server;
//
//import com.jcraft.jsch.Channel;
//import com.jcraft.jsch.Session;
//import com.myyf.webssh.WebTerminalApplication;
//import com.myyf.webssh.common.Result;
//import com.myyf.webssh.entity.UserTerminal;
//import com.myyf.webssh.common.exception.UnSupportedOperationException;
//import com.myyf.webssh.mapper.UserTerminalMapper;
//import com.myyf.webssh.service.TerminalService;
//import com.myyf.webssh.ws.AbstractWsTextServer;
//import com.myyf.webssh.ws.config.WsTextCodec;
//import com.myyf.webssh.ws.config.WsTextMessage;
//import lombok.extern.slf4j.Slf4j;
//import org.apache.tomcat.websocket.WsSession;
//import org.springframework.stereotype.Component;
//import org.springframework.web.socket.TextMessage;
//
//import javax.websocket.server.ServerEndpoint;
//import java.util.function.Consumer;
//
//@ServerEndpoint(value = "/webssh", encoders = WsTextCodec.class, decoders = WsTextCodec.class)
//@Slf4j
//@Component
//public class WebSHHWsTextServer extends AbstractWsTextServer {
//    private final TerminalService sshService;
//
//    private final Consumer<byte[]> bytesConsumer = bytes -> {
//        TextMessage textMessage = new TextMessage(bytes);
//        String payload = textMessage.getPayload();
//        System.out.println(payload);
//        send(payload, "终端");
//    };
//
//    private Session session;
//
//    private Channel channel;
//
//    public WebSHHWsTextServer() {
//        super(true);
//        sshService = WebTerminalApplication.getContext().getBean(TerminalService.class);
//    }
//
//    @Override
//    protected void open(WsSession wsSession) {
//        sendAsync(getOnline() + "", "在线数");
//    }
//
//    @Override
//    protected void message(WsTextMessage text) {
//        log.info("{}", text);
//        String desc = text.getInfo().getDesc();
//        switch (desc) {
//            case "初始化":
//                init(text.getContent());
//                break;
//            case "resize":
//                break;
//            case "命令":
//                dealCmd(text.getContent());
//                break;
//            default:
//                throw new UnSupportedOperationException(CodeEnum.UN_SUPPORTED);
//        }
//    }
//
//    private void init(String content) {
//        long id = Long.parseLong(content);
//        UserTerminalMapper userSSHMapper = WebTerminalApplication.getContext().getBean(UserTerminalMapper.class);
//        UserTerminal userSSH = userSSHMapper.selectById(id);
//        TerminalConnectInfo sshConnectionInfo = new TerminalConnectInfo();
//        sshConnectionInfo.setHost(userSSH.getHost());
//        sshConnectionInfo.setUsername(userSSH.getUser());
//        sshConnectionInfo.setPasswd(userSSH.getPasswd());
//        sshConnectionInfo.setPort(userSSH.getPort());
//        session = sshService.connectSession(sshConnectionInfo);
//        channel = sshService.connectChannel(session, sshConnectionInfo);
//        sshService.consumerTerminal(channel, bytesConsumer);
////        sshService.execTerminal(channel, "\r"); // 获取终端输入的前缀，模拟终端按下回车键
//
//        sendAsync("", "连接信息");
//    }
//
//    private void dealCmd(String content) {
//        sshService.execTerminal(channel, content);
//    }
//
//    @Override
//    protected void close(WsSession wsSession) {
//        sshService.close(session, channel);
//    }
//
//    @Override
//    protected void error(Throwable error) {
//        sshService.close(session, channel);
//    }
//}
