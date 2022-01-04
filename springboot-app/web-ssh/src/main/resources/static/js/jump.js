let app = new Vue({
    el: '#app',
    data: {
        result: {
            icon: '',
            title: '',
            subTitle: '',
            link: '',
            desc: ''
        }
    },
    mounted() {
        let outer = this.$refs['outer']
        let inner = this.$refs['inner']
        let innerH = `${parseInt(inner.offsetHeight / 2)}px`
        let innerW = `${parseInt(inner.offsetWidth / 2)}px`
        inner.style.top = `calc(40% - ${innerH})`
        inner.style.left = `calc(50% - ${innerW})`
        outer.style.height = `${window.innerHeight}px`
    },
    created() {
        let jump = checkAndClearJump()
        switch (jump) {
            case JUMP_TYPE.SIGN_UP:
                this.renderHtml('跳转中...', 'success', `注册成功`, `3秒后自动跳转到`, './signin.html', '登录页')
                this.delayedJump('./signin.html', 3)
                break
            case JUMP_TYPE.SIGN_IN:
                this.renderHtml('跳转中...', 'success', `登录成功`, `5秒后自动跳转到`, '../index.html', '首页')
                this.delayedJump('../index.html', 5)
                break
            case JUMP_TYPE.VERIFY:
                this.renderHtml('等待中...', 'warning', `需要进行邮件验证`, '请根据邮件内容进行操作，完成后自动跳转到首页', '', `已经自动发送邮件到：$524519972@qq.com`)
                this.verifyJump('./signin.html')
                break
            default:
                this.renderHtml('错误', 'error', `访问错误`, `页面加载时，传入不支持的跳转类型`, '', jump)
        }
    },
    methods: {
        renderHtml(windowName, icon, title, subTitle, link, desc) {
            document.title = windowName
            this.result = {
                icon: icon,
                title: title,
                subTitle: subTitle,
                link: link,
                desc: desc
            }
        },
        delayedJump(page, second) {
            let interval = setInterval(() => {
                if (second <= 0) {
                    clearInterval(interval)
                    window.location.href = page
                    return
                }
                second--
                this.result.subTitle = `${second}秒后自动跳转到`
            }, 1000)
        },
        verifyJump(page) {
            let uid = getCookieAndClear('temp')
            // 发送邮件请求
            this.$http.post(`../user/verify-producer/${uid}`, {}).then(success => {
                let body = success.body
                if (body.code !== 2000) {
                    this.$message.error(body.message[getLang()]);
                    return
                }
                // 发送成功,显示等待验证
                this.showWaitAuth(uid, page)
            }, fail => {
                console.error(fail)
            })

        },
        showWaitAuth(uid, page) {
            // 显示等待
            let timer = 0
            let interval = setInterval(() => {
                timer++
                // 查询接口
                this.$http.get(`../user/verify-check/${uid}`, {}).then(success => {
                        let body = success.body
                        if (body.code !== 2000) { // 返回失败
                            this.$message.error(body.message[getLang()]);
                            return;
                        }
                        if (body.data) {
                            clearInterval(interval)
                            window.location.href = page
                        }
                    }
                    , fail => {
                        console.error(fail)
                    })
                // 30分钟有效
                if (timer >= 1800) {
                    alert("验证时间大于30分钟，已失效，请重新注册")
                    clearInterval(interval)
                    window.location.href = './signin.html'
                }
            }, 1000)
        }
    }
})

window.onresize = () => {
    app.$refs['outer'].style.height = window.innerHeight + 'px'
}