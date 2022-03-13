package com.myyf.japidocs;


import cn.hutool.core.convert.Convert;
import com.myyf.japidocs.annotation.EnableJApiDocs;
import com.myyf.japidocs.bean.JApiDocsBean;
import com.myyf.japidocs.runner.JApiDocsRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportAware;
import org.springframework.core.type.AnnotationMetadata;
import org.springframework.core.type.StandardAnnotationMetadata;


@Configuration
public class JApiDocsAutoConfiguration implements ImportAware {
    private final JApiDocsBean jApiDocsBean;

    public JApiDocsAutoConfiguration() {
        this.jApiDocsBean = new JApiDocsBean();
    }

    @Bean
    public JApiDocsBean jApiDocsBean(){
        return jApiDocsBean;
    }

    @Bean
    @ConditionalOnBean(JApiDocsBean.class)
    public JApiDocsRunner jApiDocsRunner(JApiDocsBean jApiDocsBean){
        return new JApiDocsRunner(jApiDocsBean);
    }

    @Override
    public void setImportMetadata(AnnotationMetadata importMetadata) {
        StandardAnnotationMetadata sam = Convert.convert(StandardAnnotationMetadata.class, importMetadata);
        if(sam == null){
            return;
        }
        EnableJApiDocs enableJApiDocs = sam.getIntrospectedClass().getAnnotation(EnableJApiDocs.class);
        jApiDocsBean.setProjectPath(enableJApiDocs.rootPath());
        jApiDocsBean.setProjectName(enableJApiDocs.projectName());
        jApiDocsBean.setVersion(enableJApiDocs.version());
        jApiDocsBean.setDocsPath(enableJApiDocs.docsPath());
    }
}
