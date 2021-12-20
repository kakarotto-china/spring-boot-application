package com.myyf.webssh.entity.base;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableLogic;
import lombok.Data;

@Data
public class LogicDeleteModel<T extends LogicDeleteModel<?>> extends TimeModel<T> {
    @TableField(value = "deleted", fill = FieldFill.INSERT)
    @TableLogic(value = "0", delval = "1")
    private Integer deleted;
}
