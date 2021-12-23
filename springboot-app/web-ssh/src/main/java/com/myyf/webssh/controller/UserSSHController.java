package com.myyf.webssh.controller;

import com.myyf.webssh.common.Result;
import com.myyf.webssh.entity.dto.UserSSHEditDto;
import com.myyf.webssh.entity.dto.UserSSHNewDto;
import com.myyf.webssh.entity.dto.UserSSHTestDto;
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

    @GetMapping("/detail/{id}")
    public Result<?> detail(@PathVariable("id") long id) {
        return Result.success(userSSHService.findDetail(id));
    }

    @PostMapping("/new")
    public Result<?> add(@RequestBody UserSSHNewDto userSSHNewDto) {
        return Result.success(userSSHService.add(userSSHNewDto));
    }

    @PutMapping("/edit")
    public Result<?> edit(@RequestBody UserSSHEditDto userSSHEditDto) {
        return Result.success(userSSHService.edit(userSSHEditDto));
    }

    @DeleteMapping("/{id}")
    public Result<?> delete(@PathVariable("id") long id) {
        userSSHService.delete(id);
        return Result.success();
    }

    @PostMapping("/test")
    public Result<?> test(@RequestBody UserSSHTestDto userSSHTestDto) {
        return Result.success(userSSHService.test(userSSHTestDto));
    }
}
