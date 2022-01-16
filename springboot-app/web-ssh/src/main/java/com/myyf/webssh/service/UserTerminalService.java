package com.myyf.webssh.service;

import com.myyf.webssh.entity.User;
import com.myyf.webssh.entity.dto.UserSSHEditDto;
import com.myyf.webssh.entity.dto.UserSSHNewDto;
import com.myyf.webssh.entity.dto.UserSSHTestDto;
import com.myyf.webssh.entity.vo.UserTerminalDetailVo;
import com.myyf.webssh.entity.vo.UserTerminalVo;

import java.util.List;

/**
 * UserTerminalService
 */
public interface UserTerminalService {
    /**
     * 查询用户所有ssh信息
     *
     * @param uid uid
     * @return List<UserTerminalVo>
     */
    List<UserTerminalVo> findAll(long uid);

    /**
     * 绑定服务器连接信息
     *
     * @param user user
     */
    void bindServerSSH(User user);

    UserTerminalVo add(UserSSHNewDto userSSHNewDto);

    UserTerminalVo edit(UserSSHEditDto userSSHEditDto);

    void delete(long id);

    UserTerminalDetailVo findDetail(long id);

    String test(UserSSHTestDto userSSHTestDto);
}
