/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.listener.event;

/**
 * AutoTableStep1Event 打开连接之后，可以对一些数据进行初始化
 *
 * @since 2021/10/29
 */
public class AutoTableStep2Event extends AutoTableEvent<String> {
    /**
     * Create a new {@code ApplicationEvent}.
     *
     * @param message the object on which the event initially occurred or with
     * which the event is associated (never {@code null})
     */
    public AutoTableStep2Event(String message) {
        super(message);
    }
}
