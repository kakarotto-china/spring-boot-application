<template>
    <em></em>
</template>

<script>
    const sleep = function (seconds) {
        console.log(`sleep ${seconds}s`)
        return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
    }
    module.exports = {
        name: "webSocket",
        data: () => {
            return {
                ws: null
            }
        },
        props: ['host', 'path', 'safe', 'closeLog'],
        created() {
            console.log(`host:${this.host}, path:${this.path}, safe:${this.safe}, closeLog:${this.closeLog}`)
            this.init()
        },
        destroyed() {
            this.ws.close();
        },
        watch: {
            "ws": {
                handler(newValue, oldValue) {
                    this.$emit('onconect', newValue)
                },
                deep: true,
                immediate: true
            }
        },
        methods: {
            init() {
                this.ws = new WebSocket(`${this.safe ? 'wss://' : 'ws://'}${this.host || window.location.host}${this.path || '/'}`);
                this.ws.onopen = this.onopen;
                this.ws.onclose = this.onclose;
                this.ws.onerror = this.onerror;
                this.ws.onmessage = this.onmessage;
            },
            onopen(event) {
                this.log('ws连接开启')
                this.$emit('onopen', event)
            },
            onclose(event) {
                this.log('ws连接关闭, 尝试重连...')
                this.$emit('onclose', event)
                sleep(3).then(() => {
                    this.init();
                })
            },
            onerror(event) {
                this.log('ws连接错误:', event)
                this.$emit('onerror', event)
            },
            onmessage(event) {
                this.$emit('onmessage', event)
            },
            log(message, event) {
                if (!this.closeLog) {
                    if (event) {
                        console.log(`${message}:`, event)
                    } else {
                        console.log(`${message}`)
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>