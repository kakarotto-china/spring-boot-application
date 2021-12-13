<template>
  <em></em>
</template>

<script>
module.exports = {
  name: 'webSHH',
  data: () => {
    return {
      term: {},
    }
  },
  props: ['config'],
  created() {
    console.log(`config:${this.config}`)
    this.init()
  },
  destroyed() {
    this.term.clear();
  },
  watch: {
    term(newValue, oldValue){
      this.$emit('oninit', newValue, oldValue)
    }
  },
  methods: {
    init() {
      this.term = new Terminal(this.config);
      this.term.on('data', data => {
        // 键盘输入时的回调函数
        this.$emit('ondata', data)
      });
      this.term.open(document.querySelector('.terminal')); // 参数1，指定显示的dom元素，可为空
      //在页面上显示连接中...
      this.term.write('Connecting...');
    },
    log(message, event) {
      if (this.closeLog) {
        return
      }
      if (event) {
        console.log(`${message}:`, event)
      } else {
        console.log(`${message}`)
      }
    }
  }
}
</script>

<style scoped>

</style>