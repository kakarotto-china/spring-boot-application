package com.myyf.webssh.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Data;

@Data
@TableName("t_user_ssh")
public class UserSHH extends Model<UserSHH> {
    @TableField("name")
    private String name;

    @TableField("host")
    private String host;

    @TableField("port")
    private Integer port;

    @TableField("host")
    private String user;

    @TableField("passwd")
    private String passwd;


}
