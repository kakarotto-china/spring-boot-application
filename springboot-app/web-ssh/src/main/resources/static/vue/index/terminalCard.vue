<template>
  <el-tabs v-model="activeTabName" type="card" closable @tab-remove="removeTab">
    <el-tab-pane
        v-for="(terminal, index) in terminalList"
        :key="terminal.name"
        :label="terminal.title"
        :name="terminal.name"
    >
      <div v-html="terminal.content"></div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>

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