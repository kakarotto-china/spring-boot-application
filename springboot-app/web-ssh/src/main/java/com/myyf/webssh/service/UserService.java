package com.myyf.webssh.service;

import com.myyf.webssh.entity.User;
import com.myyf.webssh.entity.dto.UserSigninDto;
import com.myyf.webssh.entity.dto.UserSignupDto;

import java.util.function.Consumer;

/**
 * UserService
 */
public interface UserService {
    /**
     * 注册
     *
     * @param userSignupDto userSignupDto
     * @return uid
     */
    long signup(UserSignupDto userSignupDto);

    /**
     * 登录
     *
     * @param userSigninDto userSigninDto
     * @return token
     */
    String signin(UserSigninDto userSigninDto);

    /**
     * 生产验证消息
     *
     * @param userSignupDto userSignupDto
     * @return boolean
     */
    boolean verifyProducer(UserSignupDto userSignupDto);

    /**
     * 消费验证消息
     *
     * @param verifyNums verifyNums
     * @param email email
     * @param consumer consumer
     */
    void verifyConsumer(String verifyNums, String email, Consumer<User> consumer);

    /**
     * 检查是否消费
     *
     * @param email email
     * @return boolean
     */
    boolean verifyCheck(String email);
}
