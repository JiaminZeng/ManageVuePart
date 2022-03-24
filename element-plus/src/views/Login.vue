<template>
  <el-div>
    <div style="margin: 100px 120px"><h1 style="text-align: center;font-size: 50px">用户登录</h1></div>
    <el-row :gutter="0" justify="center">
      <el-col :span="6">
        <el-form
            ref="loginForm"
            :model="loginForm"
            status-icon
            :rules="rules"
            label-width="60px"
            style="width: 300px;"
        >
          <el-form-item label="用户" prop="user_name" required>
            <el-input v-model="loginForm.user_name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="user_password" required>
            <el-input
                v-model="loginForm.user_password"
                type="password"
                autocomplete="off"
                show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
                type="primary"
                @click="submitForm('loginForm')"
                style="width: 100%;"
            >登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <div style="margin: 200px 0"></div>
  </el-div>
</template>

<script>


export default {

  data() {
    return {
      loginForm: {
        user_name: '',
        user_password: ''
      },
      rules: {
        user_name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        user_password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      },
    }
  },
  methods: {
    submitForm() {
      let that = this
      this.$axios.request({
        url: this.$url + 'login/',
        method: 'POST',
        data: this.loginForm,
        responseType: 'json'
      }).then(function (response) {
        let type = response.data['type']
        if (type === -1) {
          alert("用户名不存在或密码错误，登录失败！")
        } else {
          that.$store.commit('login', response.data)
          console.log(response.data)
          console.log(that.$store.state)
          if (type === 1)
            that.$router.replace({name: 'JobInfor'})
          else if (type === 2)
            that.$router.replace({name: 'Recruitment'})
          else if (type === 3)
            that.$router.replace({name: 'UserManagement'})
        }
      })
    },
  },
  components: {}
}
</script>
