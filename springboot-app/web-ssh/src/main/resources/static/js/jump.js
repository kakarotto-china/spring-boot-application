let jump = checkJump()
if (!jump) {
    throw `页面加载时，传入不支持的跳转类型${jump}`
}

let app = new Vue({
    el: '#app',
    data: {
        opt: '',
        second: 0,
        page: '',
        pageName: ''
    },
    created() {
        switch (parseInt(jump)) {
            case JUMP_TYPE.SIGN_UP:
                this.initParam('跳转中...', '注册', './signin.html', '登录页', 3)
                break
            case JUMP_TYPE.SIGN_IN:
                this.initParam('跳转中...', '登录', '../index.html', '首页', 1000)
                break
        }
        let interval = setInterval(() => {
            if (this.second <= 0) {
                window.location.href = this.page
                clearInterval(interval)
                return
            }
            this.second--
        }, 1000)
    },
    methods: {
        initParam(title, opt, page, pageName, second) {
            document.title =  title
            this.opt = opt
            this.page = page
            this.second = second
            this.pageName = pageName
        }
    }
})