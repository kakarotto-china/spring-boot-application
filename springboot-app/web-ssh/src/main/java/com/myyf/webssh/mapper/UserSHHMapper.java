package com.myyf.webssh.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.myyf.webssh.entity.UserSHH;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserSHHMapper extends BaseMapper<UserSHH> {
}
