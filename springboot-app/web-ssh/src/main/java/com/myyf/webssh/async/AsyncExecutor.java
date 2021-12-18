package com.myyf.webssh.async;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.function.Consumer;

@Slf4j
@Component
public class AsyncExecutor {
    /**
     * 不关闭 循环读取流
     *
     * @param in       InputStream
     * @param consumer 处理读到的直字节的方法
     */
    @Async("inputStreamPipeline")
    public void loopReading(InputStream in, Consumer<byte[]> consumer) {
        try {
            byte[] buffer = new byte[2048];
            int len;
            while ((len = in.read(buffer)) != -1) {
                consumer.accept(Arrays.copyOfRange(buffer, 0, len));
            }
        } catch (IOException e) {
            log.error("[loopReading]", e);
        }
    }
}
