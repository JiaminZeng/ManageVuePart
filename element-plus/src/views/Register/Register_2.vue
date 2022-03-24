<template>
  <div>
    <div style="margin: 50px 50px"><h1 style="text-align: center;font-size: 25px">企业普通用户注册</h1></div>
    <el-row :gutter="0" justify="center">
      <el-col :span="6">
        <el-form
            :model="user"
            status-icon
        >
          <el-form-item label="用户" prop="username" required>
            <el-input v-model="user.username" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password" required>
            <el-input
                v-model="user.password"
                type="password"
                autocomplete="off"
                show-password
            ></el-input>
          </el-form-item>

          <el-row :gutter="40">
            <el-col :span="12">
              <el-form-item label="姓名" prop="xm" required>
                <el-input
                    v-model="user.xm"
                    autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="性别" prop="xb" required>
                <el-input
                    v-model="user.xb"
                    autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="40">
            <el-col :span="12">
              <el-form-item label="电话" prop="dh" required>
                <el-input
                    v-model="user.dh"
                    autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="职位" prop="zw" required>
                <el-input
                    v-model="user.zw"
                    autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

        <el-form
            :model="company"
            status-icon
        >
          <el-form-item label="所在企业名称" prop="qymc" required>
            <el-input v-model="company.qymc" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所在企业代码" prop="jgdm" required>
            <el-input v-model="company.jgdm" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
                type="primary"
                @click="DoRegister"
                style="width: 100%;"
            >注册
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <div style="margin: 40px 0"></div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
        xm: '',
        xb: '',
        zw: '',
        dh: '',
      },
      company: {
        jgdm: '',
        qymc: ''
      }
    }
  },
  methods: {
    DoRegister() {
      let that = this

      let sent_data = {'user': this.user, 'jgdm': this.company.jgdm, 'qymc': this.company.qymc}
      this.$axios.request({
        url: this.$url + 'register_c1/',
        method: 'POST',
        data: sent_data,
        responseType: 'json'
      }).then(function (response) {
        let code = response.data['code']
        if (code === -1) {
          alert("用户已存在，注册失败！")
          return
        } else if (code === 0) {
          alert("公司不存在！")
          return
        }
        alert("注册请求成功，待公司管理员审核！")
        that.$router.push({name: 'Login'})
      })
    }
  },
  components: {}
}
</script>
