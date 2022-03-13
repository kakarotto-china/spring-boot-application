package com.myyf.webssh.service.impl;

import cn.hutool.core.lang.UUID;
import cn.hutool.core.util.StrUtil;
import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelShell;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;
import com.myyf.webssh.async.AsyncExecutor;
import com.myyf.webssh.common.CodeEnum;
import com.myyf.webssh.common.exception.UnAuthorizeException;
import com.myyf.webssh.entity.UserTerminal;
import com.myyf.webssh.entity.dto.TerminalChannelSizeDto;
import com.myyf.webssh.mapper.UserTerminalMapper;
import com.myyf.webssh.service.TerminalService;
import com.myyf.webssh.ws.server.TerminalConnectInfo;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.OutputStream;
import java.util.Optional;
import java.util.function.Consumer;

@Service
@Slf4j
public class TerminalServiceImpl implements TerminalService {
    private final AsyncExecutor asyncExecutor;

    private final UserTerminalMapper userTerminalMapper;

    public TerminalServiceImpl(AsyncExecutor asyncExecutor, UserTerminalMapper userTerminalMapper) {
        this.asyncExecutor = asyncExecutor;
        this.userTerminalMapper = userTerminalMapper;
    }

    @Override
    public String connectAuthorize(long id, TerminalChannelSizeDto terminalChannelSizeDto) {
        UserTerminal userTerminal = userTerminalMapper.selectById(id);
        TerminalConnectInfo terminalConnectInfo = new TerminalConnectInfo();
        terminalConnectInfo.setHost(userTerminal.getHost());
        terminalConnectInfo.setUsername(userTerminal.getUser());
        terminalConnectInfo.setPasswd(userTerminal.getPasswd());
        terminalConnectInfo.setPort(userTerminal.getPort());
        terminalConnectInfo.setColumn(terminalChannelSizeDto.getCols());
        terminalConnectInfo.setRow(terminalChannelSizeDto.getRows());
        String authorizeCode = UUID.randomUUID().toString();
        CONNECT_AUTHORIZE_INFO.put(authorizeCode, terminalConnectInfo);
        return authorizeCode;
    }

    @Override
    public String setChannelResize(String authorizeCode, TerminalChannelSizeDto terminalChannelSizeDto) {
        ChannelShell channelShell = Optional.ofNullable(AUTHORIZE_CHANNEL_SHELL.get(authorizeCode)).orElseThrow(() -> new UnAuthorizeException(CodeEnum.UN_OPEN_AUTHORIZE_CHANNEL_SHELL_ERROR));
        int rows = terminalChannelSizeDto.getRows();
        int cols = terminalChannelSizeDto.getCols();
        channelShell.setPtySize(cols, rows, cols * 8, rows * 8);
        return StrUtil.format("{}*{}|{}*{}", cols, rows, cols * 8, rows * 8);
    }

    @SneakyThrows
    @Override
    public Session connectSession(TerminalConnectInfo terminalConnectInfo) {
        JSch jSch = new JSch();
        Session session = jSch.getSession(terminalConnectInfo.getUsername(), terminalConnectInfo.getHost(), terminalConnectInfo.getPort());
        session.setPassword(terminalConnectInfo.getPasswd());
        session.setConfig(terminalConnectInfo.getProperties());
        session.connect(terminalConnectInfo.getSessionTimeoutMs()); // 连接超时时间30s
        return session;
    }

    @SneakyThrows
    @Override
    public Channel connectChannel(Session session, TerminalConnectInfo terminalConnectInfo) {
        // 开启shell通道
        Channel channel = session.openChannel("shell");
        // 通道连接 超时时间3s
        // channel.connect(terminalConnectInfo.getChannelTimeoutMs()); // 在channel链接前开始读取，可获取不到欢迎信息，可以用于过虑掉欢迎信息....
        // 设置终端大小
        int row = terminalConnectInfo.getRow();
        int column = terminalConnectInfo.getColumn();
        ((ChannelShell) channel).setPtySize(column, row, column * 8, row * 8);
        return channel;
    }

    @SneakyThrows
    @Override
    public void consumerTerminal(Channel channel, TerminalConnectInfo terminalConnectInfo, Consumer<byte[]> consumer) {
        asyncExecutor.loopReading(channel.getInputStream(), terminalConnectInfo.getBufferSize(), consumer);
        // 通道连接 超时时间3s
        channel.connect(terminalConnectInfo.getChannelTimeoutMs()); // 在开始读取channel后再链接，可以获取到欢迎信息....
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
