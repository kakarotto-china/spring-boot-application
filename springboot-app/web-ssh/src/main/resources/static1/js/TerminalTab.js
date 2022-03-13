class TerminalTab {
    constructor(userSSH) {
        this.name = `${userSSH.id}`
        this.title = `${userSSH.name}(${userSSH.user}@${userSSH.host})`
        this.sshId = userSSH.id
        this.index = 0
        this.ws = {
            path: '/webssh',
            instances: null
        }
        this.term = {
            config: {
                screenKeys: true,
                cursorBlink: true, // 光标闪烁
                cursorStyle: "block", // 光标样式  null | 'block' | 'underline' | 'bar'
                fontFamily: '"Cascadia Code", Menlo, monospace',
                theme: TERMINAL_BASE_THEME
            },
            instances: null
        }

    }
    wsopen = (event) => {
        let msg = {
            "messageType": MESSAGE_TYPE.CLIENT,
            "info": {"from": "", "to": "", "desc": "初始化"},
            "content": this.sshId
        }
        event.target.send(JSON.stringify(msg))
    }
    wsmessage = (event) => {
        console.log(event.data)
        let data = JSON.parse(event.data)
        if (data.messageType === 'SERVER') {
            if (data.info.desc === '在线数') {
                console.log(data.content)
            } else if (data.info.desc === '终端') {
                this.term.instances.write(data.content);
            }
        } else {
            alert('未实现的操作' + data.messageType)
        }
    }
    wsconnect = (newValue) => {
        this.ws.instances = newValue;
    }
    oninit = (newValue, oldValue) => {
        this.term.instances = newValue
        this.term.instances.write('连接中...\r\n')
    }
    ondata = (data) => {
        let msg = {
            "messageType": MESSAGE_TYPE.CLIENT,
            "info": {"from": "", "to": "", "desc": "命令"},
            "content": data
        }
        this.ws.instances.send(JSON.stringify(msg))
    }
}