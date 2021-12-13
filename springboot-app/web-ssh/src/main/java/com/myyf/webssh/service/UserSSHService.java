package com.myyf.webssh.service;

import com.myyf.webssh.entity.vo.UserSSHVo;

import java.util.List;

public interface UserSSHService {
    List<UserSSHVo> findAll(long uid);
}
