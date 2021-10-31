package com.myyf.message.constant;

import com.baomidou.mybatisplus.core.enums.IEnum;
import com.example.enums.AtEnum;
import lombok.AllArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

@ToString
@AllArgsConstructor
public enum Gender implements AtEnum<String> , IEnum<String> {
    MALE("男"), FEMALE("女");

    public final String sex;

    @Override
    public Class<String> getJavaType() {
        return String.class;
    }

    @Override
    public String getValue() {
        return sex;
    }
}
