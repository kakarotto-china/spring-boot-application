package com.myyf.webssh.entity.dto;

import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

/**
 * 登录
 */
@Data
public class UserSigninDto {
    @NotBlank(message = "用户名不能为空")
    private String name;

    @Length(min = 6, max = 12, message = "密码长度4～12")
    private String passwd;

    private boolean rememberme;
}
