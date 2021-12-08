// Custom theme to match style of xterm.js logo
var baseTheme = {
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
// vscode-snazzy https://github.com/Tyriar/vscode-snazzy
var otherTheme = {
    foreground: '#eff0eb',
    background: '#282a36',
    selection: '#97979b33',
    black: '#282a36',
    brightBlack: '#686868',
    red: '#ff5c57',
    brightRed: '#ff5c57',
    green: '#5af78e',
    brightGreen: '#5af78e',
    yellow: '#f3f99d',
    brightYellow: '#f3f99d',
    blue: '#57c7ff',
    brightBlue: '#57c7ff',
    magenta: '#ff6ac1',
    brightMagenta: '#ff6ac1',
    cyan: '#9aedfe',
    brightCyan: '#9aedfe',
    white: '#f1f1f0',
    brightWhite: '#eff0eb'
};

function runFakeTerminal() {
    if (term._initialized) {
        return;
    }
    term._initialized = true;

    // TODO: Use a nicer default font
    term.writeln([
        '    Xterm.js is the frontend component that powers many terminals including',
        '                           \x1b[3mVS Code\x1b[0m, \x1b[3mHyper\x1b[0m and \x1b[3mTheia\x1b[0m!',
        '',
        ' ┌ \x1b[1mFeatures\x1b[0m ──────────────────────────────────────────────────────────────────┐',
        ' │                                                                            │',
        ' │  \x1b[31;1mApps just work                         \x1b[32mPerformance\x1b[0m                        │',
        ' │   Xterm.js works with most terminal      Xterm.js is fast and includes an  │',
        ' │   apps like bash, vim and tmux           optional \x1b[3mWebGL renderer\x1b[0m           │',
        ' │                                                                            │',
        ' │  \x1b[33;1mAccessible                             \x1b[34mSelf-contained\x1b[0m                     │',
        ' │   A screen reader mode is available      Zero external dependencies        │',
        ' │                                                                            │',
        ' │  \x1b[35;1mUnicode support                        \x1b[36mAnd much more...\x1b[0m                   │',
        ' │   Supports CJK 語 and emoji \u2764\ufe0f            \x1b[3mLinks\x1b[0m, \x1b[3mthemes\x1b[0m, \x1b[3maddons\x1b[0m, \x1b[3mtyped API\x1b[0m  │',
        ' │                                            ^ Try clicking italic text      │',
        ' │                                                                            │',
        ' └────────────────────────────────────────────────────────────────────────────┘',
        ''
    ].join('\n\r'));

    term.writeln('Below is a simple emulated backend, try running `help`.');
}

Vue.use(httpVueLoader); // 使用httpVueLoader
Vue.component('web-socket', "url:vue/webSocket.vue")

let app = new Vue({
    el: '#app',
    data: {
        ws: {
            path: '/webssh',
            instance: null
        },
        online: 0,
        connectInfo: {
            operate: 'connect',
            host: '127.0.0.1',//IP
            port: '22',//端口号
            username: 'pi',//用户名
            password: 'yuehao'//密码
        },
        terminalConfig: {
            cols: 97,
            rows: 37,
            cursorBlink: true, // 光标闪烁
            cursorStyle: "block", // 光标样式  null | 'block' | 'underline' | 'bar'
            scrollback: 800, //回滚
            tabStopWidth: 8, //制表宽度
            screenKeys: true
        },
        term: null
    },
    created() {
        this.term = new window.Terminal({
            fontFamily: '"Cascadia Code", Menlo, monospace',
            theme: baseTheme,
            cursorBlink: true
        });
        let terminalDom = document.querySelector('.terminal')
        this.term.open(terminalDom);

        terminalDom.addEventListener('wheel', e => {
            if (this.term.buffer.active.baseY > 0) {
                e.preventDefault();
            }
        });
        this.term.focus()
    },
    methods: {
        wsopen(event) {
            var isWebglEnabled = false;
            var isAttachEnabled = false;
            try {
                const attachAddon = new AttachAddon.AttachAddon(this.ws.instance);
                this.term.loadAddon(attachAddon);

                isAttachEnabled = true;
            } catch (e) {
                console.warn('Attach addon threw an exception during load', e);
            }
            try {
                const webglAddon = new WebglAddon.WebglAddon();
                this.term.loadAddon(webglAddon);
                isWebglEnabled = true;
            } catch (e) {
                console.warn('WebGL addon threw an exception during load', e);
            }
        },
        wsmessage(event) {
        },
        wsconnect(newValue) {
            this.ws.instance = newValue;
        }
    }
});


