package com.myyf.webssh.entity.dto;

import lombok.Data;
import org.hibernate.validator.constraints.Length;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

/**
 * 注册
 */
@Data
public class UserSignupDto {
    @NotBlank(message = "账号不能为空")
    private String name;

    @Length(min = 6, max = 12, message = "密码长度4～12")
    private String passwd;

    @Length(min = 6, max = 12, message = "确认密码长度4～12")
    private String passwd1;

    @NotBlank(message = "昵称不能为空")
    private String nickname;

    // ^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$
    @Email(message = "邮件格式不正确")
    private String email;
}
