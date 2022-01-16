package com.myyf.webssh.controller;

import com.myyf.webssh.common.Result;
import com.myyf.webssh.entity.User;
import com.myyf.webssh.entity.dto.UserSigninDto;
import com.myyf.webssh.entity.dto.UserSignupDto;
import com.myyf.webssh.common.exception.UnLoginException;
import com.myyf.webssh.common.exception.VerifyException;
import com.myyf.webssh.interceptor.LoginIgnore;
import com.myyf.webssh.service.UserTerminalService;
import com.myyf.webssh.service.UserService;
import com.myyf.webssh.util.JWTUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/user")
@Validated
public class UserController {
    private final UserService userService;

    private final UserTerminalService userTerminalService;

    public UserController(UserService userService, UserTerminalService userTerminalService) {
        this.userService = userService;
        this.userTerminalService = userTerminalService;
    }

    @PostMapping("/signup")
    @LoginIgnore
    public Result<?> signup(@RequestBody @Validated UserSignupDto userSignupDto) {
        return Result.success(userService.signup(userSignupDto));
    }

    @PostMapping("/signin")
    @LoginIgnore
    public Result<?> signin(@RequestBody @Validated UserSigninDto userSigninDto) {
        return Result.success(userService.signin(userSigninDto));
    }

    @PostMapping("/verify-producer/{uid}")
    @LoginIgnore
    public Result<?> verifyProducer(@PathVariable("uid") long uid) {
        return Result.success(userService.verifyProducer(uid));
    }

    @GetMapping("/verify-consumer/{uid}/{verify}")
    @LoginIgnore
    public String verifyConsumer(@PathVariable("uid") long uid, @PathVariable("verify") String verifyNums) {
        try {
            userService.verifyConsumer(uid, verifyNums, userTerminalService::bindServerSSH);
            return "<h3>验证成功</h3>";
        } catch (VerifyException exc) {
            return "<h3>" + exc.codeEnum.info.getCn() + "</h3>";
        }
    }

    @GetMapping("/verify-check/{uid}")
    @LoginIgnore
    public Result<?> verifyCheck(@PathVariable("uid") long uid) {
        return Result.success(userService.verifyCheck(uid));
    }

    @GetMapping("/signin-check")
    public Result<?> signinCheck(HttpServletRequest request) {
        String token = request.getHeader("token");
        User user = JWTUtils.verify(token).orElseThrow(() -> new UnLoginException(Result.CodeEnum.UN_LOGIN));
        return Result.success(user.getId());
    }
}
