package com.myyf.webssh.constant;

import com.baomidou.mybatisplus.annotation.IEnum;
import lombok.AllArgsConstructor;
import lombok.ToString;

@ToString
@AllArgsConstructor
public enum UserStatus implements IEnum<Integer> {
    CREATED(0),
    AUTH(1),
    USED(2);

    public final int status;

    @Override
    public Integer getValue() {
        return status;
    }
}
