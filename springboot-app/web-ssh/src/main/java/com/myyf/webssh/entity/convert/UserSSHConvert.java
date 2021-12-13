package com.myyf.webssh.entity.convert;

import com.myyf.webssh.entity.UserSSH;
import com.myyf.webssh.entity.vo.UserSSHVo;
import org.mapstruct.Mapper;

import java.util.List;

/**
 * UserSSHConvert
 */
@Mapper
public interface UserSSHConvert {
    /**
     * 转为UserSSHVo
     *
     * @param userSSH userSSH
     * @return UserSSHVo
     */
    UserSSHVo toUserSSHVo(UserSSH userSSH);

    /**
     * 转为List<UserSSHVo>
     *
     * @param userSSHList userSSHList
     * @return List<UserSSHVo>
     */
    List<UserSSHVo> toUserSSHVoList(List<UserSSH> userSSHList);
}
