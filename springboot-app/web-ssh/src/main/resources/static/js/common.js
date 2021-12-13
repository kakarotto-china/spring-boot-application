const MESSAGE_TYPE = {
    CLIENT: 'CLIENT',

}

const JUMP_TYPE = {
    SIGN_UP: 1,
    VERIFY: 2,
    SIGN_IN:3
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

// 清除cookie
const clearCookie = (name, path) => {
    setCookie(name, "", -1, path);
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

const getCookieAndClear = (cname, clearPath) => {
    let sshId = getCookie(cname)
    clearCookie(cname, clearPath)
    return sshId
}

const checkSignin = () => {
    let request = new XMLHttpRequest()
    request.open('GET', '../user/signin-check', false) // 第三个参数 false 代表设置同步请求
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('token', getCookie('token'));
    request.send()
    switch (request.status){
        case 401:
            window.location.href = './html/signin.html'
            break
        case 200:
            let body = JSON.parse(request.response)
            if (body.code === 2000) {
                return body.data // uid
            }
            console.log(body)
            break
        default:
            console.error(request)
    }
}

const checkJump = () => {
    let jump = parseInt(getCookie('jump'))
    for (k in JUMP_TYPE) {
        if (jump === JUMP_TYPE[k]) {
            return jump
        }
    }
    return NaN
}