package com.myyf.webssh.entity.dto;

import lombok.Data;

/**
 * 注册
 */
@Data
public class UserSignupDto {
    private String name;

    private String passwd;

    private String passwd1;

    private String nickname;

    private String email;
}
