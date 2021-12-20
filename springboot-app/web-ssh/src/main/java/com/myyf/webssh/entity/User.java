package com.myyf.webssh.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.myyf.webssh.constant.UserStatus;
import com.myyf.webssh.entity.base.LogicDeleteModel;
import com.myyf.webssh.entity.convert.UserConvert;
import lombok.Data;
import org.mapstruct.factory.Mappers;

/**
 * 表t_user实体
 */
@Data
@TableName("t_user")
public class User extends LogicDeleteModel<User> {
    /**
     * 转换器
     */
    public static final UserConvert CONVERT = Mappers.getMapper(UserConvert.class);

    @TableField("name")
    private String name;

    @TableField("nickname")
    private String nickname;

    @TableField("passwd")
    private String passwd;

    @TableField("email")
    private String email;

    @TableField("status")
    private UserStatus status;

    @TableField("auth_code")
    private String authCode;
}
