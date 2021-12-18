package com.myyf.webssh.service;

import com.myyf.webssh.entity.User;
import com.myyf.webssh.entity.vo.UserSSHVo;

import java.util.List;

/**
 * UserSSHService
 */
public interface UserSSHService {
    /**
     * 查询用户所有ssh信息
     *
     * @param uid uid
     * @return List<UserSSHVo>
     */
    List<UserSSHVo> findAll(long uid);

    /**
     * 绑定服务器连接信息
     *
     * @param user user
     */
    void bindServerSSH(User user);
}
