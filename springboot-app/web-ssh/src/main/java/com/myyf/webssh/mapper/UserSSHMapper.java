package com.myyf.webssh.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.myyf.webssh.entity.UserSSH;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * UserSSHMapper
 */
@Mapper
@Repository
public interface UserSSHMapper extends BaseMapper<UserSSH> {
}
