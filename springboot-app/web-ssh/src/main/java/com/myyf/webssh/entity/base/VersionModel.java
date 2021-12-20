package com.myyf.webssh.entity.base;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.Version;
import lombok.Data;

@Data
public class VersionModel<T extends VersionModel<?>> extends LogicDeleteModel<T> {
    @TableField("version")
    @Version
    private Integer version;
}
