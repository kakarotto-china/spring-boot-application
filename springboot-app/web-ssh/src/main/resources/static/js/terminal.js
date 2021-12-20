let uid = checkSignin('../html/signin.html')
let userSSH = getCookieAndClear('user_ssh')

// 开始加载
Vue.use(httpVueLoader); // 使用httpVueLoader
Vue.component('web-socket', "url:../vue/webSocket.vue")
Vue.component('terminal', "url:../vue/terminal.vue")

let app = new Vue({
    el: '#app',
    data: {
        userSSH: {},
        ws: {
            path: '/webssh',
            instance: null
        },
        online: 0,
        term: {
            config: {
                // cols: 97,
                // rows: 37,
                // scrollback: 800, // 回滚
                // tabStopWidth: 8, // 制表宽度
                screenKeys: true,
                cursorBlink: true, // 光标闪烁
                cursorStyle: "block", // 光标样式  null | 'block' | 'underline' | 'bar'
                fontFamily: '"Cascadia Code", Menlo, monospace',
                theme: TERMINAL_BASE_THEME
            },
            instances: null
        }
    },
    created() {
        if(userSSH){
            this.userSSH = JSON.parse(userSSH)
            document.title = `${this.userSSH.user}@${this.userSSH.host}`
        }else{
            document.title = '页面错误'
        }
    },
    methods: {
        wsopen(event) {
            let msg = {
                "messageType": MESSAGE_TYPE.CLIENT,
                "info": {"from": "", "to": "", "desc": "初始化"},
                "content": this.userSSH.id
            }
            event.target.send(JSON.stringify(msg))
        },
        wsmessage(event) {
            console.log(event.data)
            let data = JSON.parse(event.data)
            if (data.messageType === 'SERVER') {
                if (data.info.desc === '在线数') {
                    this.online = data.content
                } else if (data.info.desc === '终端') {
                    this.term.instances.write(data.content);
                }
            } else {
                alert('未实现的操作' + data.messageType)
            }
        },
        wsconnect(newValue) {
            this.ws.instance = newValue;
        },
        oninit(newValue, oldValue) {
            this.term.instances = newValue
            this.term.instances.write('连接中...\r\n')
        },
        ondata(data) {
            let msg = {
                "messageType": MESSAGE_TYPE.CLIENT,
                "info": {"from": "", "to": "", "desc": "命令"},
                "content": data
            }
            this.ws.instance.send(JSON.stringify(msg))
        }
    }
});