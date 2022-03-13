package com.myyf.japidocs.annotation;

import com.myyf.japidocs.JApiDocsAutoConfiguration;
import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Import(JApiDocsAutoConfiguration.class)
@Documented
public @interface EnableJApiDocs {
    String rootPath();

    String projectName();

    String version();

    String docsPath() default "";
}
