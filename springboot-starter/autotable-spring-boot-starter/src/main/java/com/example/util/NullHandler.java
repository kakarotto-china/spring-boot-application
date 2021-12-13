package com.example.util;

public class NullHandler<T> {
    private NullHandler() {
    }

    public static <R> NullHandler<R> newInstances(Class<R> clazz) {
        return new NullHandler<>();
    }

    public void doNoneNull(T t, Func<T> func) {
        if (t != null) {
            func.doFunc(t);
        }
    }

    @FunctionalInterface
    public interface Func<T> {
        void doFunc(T t);
    }
}
