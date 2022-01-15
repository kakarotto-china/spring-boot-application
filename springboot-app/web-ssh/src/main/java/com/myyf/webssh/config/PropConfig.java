package com.myyf.webssh.config;

import com.myyf.webssh.config.prop.AuthProp;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties({AuthProp.class})
public class PropConfig {
}
