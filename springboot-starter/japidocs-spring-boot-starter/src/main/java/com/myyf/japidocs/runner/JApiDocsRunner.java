package com.myyf.japidocs.runner;

import com.myyf.japidocs.bean.JApiDocsBean;
import io.github.yedaxia.apidocs.Docs;
import io.github.yedaxia.apidocs.DocsConfig;
import io.github.yedaxia.apidocs.plugin.markdown.MarkdownDocPlugin;
import io.github.yedaxia.apidocs.plugin.rap.RapSupportPlugin;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;

/**
 * JApiDocsRunner
 */
public class JApiDocsRunner implements ApplicationRunner {
    private final JApiDocsBean jApiDocsBean;

    public JApiDocsRunner(JApiDocsBean jApiDocsBean) {
        this.jApiDocsBean = jApiDocsBean;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        DocsConfig config = new DocsConfig();
        config.setProjectPath(jApiDocsBean.getProjectPath()); // 项目根目录
        config.setProjectName(jApiDocsBean.getProjectName()); // 项目名称
        config.setApiVersion(jApiDocsBean.getVersion());       // 声明该API的版本
        config.setDocsPath(jApiDocsBean.getDocsPath()); // 生成API 文档所在目录
        config.setAutoGenerate(Boolean.TRUE);  // 配置自动生成
        config.addPlugin(new MarkdownDocPlugin());
        config.addPlugin(new RapSupportPlugin());
        Docs.buildHtmlDocs(config); // 执行生成文档
    }
}
