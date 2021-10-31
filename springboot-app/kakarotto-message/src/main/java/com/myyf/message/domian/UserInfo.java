package com.myyf.message.domian;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.example.annotation.AtColumn;
import com.example.annotation.AtTable;
import com.myyf.message.constant.Gender;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

@AtTable(name = "tbl_user_info", comment = "用户表")
@TableName("tbl_user_info")
@EqualsAndHashCode(callSuper = true)
@Data
public class UserInfo extends OperatorModel<UserInfo, String, Date> {
    @TableId(value = "id", type = IdType.AUTO)
    @AtColumn(name = "id", length = 64, primaryKey = true, autoincrement = true, comment = "用户id")
    private Integer id;

    @AtColumn(name = "name", length = 64, notNull = true, comment = "名字")
    @TableField(value = "name")
    private String name;

    @AtColumn(name = "passwd", length = 64, notNull = true, comment = "密码")
    @TableField(value = "passwd")
    private String passwd;

    @AtColumn(name = "gender", length = 64, notNull = true, comment = "性别")
    @TableField(value = "gender")
    private Gender gender; // todo 添加auto table 的枚举映射

    @AtColumn(name = "email", length = 64, notNull = true, comment = "邮箱")
    @TableField(value = "email")
    private String email;

    @AtColumn(name = "phone", length = 64, notNull = true, comment = "电话")
    @TableField(value = "phone")
    private String phone;
}


