<template>
  <div>
    <div style="margin: 50px 50px"><h1 style="text-align: center;font-size: 25px">个人信息</h1></div>
    <el-row :gutter="0" justify="center">
      <el-col :span="6">
        <el-form status-icon
                 :model="user"
        >
          <el-form-item label="用户" prop="username" required>
            <el-input v-model="user.username" disabled autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="旧密码" prop="password" required>
            <el-input
                v-model="user.password"
                type="password"
                autocomplete="off"
                show-password
            ></el-input>
          </el-form-item>

          <el-form-item label="新密码" prop="new_password">
            <el-input
                v-model="new_password"
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

        <el-form status-icon
                 :model="company"
        >
          <div v-if="user.yhjb===1">
            <el-form-item label="企业名称" prop="qymc" required>
              <el-input v-model="company.qymc" disabled autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="企业地址" prop="qydz" required>
              <el-input v-model="company.qydz" autocomplete="off"></el-input>
            </el-form-item>
            <el-row :gutter="10">
              <el-col :span="12">
                <el-form-item label="机构代码" prop="jgdm" required>
                  <el-input
                      disabled
                      v-model="company.jgdm"
                      autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="企业性质" prop="qyxz" required>
                  <el-input
                      v-model="company.qyxz"
                      autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="主要业务" prop="zyyw" required>
              <el-input v-model="company.zyyw" autocomplete="off"></el-input>
            </el-form-item>
          </div>

          <div v-else>
            <el-form-item label="企业名称" prop="qymc" required>
              <el-input v-model="company.qymc" disabled autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="企业地址" prop="qydz" required>
              <el-input v-model="company.qydz" disabled autocomplete="off"></el-input>
            </el-form-item>
            <el-row :gutter="10">
              <el-col :span="12">
                <el-form-item label="机构代码" prop="jgdm" required>
                  <el-input
                      v-model="company.jgdm"
                      disabled
                      autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="企业性质" prop="qyxz" required>
                  <el-input
                      v-model="company.qyxz"
                      disabled
                      autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="主要业务" prop="zyyw" required>
              <el-input v-model="company.zyyw" disabled autocomplete="off"></el-input>
            </el-form-item>
          </div>
          <el-form-item>
            <el-button
                type="primary"
                @click="submitForm"
                style="width: 100%;"
            >更新
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
  mounted: function () {
    this.getForm()
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
        xm: '',
        xb: '',
        zw: '',
        dh: '',
        yhjb: 2,
      },
      company: {
        jgdm: '',
        qymc: '',
        qydz: '',
        qyxz: '',
        zyyw: ''
      },
      new_password: ''
    }
  },
  methods: {
    getForm() {
      let that = this
      let sent_data = {'token': this.$store.state.token}
      this.$axios.request({
        url: this.$url + 'get_enter_user_information/',
        method: 'POST',
        data: sent_data,
        responseType: 'json'
      }).then(function (response) {
        that.user = response.data['user']
        that.company = response.data['company']
      })
    },
    submitForm() {
      let that = this
      let sent_data = {'user': this.user, 'company': this.company, 'new_password': this.new_password}
      this.$axios.request({
        url: this.$url + 'update_enter_user_information/',
        method: 'POST',
        data: sent_data,
        responseType: 'json'
      }).then(function (response) {
        let code = response.data['code']
        if (code === 1) {
          alert("修改修改成功！")
          that.getForm()
        } else {
          alert("信息修改失败！")
        }
      })
    }
  },
  components: {}
}
</script>
