package com.myyf.webssh.controller;

import com.myyf.webssh.common.Result;
import com.myyf.webssh.entity.dto.UserSSHEditDto;
import com.myyf.webssh.entity.dto.UserSSHNewDto;
import com.myyf.webssh.entity.dto.UserSSHTestDto;
import com.myyf.webssh.entity.vo.UserTerminalDetailVo;
import com.myyf.webssh.entity.vo.UserTerminalVo;
import com.myyf.webssh.service.UserTerminalService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user-terminal")
public class UserTerminalController {
    private final UserTerminalService userTerminalService;

    public UserTerminalController(UserTerminalService userTerminalService) {
        this.userTerminalService = userTerminalService;
    }

    /**
     * 列出当前用户下所有终端
     *
     * @param uid 用户id
     * @return 用户终端集合
     */
    @GetMapping("/list/{uid}")
    public Result<List<UserTerminalVo>> list(@PathVariable("uid") long uid) {
        return Result.success(userTerminalService.findAll(uid));
    }

    /**
     * 查询终端详细
     *
     * @param id 终端id
     * @return 终端详情信息
     */
    @GetMapping("/detail/{id}")
    public Result<UserTerminalDetailVo> detail(@PathVariable("id") long id) {
        return Result.success(userTerminalService.findDetail(id));
    }

    /**
     * 添加终端信息
     *
     * @param userSSHNewDto 新增终端对象
     * @return 终端基本信息
     */
    @PostMapping("/new")
    public Result<UserTerminalVo> add(@RequestBody UserSSHNewDto userSSHNewDto) {
        return Result.success(userTerminalService.add(userSSHNewDto));
    }

    /**
     * 编辑终端
     *
     * @param userSSHEditDto 编辑终端对象
     * @return 终端基本信息
     */
    @PutMapping("/edit")
    public Result<UserTerminalVo> edit(@RequestBody UserSSHEditDto userSSHEditDto) {
        return Result.success(userTerminalService.edit(userSSHEditDto));
    }

    /**
     * 删除终端
     *
     * @param id 终端id
     * @return 无信息
     */
    @DeleteMapping("/{id}")
    public Result<Void> delete(@PathVariable("id") long id) {
        userTerminalService.delete(id);
        return Result.success();
    }

    /**
     * 测试终端连接情况
     *
     * @param userSSHTestDto 终端信息
     * @return 测试命令终端输出文本
     */
    @PostMapping("/test")
    public Result<String> test(@RequestBody UserSSHTestDto userSSHTestDto) {
        return Result.success(userTerminalService.test(userSSHTestDto));
    }
}
