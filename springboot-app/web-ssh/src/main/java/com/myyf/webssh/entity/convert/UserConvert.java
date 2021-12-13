package com.myyf.webssh.entity.convert;

import com.myyf.webssh.entity.User;
import com.myyf.webssh.entity.dto.UserSigninDto;
import com.myyf.webssh.entity.dto.UserSignupDto;
import org.mapstruct.Mapper;

/**
 * UserConvert
 */
@Mapper
public interface UserConvert {
    /**
     * 转为User
     * @param userSignupDto userSignupDto
     * @return User
     */
    User toUser(UserSignupDto userSignupDto);

    /**
     * 转为User
     *
     * @param userSigninDto userSigninDto
     * @return User
     */
    User toUser(UserSigninDto userSigninDto);
}
