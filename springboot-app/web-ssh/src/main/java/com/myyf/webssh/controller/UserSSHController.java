package com.myyf.webssh.controller;

import com.myyf.webssh.common.Result;
import com.myyf.webssh.entity.dto.UserSSHNewDto;
import com.myyf.webssh.interceptor.LoginIgnore;
import com.myyf.webssh.service.UserSSHService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user-ssh")
public class UserSSHController {
    private final UserSSHService userSSHService;

    public UserSSHController(UserSSHService userSSHService) {
        this.userSSHService = userSSHService;
    }

    @GetMapping("/list/{uid}")
    public Result<?> list(@PathVariable("uid") long uid) {
        return Result.success(userSSHService.findAll(uid));
    }

    @PostMapping("/new")
    public Result<?> add(@RequestBody UserSSHNewDto userSSHNewDto) {
        return Result.success(userSSHService.add(userSSHNewDto));
    }

    @DeleteMapping("/{id}")
    public Result<?> delete(@PathVariable("id") long id) {
        userSSHService.delete(id);
        return Result.success();
    }
}
