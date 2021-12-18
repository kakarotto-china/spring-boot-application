package com.myyf.webssh.common;

import lombok.Data;
import lombok.NonNull;

@Data(staticConstructor = "of")
public class International {
    @NonNull
    private final String cn; // 中文

    @NonNull
    private final String en; // 英文
}
