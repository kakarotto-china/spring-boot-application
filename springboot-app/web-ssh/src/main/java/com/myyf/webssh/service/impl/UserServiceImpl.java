package com.myyf.webssh.service.impl;

import cn.hutool.cache.Cache;
import cn.hutool.cache.impl.TimedCache;
import cn.hutool.core.date.DateUnit;
import cn.hutool.core.util.RandomUtil;
import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.myyf.webssh.WebSHHApplication;
import com.myyf.webssh.common.Result;
import com.myyf.webssh.entity.User;
import com.myyf.webssh.entity.dto.UserSigninDto;
import com.myyf.webssh.entity.dto.UserSignupDto;
import com.myyf.webssh.exception.EmailException;
import com.myyf.webssh.exception.VerifyException;
import com.myyf.webssh.mapper.UserMapper;
import com.myyf.webssh.service.UserService;
import com.myyf.webssh.util.JWTUtils;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Date;
import java.util.function.Consumer;

@Service
public class UserServiceImpl implements UserService {
    private static final Cache<String, String> VERIFY_CODE = new TimedCache<>(DateUnit.SECOND.getMillis() * 1800);
    private static final Cache<String, UserSignupDto> SIGN_UP_INFO = new TimedCache<>(DateUnit.SECOND.getMillis() * 1800);

    private final UserMapper userMapper;

    private final JavaMailSender javaMailSender;

    public UserServiceImpl(UserMapper userMapper, JavaMailSender javaMailSender) {
        this.userMapper = userMapper;
        this.javaMailSender = javaMailSender;
    }

    @Override
    public long signup(UserSignupDto userSignupDto) {
        User user = User.CONVERT.toUser(userSignupDto);
        user.insert();
        return user.getId();
    }

    @Override
    public String signin(UserSigninDto userSigninDto) {
        User user = User.CONVERT.toUser(userSigninDto);
        LambdaQueryWrapper<User> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(User::getName, user.getName()).eq(User::getPasswd, user.getPasswd());
        User result = user.selectOne(wrapper);
        String token = JWTUtils.generateToken(result);
        WebSHHApplication.getResponse().setHeader("token", token);
        return token;
    }

    @Override
    public boolean verifyProducer(UserSignupDto userSignupDto) {
        try {
            // 构建一个邮件对象
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
            // 设置邮件主题
            helper.setSubject("邮箱验证");
            // 设置邮件发送者，这个跟application.yml中设置的要一致
            helper.setFrom(userSignupDto.getEmail());
            // 设置邮件接收者，可以有多个接收者，中间用逗号隔开，以下类似
            helper.setTo(userSignupDto.getEmail());
            // 设置邮件发送日期
            helper.setSentDate(new Date());
            // 设置邮件的正文
            String verify = RandomUtil.randomNumbers(6);
            String url = StrUtil.format("http://192.168.1.9:5555/user/verify-consumer/{}?email={}", verify, userSignupDto.getEmail());
            String content = StrUtil.format("请访问以下链接进行验证：<br/> <a href=\"{}\">{}</a>", url, url);
            helper.setText(content, true);
            // 发送邮件
            javaMailSender.send(mimeMessage);
            VERIFY_CODE.put(userSignupDto.getEmail(), verify);
            SIGN_UP_INFO.put(userSignupDto.getEmail(), userSignupDto);
            return true;
        } catch (MessagingException e) {
            throw new EmailException(Result.CodeEnum.SEND_EMAIL_FAIL);
        }
    }

    @Override
    @Transactional
    public void verifyConsumer(String verifyNums, String email, Consumer<User> consumer) {
        String verify = VERIFY_CODE.get(email);
        if (verify == null) {
            throw new VerifyException(Result.CodeEnum.VERIFY_EXPIRED);
        }
        if (!StrUtil.equals(verify, verifyNums)) {
            throw new VerifyException(Result.CodeEnum.VERIFY_FAIL);
        }
        UserSignupDto userSignupDto = SIGN_UP_INFO.get(email);
        User user = User.CONVERT.toUser(userSignupDto);
        // 新增用户
        user.insert();
        // 自动绑定
        consumer.accept(user);
        VERIFY_CODE.put(email, "consumed");
    }

    @Override
    public boolean verifyCheck(String email) {
        return StrUtil.equals(VERIFY_CODE.get(email), "consumed");
    }
}
