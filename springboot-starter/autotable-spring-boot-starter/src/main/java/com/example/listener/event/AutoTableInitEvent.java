package com.example.listener.event;

/**
 * AutoTableApplicationRunner构造完成后调用
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
