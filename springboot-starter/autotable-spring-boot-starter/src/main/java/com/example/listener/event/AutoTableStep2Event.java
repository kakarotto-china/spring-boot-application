package com.example.listener.event;

/**
 * AutoTableStep1Event 打开连接之后，可以做一些基本参数检查
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
