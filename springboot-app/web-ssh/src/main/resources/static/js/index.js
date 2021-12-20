let uid = checkSignin('./html/signin.html')

// 开始加载
Vue.use(httpVueLoader); // 使用httpVueLoader
Vue.component('terminals', "url:./vue/index/terminals.vue")
Vue.component('new-user-ssh', "url:./vue/index/newUserSSH.vue")

Vue.http.headers.common['token'] = getCookie('token')

let app = new Vue({
    el: '#app',
    data: {
        uid: '',
        userSSHList: [],
        terminalTabList: [],
        showNewUserSSH: false
    },
    created() {
        this.uid = uid
        this.findAllUserSSH()
    },
    methods: {
        findAllUserSSH() {
            this.$http.get(`./user-ssh/list/${this.uid}`).then(success => {
                let body = success.body
                if (body.code === 2000) {
                    this.userSSHList = body.data
                    return
                }
                console.log(body)
            }, fail => {
                console.error(fail)
            })
        },
        openTerminal(userSSH) {
            setCookie('user_ssh', JSON.stringify(userSSH), 1, '/html')
            window.open(`./html/terminal.html`)
            // let terminal = {
            //     name: `${userSSH.id}`,
            //     title: `${userSSH.user}@${userSSH.host}`,
            //     // content:'<iframe src="./html/terminal.html"></iframe>',
            //     online:0,
            //     ws: {
            //         path: '/webssh',
            //         instances: null
            //     },
            //     term: {
            //         config: {
            //             screenKeys: true,
            //             cursorBlink: true, // 光标闪烁
            //             cursorStyle: "block", // 光标样式  null | 'block' | 'underline' | 'bar'
            //             fontFamily: '"Cascadia Code", Menlo, monospace',
            //             theme: TERMINAL_BASE_THEME
            //         },
            //         instances: null
            //     },
            //     wsopen(event) {
            //         let msg = {
            //             "messageType": MESSAGE_TYPE.CLIENT,
            //             "info": {"from": "", "to": "", "desc": "初始化"},
            //             "content": userSSH.id
            //         }
            //         event.target.send(JSON.stringify(msg))
            //     },
            //     wsmessage(event) {
            //         console.log(event.data)
            //         let data = JSON.parse(event.data)
            //         if (data.messageType === 'SERVER') {
            //             if (data.info.desc === '在线数') {
            //                 _this.online = data.content
            //             } else if (data.info.desc === '终端') {
            //                 _this.term.instances.write(data.content);
            //             }
            //         } else {
            //             alert('未实现的操作' + data.messageType)
            //         }
            //     },
            //     wsconnect() {
            //         _this.ws.instance = newValue;
            //     },
            //     oninit(newValue, oldValue) {
            //         _this.term.instances = newValue
            //         _this.term.instances.write('连接中...\r\n')
            //     },
            //     ondata(data) {
            //         let msg = {
            //             "messageType": MESSAGE_TYPE.CLIENT,
            //             "info": {"from": "", "to": "", "desc": "命令"},
            //             "content": data
            //         }
            //         _this.ws.instance.send(JSON.stringify(msg))
            //     }
            // }
            // 单页面tab的实现
            // let terminalTab = new TerminalTab(userSSH)
            // this.$refs['terminals'].addTab(terminalTab)
            // this.terminalTabList.push(terminalTab)
        },
        signout() {
            clearCookie('token')
            window.location.href = './html/signin.html'
        },
        success(){
            this.findAllUserSSH()
        },
        delUserSSH(userSSH) {
            this.$http.delete(`./user-ssh/${userSSH.id}`).then(success => {
                let body = success.body
                if (body.code === 2000) {
                    // 删除成功
                    this.findAllUserSSH()
                    return
                }
                console.log(body)
            }, fail => {
                console.error(fail)
            })
        }
    }
})