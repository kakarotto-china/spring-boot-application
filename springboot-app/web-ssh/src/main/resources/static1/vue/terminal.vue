<template>
  <em></em>
</template>

<script>
module.exports = {
  name: 'terminal',
  data: () => {
    return {
      term: {},
    }
  },
  props: ['config'],
  created() {
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
      this.term.onData(data => {
        // 键盘输入时的回调函数
        this.$emit('ondata', data)
      });
      this.term.open(document.querySelector('.terminal')); // 参数1，指定显示的dom元素，可为空
      // var isAttachEnabled = false;
      // try {
      //     const attachAddon = new AttachAddon.AttachAddon(this.ws.instance);
      //     this.term.loadAddon(attachAddon);
      //     isAttachEnabled = true;
      // } catch (e) {
      //     console.warn('Attach addon threw an exception during load', e);
      // }
      var isWebglEnabled = false;
      try {
        const webglAddon = new WebglAddon.WebglAddon();
        this.term.loadAddon(webglAddon);
        isWebglEnabled = true;
      } catch (e) {
        console.warn('WebGL addon threw an exception during load', e);
      }

      var isFitEnabled = false;
      try {
        const fitAddon = new FitAddon.FitAddon();
        this.term.loadAddon(fitAddon);
        isFitEnabled = true;
        fitAddon.fit()
      } catch (e) {
        console.warn('Fit addon threw an exception during load', e);
      }

      this.term.focus()
    },
  }
}
</script>

<style scoped>

</style>