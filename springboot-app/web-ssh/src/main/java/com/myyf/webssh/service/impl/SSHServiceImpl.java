package com.myyf.webssh.service.impl;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;
import com.myyf.webssh.async.AsyncExecutor;
import com.myyf.webssh.service.SSHService;
import com.myyf.webssh.ws.server.SSHConnectionInfo;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.OutputStream;
import java.util.function.Consumer;

@Service
@Slf4j
public class SSHServiceImpl implements SSHService {
    private final AsyncExecutor asyncExecutor;

    public SSHServiceImpl(AsyncExecutor asyncExecutor) {
        this.asyncExecutor = asyncExecutor;
    }

    @SneakyThrows
    @Override
    public Session connectSession(SSHConnectionInfo sshConnectionInfo) {
        JSch jSch = new JSch();
        Session session = jSch.getSession(sshConnectionInfo.getUsername(), sshConnectionInfo.getHost(), sshConnectionInfo.getPort());
        session.setPassword(sshConnectionInfo.getPasswd());
        session.setConfig(sshConnectionInfo.getProperties());
        session.connect(sshConnectionInfo.getSessionTimeoutMs()); // 连接超时时间30s
        return session;
    }

    @SneakyThrows
    @Override
    public Channel connectChannel(Session session, SSHConnectionInfo sshConnectionInfo) {
        // 开启shell通道
        Channel channel = session.openChannel("shell");
//        // 通道连接 超时时间3s
//        channel.connect(sshConnectionInfo.getChannelTimeoutMs());
        return channel;
    }

    @SneakyThrows
    @Override
    public void consumerTerminal(Channel channel, Consumer<byte[]> consumer) {
        asyncExecutor.loopReading(channel.getInputStream(), consumer);
        // 通道连接 超时时间3s
        channel.connect(3000); // 在开始读取channel后再链接，可以获取到欢迎信息....
    }

//    @Override
//    public void send(Channel channel, byte[] input) {
//        OutputStream outputStream = channel.getOutputStream(); // 不能关流 !!!
//            outputStream.write(input);
//            outputStream.flush();
//    }

    @SneakyThrows
    @Override
    public void execTerminal(Channel channel, String input) {
        OutputStream outputStream = channel.getOutputStream(); // 不能关流 !!!
        outputStream.write(input.getBytes());
        outputStream.flush();
    }
}
