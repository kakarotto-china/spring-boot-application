package com.myyf.webssh.service.impl;

import cn.hutool.core.util.RandomUtil;
import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.myyf.webssh.WebTerminalApplication;
import com.myyf.webssh.common.Result;
import com.myyf.webssh.common.exception.*;
import com.myyf.webssh.config.prop.AuthProp;
import com.myyf.webssh.constant.UserStatus;
import com.myyf.webssh.entity.User;
import com.myyf.webssh.entity.dto.UserSigninDto;
import com.myyf.webssh.entity.dto.UserSignupDto;
import com.myyf.webssh.mapper.UserMapper;
import com.myyf.webssh.service.UserService;
import com.myyf.webssh.util.JWTUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Date;
import java.util.function.Consumer;
import java.util.function.Supplier;

@Service
@Slf4j
public class UserServiceImpl implements UserService {
    @Value("${spring.mail.username}")
    private String adminEmail;

    private final AuthProp authProp;

    private final UserMapper userMapper;

    private final JavaMailSender javaMailSender;

    public UserServiceImpl(UserMapper userMapper, JavaMailSender javaMailSender, AuthProp authProp) {
        this.userMapper = userMapper;
        this.javaMailSender = javaMailSender;
        this.authProp = authProp;
    }

    @Override
    public long signup(UserSignupDto userSignupDto) {
        User user = User.CONVERT.toUser(userSignupDto);
        LambdaQueryWrapper<User> query = new LambdaQueryWrapper<>();
        query.eq(User::getName, user.getName()).in(User::getStatus, UserStatus.USED, UserStatus.AUTH, UserStatus.CREATED);
        User u = userMapper.selectOne(query);
        // todo 此处查询时不应该使用软删除
        user.setStatus(UserStatus.CREATED); // 创建状态
        if (u != null) {
            if(u.getStatus() == UserStatus.USED){
                // 用户已存在
                throw new DuplicateResourceException(Result.CodeEnum.DUPLICATE_RESOURCE);
            }else{
                user.setId(u.getId());
                user.updateById();
            }
        }else{
            user.insert();
        }
        return user.getId();
    }

    @Override
    public String signin(UserSigninDto userSigninDto) {
        User user = User.CONVERT.toUser(userSigninDto);
        LambdaQueryWrapper<User> wrapper = new LambdaQueryWrapper<>();
        // 查询使用状态
        wrapper.eq(User::getName, user.getName()).eq(User::getStatus, UserStatus.USED.status);
        User result = userMapper.selectOne(wrapper);
        if (result == null) {
            throw new LoginException(Result.CodeEnum.USER_NOT_FOUND);
        }
        if (!StrUtil.equals(result.getPasswd(), user.getPasswd())) {
            throw new LoginException(Result.CodeEnum.USER_PASSWD_ERROR);
        }
        String token = JWTUtils.generateToken(result, userSigninDto.isRememberme());
        WebTerminalApplication.getResponse().setHeader("token", token);
        return token;
    }

    @Override
    public boolean verifyProducer(long uid) {
        User user = findUser(uid, () -> new EmailException(Result.CodeEnum.USER_NOT_FOUND));
        String verify = sendMail(user);
        // 更新状态为验证中
        user.setAuthCode(verify);
        user.setStatus(UserStatus.AUTH);
        user.updateById();
        return true;
    }

    private String sendMail(User user) {
        try {
            // 构建一个邮件对象
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
            // 设置邮件主题
            helper.setSubject("邮箱验证");
            // 设置邮件发送者，这个跟application.yml中设置的要一致
            helper.setFrom(adminEmail);
            // 设置邮件接收者，可以有多个接收者，中间用逗号隔开，以下类似
            helper.setTo(user.getEmail());
            // 设置邮件发送日期
            helper.setSentDate(new Date());
            // 设置邮件的正文
            String verify = RandomUtil.randomNumbers(6);

            String url = StrUtil.format("{}:{}/user/verify-consumer/{}/{}", authProp.getDomain(), authProp.getPort(), user.getId(), verify);
            String content = StrUtil.format("请访问以下链接进行验证：<br/> <a href=\"{}\">{}</a>", url, url);
            helper.setText(content, true);
            // 发送邮件
            javaMailSender.send(mimeMessage);
            return verify;
        } catch (MessagingException e) {
            log.error("[verifyProducer]", e);
            throw new EmailException(Result.CodeEnum.SEND_EMAIL_FAIL);
        }
    }

    @Override
    @Transactional
    public void verifyConsumer(long uid, String verifyNums, Consumer<User> consumer) {
        User user = findUser(uid, () -> new VerifyException(Result.CodeEnum.USER_NOT_FOUND));
        String verify = user.getAuthCode();
        if (StrUtil.isEmpty(verify)) {
            throw new VerifyException(Result.CodeEnum.VERIFY_EXPIRED);
        }
        if (!StrUtil.equals(verify, verifyNums)) {
            throw new VerifyException(Result.CodeEnum.VERIFY_FAIL);
        }
        // 自动绑定
        consumer.accept(user);
        // 更新状态
        user.setStatus(UserStatus.USED);
        user.setAuthCode("--");
        user.updateById();
    }

    @Override
    public boolean verifyCheck(long uid) {
        User user = findUser(uid, () -> new VerifyException(Result.CodeEnum.USER_NOT_FOUND));
        return user.getStatus() == UserStatus.USED;
    }

    private User findUser(long uid, Supplier<ServiceRuntimeException> supplier) {
        User user = userMapper.selectById(uid);
        if (user == null) {
            throw supplier.get();
        }
        return user;
    }
}
