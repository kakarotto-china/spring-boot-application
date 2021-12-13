package com.myyf.webssh.entity.convert;

import com.myyf.webssh.entity.User;
import com.myyf.webssh.entity.dto.UserSigninDto;
import com.myyf.webssh.entity.dto.UserSignupDto;
import org.mapstruct.Mapper;

@Mapper
public interface UserConvert {
    User toUser(UserSignupDto userSignupDto);

    User toUser(UserSigninDto userSigninDto);
}
