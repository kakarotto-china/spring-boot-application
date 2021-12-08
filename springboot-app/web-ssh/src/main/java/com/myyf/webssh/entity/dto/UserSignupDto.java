package com.myyf.webssh.entity.dto;

import lombok.Data;

@Data
public class UserSignupDto {
    private String name;

    private String passwd;

    private String nickname;

    private String email;
}
