package com.myyf.webssh.service;

import com.myyf.webssh.entity.dto.UserSigninDto;
import com.myyf.webssh.entity.dto.UserSignupDto;

public interface UserService {
    long signup(UserSignupDto userSignupDto);

    String signin(UserSigninDto userSigninDto);

    boolean verifyProducer(UserSignupDto userSignupDto);

    boolean verifyConsumer(String verifyNums, String email);

    boolean verifyCheck(String email);
}
