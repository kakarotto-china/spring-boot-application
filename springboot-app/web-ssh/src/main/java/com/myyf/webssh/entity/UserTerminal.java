package com.myyf.webssh.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.myyf.webssh.entity.base.TimeModel;
import com.myyf.webssh.entity.convert.UserTerminalConvert;
import lombok.Data;
import org.mapstruct.factory.Mappers;

/**
 * 表t_user_ssh实体
 */
@Data
@TableName("t_user_terminal")
public class UserTerminal extends TimeModel<UserTerminal> {
    /**
     * 转换器
     */
    public static final UserTerminalConvert CONVERT = Mappers.getMapper(UserTerminalConvert.class);

    @TableField("name")
    private String name;

    @TableField("host")
    private String host;

    @TableField("port")
    private Integer port;

    @TableField("user")
    private String user;

    @TableField("passwd")
    private String passwd;

    @TableField("uid")
    private Long uid;
}
