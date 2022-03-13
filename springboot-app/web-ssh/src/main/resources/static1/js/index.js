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
                this.$message.error(body.message[getLang()]);
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
            // 新建
            this.$http.post(`./user-ssh/new`, userSSH).then(success => {
                let body = success.body
                if (body.code !== 2000) {
                    this.$message.error(body.message[getLang()]);
                    return
                }
                this.$refs['newUserSSH'].clear()
                this.findAllUserSSH()
                this.$message.success(body.message[getLang()]);
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
                this.$message.error(body.message[getLang()]);
            }, fail => {
                console.error(fail)
            })
        },
        editUserSSH(userSSH, callback) {
            // 修改
            this.$http.put(`./user-ssh/edit`, userSSH).then(success => {
                let body = success.body
                if (body.code !== 2000) {
                    this.$message.error(body.message[getLang()]);
                    return
                }
                this.findAllUserSSH()
                callback()
                this.$message.success(body.message[getLang()]);
            }, fail => {
                console.error(fail)
            })
        },
        test(userSSH, callback) {
            this.$http.post(`./user-ssh/test`, userSSH).then(success => {
                let body = success.body
                if (body.code === 2000) {
                    callback('<span style="color: #00d75f; margin-left: 0">测试连接成功</span>')
                    return
                }
                console.log(body)
                callback('<span style="color: red; margin-left: 0">测试连接失败</span>')
            }, fail => {
                console.error(fail)
                callback('<span style="color: red; margin-left: 0">测试连接失败</span>')
            })
        },
        delUserSSH(id) {
            this.$http.delete(`./user-ssh/${id}`).then(success => {
                let body = success.body
                if (body.code === 2000) {
                    // 删除成功
                    this.findAllUserSSH()
                    this.$message.success(body.message[getLang()]);
                    return
                }
                this.$message.error(body.message[getLang()]);
            }, fail => {
                console.error(fail)
            })
        }
    }
})