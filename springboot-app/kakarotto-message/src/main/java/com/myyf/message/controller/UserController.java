package com.myyf.message.controller;

import com.myyf.message.common.Result;
import com.myyf.message.constant.Gender;
import com.myyf.message.domian.UserInfo;
import com.myyf.message.mapper.UserInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserInfoMapper userInfoMapper;

    @PostMapping("/one")
    public Result<?> insert() {
        UserInfo userInfo = new UserInfo();
        userInfo.setName("zhangsan");
        userInfo.setPasswd("123");
        userInfo.setGender(Gender.MALE);
        userInfo.setEmail("zhangsan@live.com");
        userInfo.setPhone("5564420");
        return Result.success(userInfo.insert());
    }

    @GetMapping("/all")
    public Result<?> findAll() {
        UserInfo userInfo = new UserInfo();
        return Result.success(userInfo.selectAll());
    }

    @GetMapping("/one/{id}")
    public Result<?> findOne(@PathVariable("id") String id) {
        UserInfo userInfo = new UserInfo();
        return Result.success(userInfo.selectById(id));
    }

    @DeleteMapping("/{id}")
    public Result<?> delete(@PathVariable("id") String id) {
        UserInfo userInfo = new UserInfo();
        return Result.success(userInfo.deleteById(id));
    }
}
