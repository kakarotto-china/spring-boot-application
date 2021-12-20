<template>
  <el-dialog
      title="新增连接信息"
      :visible.sync="visible"
      width="30%"
      center
      :close-on-click-modal="false"
      @close="close">
    <el-form :model="userSSH" status-icon :rules="rules" ref="userSSHForm" label-width="100px">
      <el-form-item label="别名" prop="name">
        <el-input v-model="userSSH.name"></el-input>
      </el-form-item>
      <el-form-item label="主机" prop="host">
        <el-input v-model="userSSH.host"></el-input>
      </el-form-item>
      <el-form-item label="端口" prop="port">
        <el-input v-model="userSSH.port"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="user">
        <el-input v-model="userSSH.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passwd">
        <el-input type="password" v-model="userSSH.passwd"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="clear">取 消</el-button>
      <el-button type="primary" @click="submit('userSSHForm')">注 册</el-button>
    </span>
  </el-dialog>
</template>

<script>
let validateName = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('别名不能为空'));
  }
  return callback();
}
let validateHost = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('主机不能为空'));
  }
  return callback();
}
let validatePort = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('端口不能为空'));
  }
  return callback();
}
let validateUser = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('用户名不能为空'));
  }
  return callback();
}
let validatePasswd = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('密码不能为空'));
  }
  return callback();
}

module.exports = {
  name: 'newUserSSH',
  data: () => {
    return {
      userSSH: {
        name: '',
        host: '',
        port: 22,
        user: '',
        passwd: '',
      },
      rules: {
        name: [
          {required: true, validator: validateName, trigger: 'blur'}
        ],
        host: [
          {required: true, validator: validateHost, trigger: 'blur'}
        ],
        port: [
          {required: true, validator: validatePort, trigger: 'blur'}
        ],
        user: [
          {required: true, validator: validateUser, trigger: 'blur'}
        ],
        passwd: [
          {required: true, validator: validatePasswd, trigger: 'blur'}
        ]
      }
    }
  },
  props: ['visible'],
  created() {
  },
  destroyed() {
  },
  watch: {},
  methods: {
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          console.log('error submit!!');
          return false;
        }
        // 注册
        this.$http.post(`./user-ssh/new`, this.userSSH).then(success => {
          let body = success.body
          if (body.code !== 2000) {
            alert('注册失败')
            return
          }
          this.clear()
          this.$emit('success')
        }, fail => {
          console.error(fail)
        })
      });
    },
    clear() {
      this.visible = false
      // 清除信息
      this.userSSH = {
        name: '',
        host: '',
        port: 22,
        user: '',
        passwd: '',
      }
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>