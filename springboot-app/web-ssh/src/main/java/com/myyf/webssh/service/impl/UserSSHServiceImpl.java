package com.myyf.webssh.service.impl;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.myyf.webssh.WebSSHApplication;
import com.myyf.webssh.entity.User;
import com.myyf.webssh.entity.UserSSH;
import com.myyf.webssh.entity.dto.UserSSHNewDto;
import com.myyf.webssh.entity.vo.UserSSHVo;
import com.myyf.webssh.mapper.UserSSHMapper;
import com.myyf.webssh.service.UserSSHService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserSSHServiceImpl implements UserSSHService {
    private final UserSSHMapper userSSHMapper;

    @Value("${spring.mail.username}")
    private String adminEmail;

    public UserSSHServiceImpl(UserSSHMapper userSSHMapper) {
        this.userSSHMapper = userSSHMapper;
    }

    @Override
    public List<UserSSHVo> findAll(long uid) {
        UserSSH userSSH = new UserSSH();
        LambdaQueryWrapper<UserSSH> query = new LambdaQueryWrapper<>();
        query.eq(UserSSH::getUid, uid);
        List<UserSSH> userSSHList = userSSH.selectList(query);
        return UserSSH.CONVERT.toUserSSHVoList(userSSHList);
    }

    @Override
    public void bindServerSSH(User user) {
        if (!StrUtil.equals(adminEmail, user.getEmail())) {
            return;
        }
        // 绑定localhost账户
        UserSSH userSSH = new UserSSH();
        userSSH.setUser("ubuntu");
        userSSH.setHost("192.168.1.2");
        userSSH.setPort(22);
        userSSH.setName("server");
        userSSH.setPasswd("yuehao12#$");
        userSSH.setUid(user.getId());
        userSSH.insert();
    }

    @Override
    public UserSSHVo add(UserSSHNewDto userSSHNewDto) {
        UserSSH userSSH = UserSSH.CONVERT.toUserSSH(userSSHNewDto);
        User user = WebSSHApplication.getUser();
        userSSH.setUid(user.getId());
        userSSH.insert();
        return UserSSH.CONVERT.toUserSSHVo(userSSH);
    }

    @Override
    public void delete(long id) {
        UserSSH userSSH = new UserSSH();
        userSSH.setId(id);
        userSSH.deleteById();
    }
}
