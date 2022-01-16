package com.myyf.webssh.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.myyf.webssh.entity.UserTerminal;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * UserTerminalMapper
 */
@Mapper
@Repository
public interface UserTerminalMapper extends BaseMapper<UserTerminal> {
}
