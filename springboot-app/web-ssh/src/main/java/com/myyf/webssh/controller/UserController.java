package com.myyf.webssh.controller;

import com.myyf.webssh.common.Result;
import com.myyf.webssh.entity.User;
import com.myyf.webssh.entity.dto.UserSigninDto;
import com.myyf.webssh.entity.dto.UserSignupDto;
import com.myyf.webssh.common.exception.LoginException;
import com.myyf.webssh.common.exception.VerifyException;
import com.myyf.webssh.interceptor.LoginIgnore;
import com.myyf.webssh.service.UserSSHService;
import com.myyf.webssh.service.UserService;
import com.myyf.webssh.util.JWTUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    private final UserSSHService userSSHService;

    public UserController(UserService userService, UserSSHService userSSHService) {
        this.userService = userService;
        this.userSSHService = userSSHService;
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

    @PostMapping("/verify-producer")
    @LoginIgnore
    public Result<?> verifyProducer(@RequestBody UserSignupDto userSignupDto) {
        return Result.success(userService.verifyProducer(userSignupDto));
    }

    @GetMapping("/verify-consumer/{verify}")
    @LoginIgnore
    public String verifyConsumer(@PathVariable("verify") String verifyNums, @RequestParam("email") String email) {
        try {
            userService.verifyConsumer(verifyNums, email, userSSHService::bindServerSSH);
            return "<h3>验证成功</h3>";
        } catch (VerifyException exc) {
            return "<h3>" + exc.codeEnum.info.getCn() + "</h3>";
        }
    }

    @GetMapping("/verify-check")
    @LoginIgnore
    public Result<?> verifyCheck(@RequestParam("email") String email) {
        return Result.success(userService.verifyCheck(email));
    }

    @GetMapping("/signin-check")
    public Result<?> signinCheck(HttpServletRequest request) {
        String token = request.getHeader("token");
        User user = JWTUtils.verify(token).orElseThrow(() -> new LoginException(Result.CodeEnum.UN_LOGIN));
        return Result.success(user.getId());
    }
}
