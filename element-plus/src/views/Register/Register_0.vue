<template>
  <div>
    <div style="margin: 50px 50px"><h1 style="text-align: center;font-size: 25px">求职用户注册</h1></div>
    <el-row :gutter="0" justify="center">
      <el-col :span="6">
        <el-form
            ref="dataList"
            :model="dataList"
            status-icon
        >
          <el-form-item label="用户" prop="username" required>
            <el-input v-model="dataList.username" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password" required>
            <el-input
                v-model="dataList.password"
                type="password"
                autocomplete="off"
                show-password
            ></el-input>
          </el-form-item>

          <el-row :gutter="40">
            <el-col :span="12">
              <el-form-item label="姓名" prop="xm" required>
                <el-input
                    v-model="dataList.xm"
                    autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="性别" prop="xb" required>
                <el-input
                    v-model="dataList.xb"
                    autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="40">
            <el-col :span="12">
              <el-form-item label="民族" prop="mz" required>
                <el-input
                    v-model="dataList.mz"
                    autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="籍贯" prop="jg" required>
                <el-input
                    v-model="dataList.jg"
                    autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="电话" prop="dh" required>
            <el-input v-model="dataList.dh" autocomplete="off"></el-input>
          </el-form-item>

          <el-row :gutter="40">
            <el-col :span="12">
              <el-form-item label="年龄" prop="nl" required>
                <el-input
                    v-model="dataList.nl"
                    autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="学历" prop="xl" required>
                <el-input
                    v-model="dataList.xl"
                    autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="40">
            <el-col :span="12">
              <el-form-item label="学校" prop="xx" required>
                <el-input
                    v-model="dataList.xx"
                    autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="专业" prop="zy" required>
                <el-input
                    v-model="dataList.zy"
                    autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>


          <el-form-item>
            <el-button
                type="primary"
                style="width: 100%;"
                @click="DoRegister"
            >注册
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <div style="margin: 130px 0"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: {
        username: '', // 用户名
        password: '', // 密码
        xm: '', // 姓名
        xb: '', // 性别
        jg: '', // 籍贯
        mz: '', // 民族
        nl: '', // 年龄
        dh: '', // 电话
        xx: '', // 学校
        xl: '', // 学历
        zy: '', // 专业
      }
    }
  },
  methods: {
    DoRegister() {
      let that = this
      this.$axios.request({
        url: this.$url + 'register/',
        method: 'POST',
        data: this.dataList,
        responseType: 'json'
      }).then(function (response) {
        let code = response.data['code']
        if (code === -1) {
          alert("用户已存在，注册失败！")
          return
        }
        alert("注册成功！")
        that.$router.push({name: 'Login'})
      })
    }
  }
}
</script>
