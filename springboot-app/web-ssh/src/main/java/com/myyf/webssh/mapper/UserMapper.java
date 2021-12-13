package com.myyf.webssh.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.myyf.webssh.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * UserMapper
 */
@Mapper
@Repository
public interface UserMapper extends BaseMapper<User> {
}
