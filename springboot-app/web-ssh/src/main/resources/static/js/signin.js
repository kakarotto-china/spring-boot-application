Vue.use(httpVueLoader); // 使用httpVueLoader
Vue.component('web-socket', "url:vue/webSocket.vue")

let validateName = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('用户名不能为空'));
    }
    return callback();
}
let validatePasswd = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('密码不能为空'));
    }
    return callback();
}

let app = new Vue({
    el: '#app',
    data: {
        signinForm: {
            name: '',
            passwd: '',
        },
        rememberme:false,
        rules: {
            name: [
                {validator: validateName, trigger: 'blur'}
            ],
            passwd: [
                {validator: validatePasswd, trigger: 'blur'}
            ]
        },
    },
    methods: {
        submit(formName) {
            this.$refs[formName].validate((valid) => {
                if (!valid) {
                    console.log('error submit!!');
                    return false;
                }
                this.$http.post('../user/signin', this.signinForm).then(
                    success => {
                        let body = success.body
                        if(body.code === 2000){
                            setCookie('jump', JUMP_TYPE.SIGN_IN, 7)
                            if(this.rememberme){
                                setCookie('token', body.data, 7, "/")
                            }else {
                                setCookie('token', body.data, 0, "/")
                            }
                            window.location.href='./jump.html'
                        }else{
                            console.log(body)
                        }
                    }, fail => {
                        console.log(fail)
                    })
            });
        },
        reset(formName) {
            this.$refs[formName].resetFields();
        },
    }
})