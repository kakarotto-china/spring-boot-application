package com.myyf.webssh.entity.convert;

import com.myyf.webssh.entity.UserSSH;
import com.myyf.webssh.entity.vo.UserSSHVo;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface UserSSHConvert {
    UserSSHVo toUserSSHVo(UserSSH userSSH);

    List<UserSSHVo> toUserSSHVoList(List<UserSSH> userSSHList);
}
