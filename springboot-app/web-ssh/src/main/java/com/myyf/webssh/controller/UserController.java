package com.myyf.webssh.controller;

import com.myyf.webssh.common.CodeEnum;
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

    /**
     * 注册
     *
     * @param userSignupDto  注册对象
     * @return 用户id
     */
    @PostMapping("/signup")
    @LoginIgnore
    public Result<Long> signup(@RequestBody @Validated UserSignupDto userSignupDto) {
        return Result.success(userService.signup(userSignupDto));
    }

    /**
     * 登录
     *
     * @param userSigninDto 登录对象
     * @return token
     */
    @PostMapping("/signin")
    @LoginIgnore
    public Result<String> signin(@RequestBody @Validated UserSigninDto userSigninDto) {
        return Result.success(userService.signin(userSigninDto));
    }

    /**
     * 生成验证
     *
     * @param uid 用户id
     * @return 是否生成成功
     */
    @PostMapping("/verify-producer/{uid}")
    @LoginIgnore
    public Result<Boolean> verifyProducer(@PathVariable("uid") long uid) {
        return Result.success(userService.verifyProducer(uid));
    }

    /**
     * 消费验证码
     *
     * @param uid 用户id
     * @param verifyNums 验证码
     * @return 结果html
     */
    @GetMapping("/verify-consumer/{uid}/{verify}")
    @LoginIgnore
    public String verifyConsumer(@PathVariable("uid") long uid, @PathVariable("verify") String verifyNums) {
        try {
            userService.verifyConsumer(uid, verifyNums, userTerminalService::bindServerSSH);
            return "<h3>验证成功</h3>";
        } catch (VerifyException exc) {
            return "<h3>" + exc.codeEnum.info + "</h3>";
        }
    }

    /**
     * 检查是否消费
     *
     * @param uid 用户id
     * @return 是否消费成功
     */
    @GetMapping("/verify-check/{uid}")
    @LoginIgnore
    public Result<Boolean> verifyCheck(@PathVariable("uid") long uid) {
        return Result.success(userService.verifyCheck(uid));
    }

    /**
     * 登录检查
     *
     * @param request HttpServletRequest
     * @return 返回用户id
     */
    @GetMapping("/signin-check")
    public Result<Long> signinCheck(HttpServletRequest request) {
        String token = request.getHeader("token");
        User user = JWTUtils.verify(token).orElseThrow(() -> new UnLoginException(CodeEnum.UN_LOGIN));
        return Result.success(user.getId());
    }
}
