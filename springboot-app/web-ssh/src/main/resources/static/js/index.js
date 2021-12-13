let uid = checkSignin()

let app = new Vue({
    el: '#app',
    data: {
        uid: '',
        userSSHList: []
    },
    created() {
        this.uid = uid
        this.findALLUserSSH()
    },
    methods: {
        findALLUserSSH() {
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
        openTerminal(id) {
            setCookie('tid', id, 1, '/html')
            window.location.href = `./html/webssh.html`
        },
        signout() {
            clearCookie('token')
            window.location.href = './html/signin.html'
        }
    }
})