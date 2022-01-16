package com.myyf.webssh.entity.vo;

import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

/**
 * 用户ssh基本信息
 */
@Data
public class UserTerminalDetailVo {
    private Long id;

    private String name;

    private String host;

    private Integer port;

    private String user;

    private String passwd;
}
