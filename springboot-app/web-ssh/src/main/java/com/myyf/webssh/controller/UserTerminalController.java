package com.myyf.webssh.controller;

import com.myyf.webssh.common.Result;
import com.myyf.webssh.entity.dto.UserSSHEditDto;
import com.myyf.webssh.entity.dto.UserSSHNewDto;
import com.myyf.webssh.entity.dto.UserSSHTestDto;
import com.myyf.webssh.service.UserTerminalService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user-ssh")
public class UserTerminalController {
    private final UserTerminalService userTerminalService;

    public UserTerminalController(UserTerminalService userTerminalService) {
        this.userTerminalService = userTerminalService;
    }

    @GetMapping("/list/{uid}")
    public Result<?> list(@PathVariable("uid") long uid) {
        return Result.success(userTerminalService.findAll(uid));
    }

    @GetMapping("/detail/{id}")
    public Result<?> detail(@PathVariable("id") long id) {
        return Result.success(userTerminalService.findDetail(id));
    }

    @PostMapping("/new")
    public Result<?> add(@RequestBody UserSSHNewDto userSSHNewDto) {
        return Result.success(userTerminalService.add(userSSHNewDto));
    }

    @PutMapping("/edit")
    public Result<?> edit(@RequestBody UserSSHEditDto userSSHEditDto) {
        return Result.success(userTerminalService.edit(userSSHEditDto));
    }

    @DeleteMapping("/{id}")
    public Result<?> delete(@PathVariable("id") long id) {
        userTerminalService.delete(id);
        return Result.success();
    }

    @PostMapping("/test")
    public Result<?> test(@RequestBody UserSSHTestDto userSSHTestDto) {
        return Result.success(userTerminalService.test(userSSHTestDto));
    }
}
