let app = new Vue({
    el: '#app',
    data: {
        jump: NaN,
        delayed: {
            opt: '',
            second: NaN,
            page: '',
            pageName: ''
        },
        verify: {
            opt: '',
            page: '',
            pageName: '',
            email: ''
        }

    },
    created() {
        this.jump = checkAndClearJump()
        switch (this.jump) {
            case JUMP_TYPE.SIGN_UP:
                this.delayedJump('跳转中...', '注册', './signin.html', '登录页', 3)
                break
            case JUMP_TYPE.SIGN_IN:
                this.delayedJump('跳转中...', '登录成功', '../index.html', '首页', 5)
                break
            case JUMP_TYPE.VERIFY:
                this.verifyJump('等待中...', '发送邮件到', './signin.html', '登录页')
                break
            default:
                // throw (`页面加载时，传入不支持的跳转类型${this.jump}`)
        }
    },
    methods: {
        delayedJump(title, opt, page, pageName, second) {
            document.title = title
            this.delayed.opt = opt
            this.delayed.page = page
            this.delayed.second = second
            this.delayed.pageName = pageName
            let interval = setInterval(() => {
                if (this.delayed.second <= 0) {
                    clearInterval(interval)
                    window.location.href = this.delayed.page
                    return
                }
                this.delayed.second--
            }, 1000)
        },
        verifyJump(title, opt, page, pageName) {
            document.title = title
            this.verify.opt = opt
            this.verify.page = page
            this.verify.pageName = pageName
            let uid = getCookieAndClear('temp')
            // 发送邮件请求
            this.$http.post(`../user/verify-producer/${uid}`, {}).then(success => {
                let body = success.body
                if(body.code !== 2000){
                    alert("邮件发送失败")
                    return
                }
                // 发送成功,显示等待验证
                this.showWaitAuth(uid)
            }, fail => {
                console.error(fail)
            })

        },
        showWaitAuth(uid){
            // 显示等待
            let timer = 0
            let interval = setInterval(() => {
                timer++
                // 查询接口
                this.$http.get(`../user/verify-check/${uid}`, {}).then(success => {
                    let body = success.body
                    if(body.code === 2000 && body.data){ // 验证成功
                        clearInterval(interval)
                        window.location.href = this.verify.page
                        return
                    }
                    console.log(body)
                }, fail => {
                    console.error(fail)
                })
                // 30分钟有效
                if(timer >= 1800){
                    alert("验证时间大于30分钟，已失效，请重新注册")
                    clearInterval(interval)
                    window.location.href = './signup.html'
                }
            }, 1000)
        }
    }
})