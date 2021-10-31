package com.myyf.message.service.impl;

import com.myyf.message.common.Result;
import com.myyf.message.service.MessageService;
import com.myyf.message.ws.AbstractWsServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService {
    @Override
    public Result<?> userInfo() {
        return Result.success(AbstractWsServer.getOnline());
    }
}
