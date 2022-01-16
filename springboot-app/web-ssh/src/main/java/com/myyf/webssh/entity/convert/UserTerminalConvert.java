package com.myyf.webssh.entity.convert;

import com.myyf.webssh.entity.UserTerminal;
import com.myyf.webssh.entity.dto.UserSSHEditDto;
import com.myyf.webssh.entity.dto.UserSSHNewDto;
import com.myyf.webssh.entity.vo.UserTerminalDetailVo;
import com.myyf.webssh.entity.vo.UserTerminalVo;
import org.mapstruct.Mapper;

import java.util.List;

/**
 * UserTerminalConvert
 */
@Mapper
public interface UserTerminalConvert {
    UserTerminal toUserSSH(UserSSHNewDto userSSHNewDto);
    UserTerminal toUserSSH(UserSSHEditDto userSSHEditDto);
    /**
     * 转为UserSSHVo
     *
     * @param userTerminal userTerminal
     * @return UserTerminalVo
     */
    UserTerminalVo toUserSSHVo(UserTerminal userTerminal);

    /**
     * 转为UserSSHDetailVo
     *
     * @param userTerminal userTerminal
     * @return UserTerminalDetailVo
     */
    UserTerminalDetailVo toUserSSHDetailVo(UserTerminal userTerminal);

    /**
     * 转为List<UserTerminalVo>
     *
     * @param userTerminalList userTerminalList
     * @return List<UserTerminalVo>
     */
    List<UserTerminalVo> toUserSSHVoList(List<UserTerminal> userTerminalList);
}
