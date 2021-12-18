let uid = checkSignin('./html/signin.html')

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
        openTerminal(userSSH) {
            setCookie('user_ssh', JSON.stringify(userSSH), 1, '/html')
            window.location.href = `./html/terminal.html`
        },
        signout() {
            clearCookie('token')
            window.location.href = './html/signin.html'
        }
    }
})