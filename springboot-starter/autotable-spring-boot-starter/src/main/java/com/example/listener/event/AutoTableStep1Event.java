/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.listener.event;

import java.sql.Connection;

/**
 * AutoTableStep1Event 开始处理打开连接前触发，可以做一些基本参数检查
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
