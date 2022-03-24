<template>
  <div>
    <div style="margin: 50px 50px"><h1 style="text-align: center;font-size: 25px">个人信息</h1></div>
    <el-row :gutter="0" justify="center">
      <el-col :span="6">
        <el-form
            ref="dataList"
            :model="dataList"
            status-icon
        >
          <el-form-item label="用户" prop="username" required>
            <el-input v-model="dataList.username" autocomplete="off" disabled></el-input>
          </el-form-item>

          <el-form-item label="旧密码" prop="password" required>
            <el-input
                v-model="dataList.password"
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

          <el-form-item label="电话" prop="dh" required>
            <el-input v-model="dataList.dh" autocomplete="off"></el-input>
          </el-form-item>

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
        </el-form>
      </el-col>
      <el-col :span="1"></el-col>

      <el-col :span="10">
        <el-form
            ref="dataList"
            :model="dataList"
            status-icon
        >
          <el-form-item label="自我介绍" prop="zwjs" required>
            <el-input v-model="dataList.zwjs" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作经历" prop="gzjl" required>
            <el-input v-model="dataList.gzjl" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="教育经历" prop="jyjl" required>
            <el-input v-model="dataList.jyjl" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="获奖记录" prop="hjjl" required>
            <el-input v-model="dataList.hjjl" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="特长爱好" prop="ahtc" required>
            <el-input v-model="dataList.ahtc" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="期望薪资" prop="qwxz" required>
            <el-input v-model="dataList.qwxz" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="附加信息" prop="fjxx" required>
            <el-input v-model="dataList.fjxx" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
                type="primary"
                @click="submitForm()"
                style="width: 20%;margin:0 0 0 40%"
            >修改
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
  mounted: function () {
    this.getForm()
  },
  data() {
    return {
      dataList: {
        username: '',
        password: '',
        xm: '', // 姓名
        xb: '', // 性别
        mz: '', // 民族
        jg: '', // 籍贯
        nl: '', // 年龄
        dh: '', // 电话
        xx: '', // 学校
        xl: '', // 学历
        zy: '', // 专业
        zwjs: '',  // 自我介绍
        gzjl: '',  // 工作经历
        jyjl: '',  // 教育经历
        hjjl: '',  // 获奖记录
        ahtc: '',  // 特长爱好
        qwxz: '',  // 期望薪资
        fjxx: '',  // 附加信息
      },
      new_password: '',
    }
  },
  methods: {
    getForm() {
      let that = this
      let sent_data = {'token': this.$store.state.token}
      this.$axios.request({
        url: this.$url + 'get_user_information/',
        method: 'POST',
        data: sent_data,
        responseType: 'json'
      }).then(function (response) {
        that.dataList = response.data
      })
    },
    submitForm() {
      let that = this
      let sent_data = {'dataList': this.dataList, 'new_password': this.new_password}
      this.$axios.request({
        url: this.$url + 'update_user_information/',
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
  }
}
</script>
