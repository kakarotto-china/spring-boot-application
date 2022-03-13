package com.myyf.webssh.controller;

import com.myyf.webssh.common.Result;
import com.myyf.webssh.entity.dto.TerminalChannelSizeDto;
import com.myyf.webssh.service.TerminalService;
import org.springframework.web.bind.annotation.*;

/**
 *
 */
@RestController
@RequestMapping("/terminal")
public class TerminalController {
    private final TerminalService terminalService;

    public TerminalController(TerminalService terminalService) {
        this.terminalService = terminalService;
    }

    /**
     * 连接授权
     *
     * @param id 终端id
     * @return 授权连接码
     */
    @GetMapping("/connect-authorize/{id}")
    public Result<String> connectAuthorize(@PathVariable("id") long id, TerminalChannelSizeDto terminalChannelSizeDto) {
        return Result.success(terminalService.connectAuthorize(id, terminalChannelSizeDto));
    }

    @PostMapping("/resize/{authorize-code}")
    public Result<String> connectAuthorize(@PathVariable("authorize-code") String authorizeCode, @RequestBody TerminalChannelSizeDto terminalChannelSizeDto) {
        return Result.success(terminalService.setChannelResize(authorizeCode, terminalChannelSizeDto));
    }
}
