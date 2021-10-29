/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.listener.event;

/**
 * AutoTableStep1Event
 *
 * @since 2021/10/29
 */
public class AutoTableInitEvent extends AutoTableEvent {
    /**
     * Create a new {@code ApplicationEvent}.
     *
     * @param source the object on which the event initially occurred or with
     * which the event is associated (never {@code null})
     */
    public AutoTableInitEvent(Object source) {
        super(source);
    }
}
