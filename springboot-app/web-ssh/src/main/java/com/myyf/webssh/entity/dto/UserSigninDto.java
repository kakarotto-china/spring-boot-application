package com.myyf.webssh.entity.dto;

import lombok.Data;

/**
 * 登录
 */
@Data
public class UserSigninDto {
    private String name;

    private String passwd;
}
