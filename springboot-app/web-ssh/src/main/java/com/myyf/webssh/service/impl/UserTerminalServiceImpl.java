package com.myyf.webssh.service.impl;

import cn.hutool.core.util.StrUtil;
import cn.hutool.extra.ssh.JschUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.jcraft.jsch.Session;
import com.myyf.webssh.WebTerminalApplication;
import com.myyf.webssh.common.CodeEnum;
import com.myyf.webssh.common.Result;
import com.myyf.webssh.common.exception.DuplicateResourceException;
import com.myyf.webssh.common.exception.NotFoundException;
import com.myyf.webssh.entity.User;
import com.myyf.webssh.entity.UserTerminal;
import com.myyf.webssh.entity.dto.UserSSHEditDto;
import com.myyf.webssh.entity.dto.UserSSHNewDto;
import com.myyf.webssh.entity.dto.UserSSHTestDto;
import com.myyf.webssh.entity.vo.UserTerminalDetailVo;
import com.myyf.webssh.entity.vo.UserTerminalVo;
import com.myyf.webssh.mapper.UserTerminalMapper;
import com.myyf.webssh.service.UserTerminalService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class UserTerminalServiceImpl implements UserTerminalService {
    private final UserTerminalMapper userTerminalMapper;

    @Value("${spring.mail.username}")
    private String adminEmail;

    public UserTerminalServiceImpl(UserTerminalMapper userTerminalMapper) {
        this.userTerminalMapper = userTerminalMapper;
    }

    @Override
    public List<UserTerminalVo> findAll(long uid) {
        LambdaQueryWrapper<UserTerminal> query = new LambdaQueryWrapper<>();
        query.eq(UserTerminal::getUid, uid);
        List<UserTerminal> userTerminalList = userTerminalMapper.selectList(query);
        return UserTerminal.CONVERT.toUserSSHVoList(userTerminalList);
    }

    @Override
    public void bindServerSSH(User user) {
        if (!StrUtil.equals(adminEmail, user.getEmail())) {
            return;
        }
        // 绑定localhost账户
        UserTerminal userTerminal = new UserTerminal();
        userTerminal.setUser("ubuntu");
        userTerminal.setHost("192.168.1.2");
        userTerminal.setPort(22);
        userTerminal.setName("server");
        userTerminal.setPasswd("yuehao12#$");
        userTerminal.setUid(user.getId());
        userTerminal.insert();
    }

    @Override
    public UserTerminalVo add(UserSSHNewDto userSSHNewDto) {
        UserTerminal userTerminal = UserTerminal.CONVERT.toUserSSH(userSSHNewDto);
        User user = WebTerminalApplication.getUser();
        LambdaQueryWrapper<UserTerminal> query = new LambdaQueryWrapper<>();
        query.eq(UserTerminal::getUser, userTerminal.getUser()).eq(UserTerminal::getHost, userTerminal.getHost()).eq(UserTerminal::getUid, user.getId());
        UserTerminal uSSH = userTerminalMapper.selectOne(query);
        if (uSSH != null) {
            throw new DuplicateResourceException(CodeEnum.DUPLICATE_RESOURCE);
        }
        userTerminal.setUid(user.getId());
        userTerminal.insert();
        return UserTerminal.CONVERT.toUserSSHVo(userTerminal);
    }

    @Override
    public UserTerminalVo edit(UserSSHEditDto userSSHEditDto) {
        UserTerminal us = userTerminalMapper.selectById(userSSHEditDto.getId());
        if (us == null) {
            throw new NotFoundException(CodeEnum.NOT_FOUND);
        }
        UserTerminal userTerminal = UserTerminal.CONVERT.toUserSSH(userSSHEditDto);
        userTerminal.updateById();
        return UserTerminal.CONVERT.toUserSSHVo(us);
    }

    @Override
    public void delete(long id) {
        UserTerminal userTerminal = new UserTerminal();
        userTerminal.setId(id);
        userTerminal.deleteById();
    }

    @Override
    public UserTerminalDetailVo findDetail(long id) {
        UserTerminal us = userTerminalMapper.selectById(id);
        if (us == null) {
            throw new NotFoundException(CodeEnum.NOT_FOUND);
        }
        UserTerminal userTerminal = new UserTerminal();
        userTerminal.setId(id);
        return UserTerminal.CONVERT.toUserSSHDetailVo(us);
    }

    @SneakyThrows
    @Override
    public String test(UserSSHTestDto userSSHTestDto) {
        Session session = JschUtil.createSession(userSSHTestDto.getHost(), userSSHTestDto.getPort(), userSSHTestDto.getUser(), userSSHTestDto.getPasswd());
        session.setTimeout(30 * 1000);
        String res = JschUtil.exec(session, "who", StandardCharsets.UTF_8);
        JschUtil.close(session);
        return res;
    }
}
