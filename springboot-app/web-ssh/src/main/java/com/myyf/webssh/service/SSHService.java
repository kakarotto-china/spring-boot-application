package com.myyf.webssh.service;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.Session;
import com.myyf.webssh.ws.server.SSHConnectionInfo;

import java.util.function.Consumer;


public interface SSHService {
    /**
     * 打开session连接
     *
     * @param sshConnectionInfo sshConnectionInfo
     * @return Session
     */
    Session connectSession(SSHConnectionInfo sshConnectionInfo);

    /**
     * 打开通道
     *
     * @param session session
     * @param sshConnectionInfo sshConnectionInfo
     * @return Channel
     */
    Channel connectChannel(Session session, SSHConnectionInfo sshConnectionInfo);

    /**
     * 循环消费通道流
     *
     * @param channel channel
     * @param consumer consumer
     */
    void consumerTerminal(Channel channel, Consumer<byte[]> consumer);

    /**
     * 向通道发送消息
     *
     * @param channel channel
     * @param input input
     */
    void execTerminal(Channel channel, String input);

    /**
     * 关闭处理 断开连接
     *
     * @param session session
     * @param channel channel
     */
    default void close(Session session, Channel channel){
        if (session != null) {
            session.disconnect();
        }
        if (channel != null) {
            channel.disconnect();
        }
    }
}
