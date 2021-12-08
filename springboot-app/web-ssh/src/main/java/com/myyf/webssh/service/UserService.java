package com.myyf.webssh.service;

import com.myyf.webssh.entity.dto.UserSigninDto;
import com.myyf.webssh.entity.dto.UserSignupDto;

public interface UserService {
    Long signup(UserSignupDto userSignupDto);

    String signin(UserSigninDto userSigninDto);
}
