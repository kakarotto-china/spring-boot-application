<!--
标签属性：
config [object] 连接配置
  config.url [string] 连接地址
usedwss [boolean] 是否适使用wss协议，默认false

标签方法：
onconnection(event) 打开连接
onopen(event) 连接成功
onerror(event) 连接异常
onmessage(data) 收到消息
onclose(event) 连接关闭
-->
<template>
  <em></em>
</template>
<script>
function sleep (time) {
  console.log(`sleep ${time} ms`)
  return new Promise((resolve) => setTimeout(resolve, time));
}
module.exports = {
  props: ['config', 'usedwss'],
  data() {
    return {
      socket: null,
    }
  },
  created() {
    this.initWebSocket();
  },
  destroyed() {
    this.socket.close() // 离开路由之后断开websocket连接
  },
  watch: {
    "socket":{
      handler(newValue, oldValue) {
        this.$emit('onconnection', newValue, oldValue)
      },
      deep:true,
      immediate: true
    }
  },
  methods: {
    initWebSocket() { // 初始化websocket
      const wsuri = `${this.usedWss ? 'wss://' : 'ws://'}${window.location.host}${this.config.url || this.url || ''}`;
      console.log('开始连接：', wsuri)
      this.socket = new WebSocket(wsuri);
      this.socket.onmessage = this.onmessage;
      this.socket.onopen = this.onopen;
      this.socket.onerror = this.onerror;
      this.socket.onclose = this.onclose;
    },
    onopen(event) { // 连接建立之后执行send方法发送数据
      console.log('连接成功：', event)
      this.$emit('onopen', event.target)
    },
    onerror(event) { // 连接建立失败重连
      console.log('连接错误：', event)
      this.$emit('onerror', event)
    },
    onmessage(event) { // 数据接收
      this.$emit('onmessage', event.data)
    },
    onclose(event) {  // 关闭
      console.log('断开连接，尝试重连...', event);
      this.$emit('onclose', event)
      // sleep 2秒
      sleep(5000).then(()=>{
        this.initWebSocket(event)
      });
    }
  }
}
</script>
<style scoped>
</style>
