package com.myyf.message.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.myyf.message.domian.UserInfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserInfoMapper extends BaseMapper<UserInfo> {
}
