let checkSignin = async () => {
    Vue.http.headers.common['token'] = getCookie('token')
    Vue.http.get('../user/check-signin').then(
        success => {
            let body = success.body
            if (body.code !== 2000) {
                console.log(body)
                window.location.href = './html/signin.html'
            }
        }, fail => {
            console.error(fail)
        })
}

checkSignin()

// 开始加载
Vue.use(httpVueLoader); // 使用httpVueLoader
Vue.component('web-socket', "url:../vue/webSocket.vue")

let app = new Vue({
    el: '#app',
    data: {
        ws: {
            path: '/webssh',
            instance: null
        },
        connectInfo: {
            name: '',
            host: ''
        },
        online: 0,
        terminalConfig: {
            cols: 97,
            rows: 37,
            cursorBlink: true, // 光标闪烁
            cursorStyle: "block", // 光标样式  null | 'block' | 'underline' | 'bar'
            scrollback: 800, // 回滚
            tabStopWidth: 8, // 制表宽度
            screenKeys: true
        },
        term: null
    },
    created() {
        this.initTerm()
    },
    methods: {
        initTerm() {
            this.term = new Terminal(this.terminalConfig);
            this.term.on('data', (data) => {
                // 键盘输入时的回调函数
                console.log(data)
                let msg = {
                    "messageType": MESSAGE_TYPE.CLIENT,
                    "info": {"from": "", "to": "", "desc": "命令"},
                    "content": data
                }
                this.ws.instance.send(JSON.stringify(msg))
            });
            this.term.open(); // 参数1，指定显示的dom元素，可为空
            //在页面上显示连接中...
            this.term.write('Connecting...');
        },
        wsopen(event) {
            let msg = {
                "messageType": MESSAGE_TYPE.CLIENT,
                "info": {"from": "", "to": "", "desc": "初始化"},
                "content": getCookie('token')
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
                    this.term.write(data.content);
                }
            } else {
                alert('未实现的操作' + data.messageType)
            }
        },
        wsconnect(newValue) {
            this.ws.instance = newValue;
        }
    }
});