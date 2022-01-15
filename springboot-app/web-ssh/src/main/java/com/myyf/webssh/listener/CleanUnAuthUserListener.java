package com.myyf.webssh.listener;

import cn.hutool.core.date.DateField;
import cn.hutool.core.date.DateTime;
import cn.hutool.core.date.DateUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.myyf.webssh.constant.UserStatus;
import com.myyf.webssh.entity.User;
import com.myyf.webssh.mapper.UserMapper;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
public class CleanUnAuthUserListener implements ApplicationListener<ApplicationReadyEvent> {
    private final UserMapper userMapper;

    public CleanUnAuthUserListener(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public void onApplicationEvent(ApplicationReadyEvent applicationReadyEvent) {
        LambdaQueryWrapper<User> query = new LambdaQueryWrapper<>();
        query.ne(User::getStatus, UserStatus.USED);
        List<User> users = userMapper.selectList(query);
        users.forEach(user->{
            Date createTime = user.getCreateTime();
            if(DateUtil.offset(createTime, DateField.MINUTE, 30).isAfter(new Date())){
                return;
            }
            user.deleteById();
        });
    }
}
