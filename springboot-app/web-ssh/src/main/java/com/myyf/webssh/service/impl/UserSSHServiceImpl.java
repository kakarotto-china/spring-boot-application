package com.myyf.webssh.service.impl;

import cn.hutool.core.util.StrUtil;
import cn.hutool.extra.ssh.JschUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.jcraft.jsch.Session;
import com.myyf.webssh.WebSSHApplication;
import com.myyf.webssh.common.Result;
import com.myyf.webssh.common.exception.DuplicateResourceException;
import com.myyf.webssh.common.exception.NotFoundException;
import com.myyf.webssh.entity.User;
import com.myyf.webssh.entity.UserSSH;
import com.myyf.webssh.entity.dto.UserSSHEditDto;
import com.myyf.webssh.entity.dto.UserSSHNewDto;
import com.myyf.webssh.entity.dto.UserSSHTestDto;
import com.myyf.webssh.entity.vo.UserSSHDetailVo;
import com.myyf.webssh.entity.vo.UserSSHVo;
import com.myyf.webssh.mapper.UserSSHMapper;
import com.myyf.webssh.service.UserSSHService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
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
        LambdaQueryWrapper<UserSSH> query = new LambdaQueryWrapper<>();
        query.eq(UserSSH::getUid, uid);
        List<UserSSH> userSSHList = userSSHMapper.selectList(query);
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
        LambdaQueryWrapper<UserSSH> query = new LambdaQueryWrapper<>();
        query.eq(UserSSH::getUser, userSSH.getUser()).eq(UserSSH::getHost, userSSH.getHost()).eq(UserSSH::getUid, user.getId());
        UserSSH uSSH = userSSHMapper.selectOne(query);
        if(uSSH!=null){
            throw new DuplicateResourceException(Result.CodeEnum.DUPLICATE_RESOURCE);
        }
        userSSH.setUid(user.getId());
        userSSH.insert();
        return UserSSH.CONVERT.toUserSSHVo(userSSH);
    }

    @Override
    public UserSSHVo edit(UserSSHEditDto userSSHEditDto) {
        UserSSH us = userSSHMapper.selectById(userSSHEditDto.getId());
        if (us == null) {
            throw new NotFoundException(Result.CodeEnum.NOT_FOUND);
        }
        UserSSH userSSH = UserSSH.CONVERT.toUserSSH(userSSHEditDto);
        userSSH.updateById();
        return UserSSH.CONVERT.toUserSSHVo(us);
    }

    @Override
    public void delete(long id) {
        UserSSH userSSH = new UserSSH();
        userSSH.setId(id);
        userSSH.deleteById();
    }

    @Override
    public UserSSHDetailVo findDetail(long id) {
        UserSSH us = userSSHMapper.selectById(id);
        if (us == null) {
            throw new NotFoundException(Result.CodeEnum.NOT_FOUND);
        }
        UserSSH userSSH = new UserSSH();
        userSSH.setId(id);
        return UserSSH.CONVERT.toUserSSHDetailVo(us);
    }

    @SneakyThrows
    @Override
    public String test(UserSSHTestDto userSSHTestDto) {
        Session session = JschUtil.createSession(userSSHTestDto.getHost(), userSSHTestDto.getPort(), userSSHTestDto.getUser(), userSSHTestDto.getPasswd());
        session.setTimeout(30*1000);
        String res = JschUtil.exec(session, "who", StandardCharsets.UTF_8);
        JschUtil.close(session);
        return res;
    }
}
