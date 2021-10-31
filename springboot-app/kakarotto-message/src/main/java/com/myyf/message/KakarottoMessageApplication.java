package com.myyf.message;

import com.example.annotation.EnableAutoTable;
import com.example.enums.AtType;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication
@ServletComponentScan
@EnableAutoTable(type = AtType.UPDATE, catalog = "kakarotto-message", baseBeanScan = "com.myyf.message.domian")
public class KakarottoMessageApplication {

    public static void main(String[] args) {
        SpringApplication.run(KakarottoMessageApplication.class, args);
    }

}
