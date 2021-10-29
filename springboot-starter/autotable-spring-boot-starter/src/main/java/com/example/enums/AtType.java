/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.example.enums;
/**
 * 生成模式
 * @author Jason
 *
 */
public enum AtType {
	/**
	 * 创建模式: 将删除所有已存在的表,重新创建,会清除所有数据
	 */
	CREATE,
	/**
	 * 更新模式: 保留已存在的表以及字段,不针对字段或其结构进行修改,不影响数据
	 */
	UPDATE,
	/**
	 * 默认模式: 不做任何操作
	 */
	NONE;
}
