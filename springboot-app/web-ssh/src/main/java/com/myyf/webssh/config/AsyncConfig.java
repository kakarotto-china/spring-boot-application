package com.myyf.webssh.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;

@Configuration
@EnableAsync
public class AsyncConfig {
    @Bean("inputStreamPipeline")
    public Executor inputStreamPipeline() {
        ThreadPoolTaskExecutor inputStreamPipeline = new ThreadPoolTaskExecutor();
        inputStreamPipeline.setCorePoolSize(10);
        inputStreamPipeline.setMaxPoolSize(50);
        inputStreamPipeline.setQueueCapacity(200);
        inputStreamPipeline.setKeepAliveSeconds(60);
        inputStreamPipeline.setThreadNamePrefix("inputStreamPipeline--");
        inputStreamPipeline.setWaitForTasksToCompleteOnShutdown(true);
        inputStreamPipeline.setAwaitTerminationSeconds(60);
        return inputStreamPipeline;
    }
}
