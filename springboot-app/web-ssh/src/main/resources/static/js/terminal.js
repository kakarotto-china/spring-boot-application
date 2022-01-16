// 开始加载
Vue.use(httpVueLoader); // 使用httpVueLoader

let app = new Vue({
    el: '#app',
    data: {
        uid:'',
        userSSH: {
            id:'',
            user:'',
            host:'',
        },
        ws: {
            url: '',
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
    created() { // 初始化data中变量
        this.uid = checkSignin('../html/signin.html')
        let userSSH = getCookieAndClear('user_ssh')
        if (userSSH) {
            this.userSSH = JSON.parse(userSSH)
            this.ws.url = `ws://127.0.0.1:5555/webssh/${this.userSSH.id}`
            document.title = `${this.userSSH.user}@${this.userSSH.host}`
        } else {
            document.title = '页面错误'
        }
    },
    methods: {
        oninit(newValue, oldValue) {
            this.term.instances = newValue
            this.term.instances.write('连接中...\r\n')
        },
    }
});