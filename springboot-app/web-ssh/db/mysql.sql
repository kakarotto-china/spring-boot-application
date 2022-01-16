-- auto-generated definition
create table t_user_terminal
(
    id          int auto_increment comment '主键',
    user        varchar(11) not null comment '用户名',
    host        varchar(11) not null comment '主机ip',
    port        int         not null comment '端口',
    name        varchar(11) not null comment '连接名称',
    passwd      varchar(11) not null comment '密码',
    uid         int         not null comment '用户id',
    create_time datetime    not null comment '创建时间',
    update_time datetime    not null comment '更新时间',
    constraint t_user_ssh_id_uindex
        unique (id),
    constraint t_user_ssh_user_host_uid_uindex
        unique (user, host, uid)
)
    comment 'ssh连接信息';

alter table t_user_terminal
    add primary key (id);


-- auto-generated definition
create table t_user
(
    id          int auto_increment comment '主键',
    name        varchar(11)            not null comment '用户名',
    nickname    varchar(11)            not null comment '昵称',
    passwd      varchar(11)            not null comment '密码',
    email       varchar(24)            not null comment '邮箱',
    create_time datetime               null comment '创建时间',
    update_time datetime               null comment '更新时间',
    status      int                    not null comment '状态',
    auth_code   varchar(11) default '' null comment '验证码',
    deleted     int         default 0  not null comment '逻辑删除',
    constraint t_user_id_uindex
        unique (id),
    constraint t_user_name_uindex
        unique (name)
)
    comment '用户表';

create index t_user_passwd_index
    on t_user (passwd);

alter table t_user
    add primary key (id);

