const MESSAGE_TYPE = {
    CLIENT: 'CLIENT',

}

const JUMP_TYPE = {
    SIGN_UP: 1,
    SIGN_IN: 2
}

const setCookie = (cname, cvalue, exdays, path) => {
    if(exdays > 0){
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toGMTString();
        cvalue += "; " + expires;
    }
    if(path){
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