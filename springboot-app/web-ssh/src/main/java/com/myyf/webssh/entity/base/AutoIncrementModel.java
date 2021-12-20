package com.myyf.webssh.entity.base;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Data;

@Data
public class AutoIncrementModel<T extends AutoIncrementModel<?>> extends Model<T> {
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;
}
