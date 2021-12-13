package com.myyf.message.domian;

import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.example.annotation.AtColumn;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class LogicModel<T extends Model<T>> extends Model<T> {
    /**
     * 逻辑删除标记
     */
    @AtColumn(name = "deleted", length = 1, notNull = true, comment = "删除:1")
    @TableLogic(value = "0", delval = "1")
    private Integer deleted = 0;
}
