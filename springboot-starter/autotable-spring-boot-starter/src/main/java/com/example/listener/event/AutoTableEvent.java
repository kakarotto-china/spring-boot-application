/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.listener.event;

import org.springframework.context.ApplicationEvent;

/**
 * @author yWX978481
 * @since 2021/10/29
 */
public class AutoTableEvent<T> extends ApplicationEvent {
    /**
     * Create a new {@code ApplicationEvent}.
     *
     * @param source the object on which the event initially occurred or with
     * which the event is associated (never {@code null})
     */
    public AutoTableEvent(T source) {
        super(source);
    }

    @Override
    public T getSource() {
        return (T)super.getSource();
    }
}
