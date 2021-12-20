<template>
  <el-tabs v-model="activeTabName" type="card" closable @tab-remove="removeTab">
    <el-tab-pane
        v-for="(terminal, index) in terminalList"
        :key="index"
        :label="terminal.title"
        :name="index"
    >
     <div :class="'terminal-' + index">
       <web-socket :path="terminal.ws.path" @onopen="terminal.wsopen" @onmessage="terminal.wsmessage"
                   @onconect="terminal.wsconnect"></web-socket>
       <terminal :index="index" :config="terminal.term.config" @oninit="terminal.oninit" @ondata="terminal.ondata"></terminal>
     </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
Vue.component('web-socket', "url:../webSocket.vue")
Vue.component('terminal', "url:../terminal.vue")
module.exports = {
  name: 'terminalCard',
  data: () => {
    return {
      activeTabName: '',
      terminalList: [],
      tabIndex: 0
    }
  },
  props: [],
  created() {

  },
  destroyed() {

  },
  watch: {
  },
  methods: {
    addTab(terminal) {
      console.log(terminal)
      console.log(this.terminalList)
      console.log( terminal.index)
      terminal.index = this.index
      this.index++
      this.terminalList.push(terminal);
      this.activeTabName = terminal.name;
    },
    removeTab(targetName) {
      let tabs = this.terminalList;
      let activeName = this.activeTabName;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.activeTabName = activeName;
      this.terminalList = tabs.filter(tab => tab.name !== targetName);
    }
  }
}
</script>

<style scoped>

</style>