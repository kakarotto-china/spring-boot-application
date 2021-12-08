package com.myyf.webssh.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.myyf.webssh.entity.convert.UserConvert;
import lombok.Data;
import org.mapstruct.factory.Mappers;

@Data
@TableName("t_user")
public class User extends Model<User> {
    public static final UserConvert CONVERT = Mappers.getMapper(UserConvert.class);

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @TableField("name")
    private String name;

    @TableField("nickname")
    private String nickname;

    @TableField("passwd")
    private String passwd;

    @TableField("email")
    private String email;
}
