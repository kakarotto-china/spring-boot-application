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
    if (app.signupForm.passwd1 !== '') {
        app.$refs.signupForm.validateField('passwd1');
    }
    return callback();
}
let validatePasswd1 = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('请再次输入密码'));
    }
    if (value !== app.signupForm.passwd) {
        return callback(new Error('两次输入密码不一致!'));
    }
    return callback();
}
let validateNickname = (rule, value, callback) => {
    if (value === '') {
        return callback(new Error('昵称不能为空'));
    }
    return callback();
}
let validateEmail = (rule, value, callback) => {
    if (value === '') {
        return callback(new Error('邮箱不能为空'));
    }
    return callback();
}

let app = new Vue({
    el: '#app',
    data: {
        signupForm: {
            name: '',
            nickname: '',
            passwd: '',
            passwd1: '',
            email: ''
        },
        rules: {
            name: [
                {required: true, validator: validateName, trigger: 'blur'}
            ],
            email: [
                {required: true, validator: validateEmail, trigger: 'blur'}
            ],
            passwd: [
                {required: true, validator: validatePasswd, trigger: 'blur'}
            ],
            passwd1: [
                {required: true, validator: validatePasswd1, trigger: 'blur'}
            ],
            nickname: [
                {required: true, validator: validateNickname, trigger: 'blur'}
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
                this.$http.post('../user/signup', this.signupForm).then(
                    success => {
                        let body = success.body
                        if(body.code === 2000){
                            setCookie('jump', JUMP_TYPE.SIGN_UP, 7)
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