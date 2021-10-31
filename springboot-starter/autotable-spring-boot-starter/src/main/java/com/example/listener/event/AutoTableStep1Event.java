package com.example.listener.event;

import java.sql.Connection;

/**
 * AutoTableStep1Event 开始处理,打开连接触发，可以对一些数据进行初始化
 *
 * @since 2021/10/29
 */
public class AutoTableStep1Event extends AutoTableEvent<Connection> {
    /**
     * Create a new {@code ApplicationEvent}.
     *
     * @param connection the object on which the event initially occurred or with
     * which the event is associated (never {@code null})
     */
    public AutoTableStep1Event(Connection connection) {
        super(connection);
    }
}
