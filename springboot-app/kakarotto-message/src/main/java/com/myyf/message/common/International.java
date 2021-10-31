package com.myyf.message.common;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor(staticName = "of")
public class International {
    @NonNull
    private String cn;
    @NonNull
    private String en;
}
