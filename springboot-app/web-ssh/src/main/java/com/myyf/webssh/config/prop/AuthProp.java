package com.myyf.webssh.config.prop;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "auth")
@Data
public class AuthProp {
    private String domain;

    private int port;
}
