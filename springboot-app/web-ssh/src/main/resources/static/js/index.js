let uid = checkSignin('./html/signin.html')

// 开始加载
Vue.use(httpVueLoader); // 使用httpVueLoader
Vue.component('terminals', "url:./vue/index/terminals.vue")
Vue.component('new-user-ssh', "url:./vue/index/newUserSSH.vue")
Vue.component('edit-user-ssh', "url:./vue/index/editUserSSH.vue")

Vue.http.headers.common['token'] = getCookie('token')

let app = new Vue({
    el: '#app',
    data: {
        uid: '',
        userSSHList: [],
        terminalTabList: [],
        showEditUserSSH: false,
        showNewUserSSH: false,
        editInfo: {}
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
        openUserSSH(userSSH) {
            setCookie('user_ssh', JSON.stringify(userSSH), 1, '/html')
            window.open(`./html/terminal.html`)
        },
        signout() {
            clearCookie('token')
            window.location.href = './html/signin.html'
        },
        showNewDialog() {
            this.showNewUserSSH = true
        },
        newUserSSH(userSSH) {
            // 注册
            this.$http.post(`./user-ssh/new`, userSSH).then(success => {
                let body = success.body
                if (body.code !== 2000) {
                    alert('注册失败')
                    return
                }
                this.$refs['newUserSSH'].clear()
                this.findAllUserSSH()
            }, fail => {
                console.error(fail)
            })
        },
        showEditDialog(id) {
            // 查询详情
            this.$http.get(`./user-ssh/detail/${id}`).then(success => {
                let body = success.body
                if (body.code === 2000) {
                    this.showEditUserSSH = true
                    this.$refs['editUserSSH'].initUserSSH(body.data)
                    return
                }
                console.log(body)
            }, fail => {
                console.error(fail)
            })
        },
        editUserSSH(userSSH, callback) {
            // 修改
            this.$http.put(`./user-ssh/edit`, userSSH).then(success => {
                let body = success.body
                if (body.code !== 2000) {
                    alert('修改失败')
                    return
                }
                this.findAllUserSSH()
                callback()
            }, fail => {
                console.error(fail)
            })
        },
        test(userSSH, callback) {
            this.$http.post(`./user-ssh/test`, userSSH).then(success => {
                let body = success.body
                if (body.code === 2000) {
                    callback('测试连接成功')
                    return
                }
                console.log(body)
                callback('测试连接失败')
            }, fail => {
                console.error(fail)
                callback('测试连接失败')
            })
        },
        delUserSSH(id) {
            this.$http.delete(`./user-ssh/${id}`).then(success => {
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