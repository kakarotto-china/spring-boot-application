const MESSAGE_TYPE = {
    CLIENT: 'CLIENT',

}

const JUMP_TYPE = {
    SIGN_UP: 1,
    SIGN_IN: 2
}

const setCookie = (cname, cvalue, exdays, path) => {
    if (exdays > 0) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toGMTString();
        cvalue += "; " + expires;
    }
    if (path) {
        cvalue += "; path=" + path
    }
    document.cookie = cname + "=" + cvalue
}

const getCookie = (cname) => {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}

const checkSignin = () => {
    // Vue.http.headers.common['token'] = getCookie('token')
    // await Vue.http.get('../user/check-signin').then(
    //     success => {
    //         let body = success.body
    //         if (body.code !== 2000) {
    //             console.log(body)
    //             window.location.href = './html/signin.html'
    //         }
    //     }, fail => {
    //         console.error(fail)
    //     })
    let request = new XMLHttpRequest()
    request.open('GET', '../user/check-signin', false) // 第三个参数 false 代表设置同步请求
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('token', getCookie('token'));
    request.send()
    if (request.status === 200) {
        let body = JSON.parse(request.response)
        if (body.code !== 2000) {
            console.log(body)
            window.location.href = './html/signin.html'
        }
    } else {
        console.error(request)
    }
}

const checkJump = () => {
    let jump = parseInt(getCookie('jump'))
    for(k in JUMP_TYPE){
        if(jump === JUMP_TYPE[k]){
            return jump
        }
    }
    let message = `页面加载时，传入不支持的跳转类型${jump}`
    alert(message)
    return NaN
}