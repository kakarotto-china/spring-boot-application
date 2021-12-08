package com.myyf.webssh.controller;

import com.myyf.webssh.common.Result;
import com.myyf.webssh.entity.dto.UserSigninDto;
import com.myyf.webssh.entity.dto.UserSignupDto;
import com.myyf.webssh.interception.LoginIgnore;
import com.myyf.webssh.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    @LoginIgnore
    public Result<?> signup(@RequestBody UserSignupDto userSignupDto) {
        return Result.success(userService.signup(userSignupDto));
    }

    @PostMapping("/signin")
    @LoginIgnore
    public Result<?> signup(@RequestBody UserSigninDto userSigninDto) {
        return Result.success(userService.signin(userSigninDto));
    }

    @GetMapping("/check-signin")
    public Result<?> checkSignin() {
        return Result.success(true);
    }
}
