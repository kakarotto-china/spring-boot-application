package com.myyf.webssh.ws.server;

import lombok.Data;

import java.util.Properties;

/**
 * ssh连接信息
 */
@Data
public class TerminalConnectInfo {
    private String username = "ubuntu";

    private String passwd = "yuehao12#$";

    private String host = "192.168.1.2";

    private int port = 22;

    private int sessionTimeoutMs = 30000;

    private int channelTimeoutMs = 3000;

    private int bufferSize = 2048;

    private int row = 80;

    private int column = 24;

    private final Properties properties = new Properties() {
        {
            this.setProperty("StrictHostKeyChecking", "no"); // 初次连接，不检查，模拟发送yes
        }
    };
}