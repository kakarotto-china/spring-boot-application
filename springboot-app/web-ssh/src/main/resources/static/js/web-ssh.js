let uid = checkSignin()
let tid = getCookieAndClear('tid')
// 开始加载
Vue.use(httpVueLoader); // 使用httpVueLoader
Vue.component('web-socket', "url:../vue/webSocket.vue")
Vue.component('web-ssh', "url:../vue/webSHH.vue")

let app = new Vue({
    el: '#app',
    data: {
        tid: '',
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
        this.tid = tid
    },
    methods: {
        wsopen(event) {
            let msg = {
                "messageType": MESSAGE_TYPE.CLIENT,
                "info": {"from": "", "to": "", "desc": "初始化"},
                "content": this.tid
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
        },
        terminit(newValue, oldValue) {
            this.term = newValue
        },
        termdata(data) {
            let msg = {
                "messageType": MESSAGE_TYPE.CLIENT,
                "info": {"from": "", "to": "", "desc": "命令"},
                "content": data
            }
            this.ws.instance.send(JSON.stringify(msg))
        }

    }
});