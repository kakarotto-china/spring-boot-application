const MESSAGE_TYPE = {
    CLIENT: 'CLIENT',

}

const JUMP_TYPE = {
    SIGN_UP: 1,
    VERIFY: 2,
    SIGN_IN:3
}

const getLang = ()=>{
    return navigator.language === 'zh-CN' ? 'cn' : 'en';
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

const checkSignin = (redrict) => {
    let request = new XMLHttpRequest()
    request.open('GET', '../user/signin-check', false) // 第三个参数 false 代表设置同步请求
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('token', getCookie('token'));
    request.send()
    switch (request.status){
        case 401:
            window.location.href = redrict
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

const checkAndClearJump = () => {
    let jump = parseInt(getCookieAndClear('jump'))
    for (k in JUMP_TYPE) {
        if (jump === JUMP_TYPE[k]) {
            return jump
        }
    }
    return NaN
}


const TERMINAL_BASE_THEME = {
    foreground: '#F8F8F8',
    background: '#2D2E2C',
    selection: '#5DA5D533',
    black: '#1E1E1D',
    brightBlack: '#262625',
    red: '#CE5C5C',
    brightRed: '#FF7272',
    green: '#5BCC5B',
    brightGreen: '#72FF72',
    yellow: '#CCCC5B',
    brightYellow: '#FFFF72',
    blue: '#5D5DD3',
    brightBlue: '#7279FF',
    magenta: '#BC5ED1',
    brightMagenta: '#E572FF',
    cyan: '#5DA5D5',
    brightCyan: '#72F0FF',
    white: '#F8F8F8',
    brightWhite: '#FFFFFF'
};