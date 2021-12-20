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
     * @param uid uid
     * @return boolean
     */
    boolean verifyProducer(long uid);

    /**
     * 消费验证消息
     *
     * @param uid uid
     * @param verifyNums      verifyNums
     * @param consumer   consumer
     */
    void verifyConsumer(long uid, String verifyNums, Consumer<User> consumer);

    /**
     * 检查是否消费
     *
     * @param uid uid
     * @return boolean
     */
    boolean verifyCheck(long uid);
}
