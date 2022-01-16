package com.myyf.webssh.entity.vo;

import lombok.Data;

/**
 * 用户ssh基本信息
 */
@Data
public class UserTerminalVo {
    private Long id;

    private String name;

    private String host;

    private String user;

    private Long uid;
}
