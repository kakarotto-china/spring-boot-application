package com.myyf.webssh.entity.dto;

import lombok.Data;

@Data
public class UserSSHNewDto {
    private String name;

    private String host;

    private int port;

    private String user;

    private String passwd;
}
