package com.myyf.webssh.service;

import cn.hutool.core.map.MapUtil;
import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelShell;
import com.jcraft.jsch.Session;
import com.myyf.webssh.entity.dto.TerminalChannelSizeDto;
import com.myyf.webssh.ws.server.TerminalConnectInfo;

import java.util.Map;
import java.util.function.Consumer;


public interface TerminalService {
    /**
     * 连接授权信息
     */
    Map<String, TerminalConnectInfo> CONNECT_AUTHORIZE_INFO = MapUtil.newConcurrentHashMap();

    /**
     * 授权通道信息
     */
    Map<String, ChannelShell> AUTHORIZE_CHANNEL_SHELL = MapUtil.newConcurrentHashMap();

    /**
     * 获取连接码
     *
     * @param id 终端id
     * @param terminalChannelSizeDto terminalChannelSizeDto
     * @return 连接码
     */
    String connectAuthorize(long id, TerminalChannelSizeDto terminalChannelSizeDto);

    /**
     * 重设终端大小
     *
     * @param authorizeCode authorizeCode
     * @param terminalChannelSizeDto terminalChannelSizeDto
     * @return clos*rows
     */
    String setChannelResize(String authorizeCode, TerminalChannelSizeDto terminalChannelSizeDto);

    /**
     * 打开session连接
     *
     * @param terminalConnectInfo terminalConnectInfo
     * @return Session
     */
    Session connectSession(TerminalConnectInfo terminalConnectInfo);

    /**
     * 打开通道
     *
     * @param session           session
     * @param terminalConnectInfo terminalConnectInfo
     * @return Channel
     */
    Channel connectChannel(Session session, TerminalConnectInfo terminalConnectInfo);

    /**
     * 循环消费通道流
     *
     * @param channel  channel
     * @param terminalConnectInfo terminalConnectInfo
     * @param consumer consumer
     */
    void consumerTerminal(Channel channel, TerminalConnectInfo terminalConnectInfo, Consumer<byte[]> consumer);

    /**
     * 向通道发送消息
     *
     * @param channel channel
     * @param input   input
     */
    void execTerminal(Channel channel, String input);

    /**
     * 关闭处理 断开连接
     *
     * @param session session
     * @param channel channel
     */
    default void close(Session session, Channel channel) {
        if (session != null) {
            session.disconnect();
        }
        if (channel != null) {
            channel.disconnect();
        }
    }
}
