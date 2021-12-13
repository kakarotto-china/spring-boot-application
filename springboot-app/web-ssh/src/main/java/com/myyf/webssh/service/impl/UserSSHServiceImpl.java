package com.myyf.webssh.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.myyf.webssh.entity.UserSSH;
import com.myyf.webssh.entity.vo.UserSSHVo;
import com.myyf.webssh.mapper.UserSSHMapper;
import com.myyf.webssh.service.UserSSHService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserSSHServiceImpl implements UserSSHService {
    private final UserSSHMapper userSSHMapper;

    public UserSSHServiceImpl(UserSSHMapper userSSHMapper) {
        this.userSSHMapper = userSSHMapper;
    }

    @Override
    public List<UserSSHVo> findAll(long uid) {
        UserSSH userSSH = new UserSSH();
        LambdaQueryWrapper<UserSSH> query = new LambdaQueryWrapper<>();
        query.eq(UserSSH::getUid, uid);
        List<UserSSH> userSSHList = userSSH.selectList(query);
        List<UserSSHVo> userSSHVos = UserSSH.CONVERT.toUserSSHVoList(userSSHList);
        return userSSHVos;
    }
}
