package com.myyf.message.domian;

import cn.jasonone.at.annotation.Column;
import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@Data
public class OperatorModel<T extends LogicModel<T>, USER_TYPE extends Serializable, TIME_TYPE> extends LogicModel<T> {
    // 这里就是数据填充样例那里提到的IOptionByAutoFillHandler接口
    // 此处单独指定一个标记性的接口是为了区别用户其他数据的自动填充，例如用户名、用户电话等都会实现AutoFillHandler接口，框架上根据该接口无法拿到唯一的实现，因此同样IOptionByAutoFillHandler在整个系统中也只能有一个实现，不然会报错。
//    @InsertOptionUser(IOptionByAutoFillHandler.class)
    @Column(name = "create_by", length = 64, comment = "创建人")
    @TableField(value = "create_by")
    private USER_TYPE createBy;

//    @InsertUpdateOptionUser(IOptionByAutoFillHandler.class)
    @Column(name = "update_by", length = 64, comment = "最后更新人")
    @TableField(value = "update_by")
    private USER_TYPE updateBy;

//    @InsertOptionDate
    @Column(name = "create_time", length = 64, comment = "创建时间")
    @TableField(value = "create_time")
    private TIME_TYPE createTime;

    @Column(name = "update_time", length = 64, comment = "最后更新时间")
    @TableField(value = "update_time")
    private TIME_TYPE updateTime;
}
