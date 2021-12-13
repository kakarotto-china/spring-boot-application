package com.myyf.webssh.controller;

import com.myyf.webssh.common.Result;
import com.myyf.webssh.interceptor.LoginIgnore;
import com.myyf.webssh.service.UserSSHService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user-ssh")
public class UserSSHController {
    private final UserSSHService userSSHService;

    public UserSSHController(UserSSHService userSSHService) {
        this.userSSHService = userSSHService;
    }

    @GetMapping("/list/{uid}")
    @LoginIgnore
    public Result<?> list(@PathVariable("uid") long uid) {
        return Result.success(userSSHService.findAll(uid));
    }
}
