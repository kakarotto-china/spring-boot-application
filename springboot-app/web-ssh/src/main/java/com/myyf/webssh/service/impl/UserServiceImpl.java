package com.myyf.webssh.service.impl;

import cn.hutool.core.collection.CollUtil;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.myyf.webssh.WebSHHApplication;
import com.myyf.webssh.entity.User;
import com.myyf.webssh.entity.dto.UserSigninDto;
import com.myyf.webssh.entity.dto.UserSignupDto;
import com.myyf.webssh.mapper.UserMapper;
import com.myyf.webssh.service.UserService;
import com.myyf.webssh.util.JWTUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Calendar;
import java.util.Map;
import java.util.Objects;

@Service
public class UserServiceImpl implements UserService {
    private final UserMapper userMapper;

    public UserServiceImpl(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public Long signup(UserSignupDto userSignupDto) {
        User user = User.CONVERT.toUser(userSignupDto);
        user.insert();
        return user.getId();
    }

    @Override
    public String signin(UserSigninDto userSigninDto) {
        User user = User.CONVERT.toUser(userSigninDto);
        LambdaQueryWrapper<User> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(User::getName, user.getName()).eq(User::getPasswd, user.getPasswd());
        User result = user.selectOne(wrapper);
        String token = JWTUtils.generateToken(result);
        WebSHHApplication.getResponse().setHeader("token", token);
        return token;
    }
}
