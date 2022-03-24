<template>
  <div>
    <div style="margin: 20px 20px 20px 20px"></div>
    <el-button style="margin: 0 0 0 30px" @click="select(1)">账号审核</el-button>
    <el-button @click="select(2)">账号冻结</el-button>
    <el-button @click="select(3)">账号解冻</el-button>
    <div style="margin: 30px 30px 30px 30px"></div>
    <el-divider></el-divider>

    <div v-if="show_type===1">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="zcsj" label="注册时间" width="170"/>
        <el-table-column prop="username" label="用户名" width="120"/>
        <el-table-column prop="xm" label="注册人姓名" width="120"/>
        <el-table-column prop="dh" label="联系电话" width="170"/>
        <el-table-column prop="qymc" label="企业名称" width="200"/>
        <el-table-column prop="jgdm" label="机构代码" width="120"/>
        <el-table-column prop="qydz" label="企业地址" width="230"/>
        <el-table-column prop="qyxz" label="企业类型" width="120"/>
        <el-table-column prop="zyyw" label="主要业务" width="120"/>
        <el-table-column fixed="right" label="操作" width="240">
          <template #default="scope">
            <el-button type="success" size="small" @click="send(scope.$index,1)">同意</el-button>
            <el-button type="danger" size="small" @click="send(scope.$index,0)">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-else-if="show_type===2">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="zcsj" label="注册时间" width="250"/>
        <el-table-column prop="yhlx" label="用户类型" width="270"/>
        <el-table-column prop="username" label="用户名" width="170"/>
        <el-table-column prop="xm" label="注册人姓名" width="220"/>
        <el-table-column prop="xb" label="性别" width="120"/>
        <el-table-column prop="dh" label="联系电话" width="220"/>
        <el-table-column fixed="right" label="操作" width="140">
          <template #default="scope">
            <el-button type="danger" size="small" @click="send(scope.$index,-1)">冻结</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-else>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="zcsj" label="注册时间" width="250"/>
        <el-table-column prop="yhlx" label="用户类型" width="270"/>
        <el-table-column prop="username" label="用户名" width="170"/>
        <el-table-column prop="xm" label="注册人姓名" width="220"/>
        <el-table-column prop="xb" label="性别" width="120"/>
        <el-table-column prop="dh" label="联系电话" width="220"/>
        <el-table-column fixed="right" label="操作" width="140">
          <template #default="scope">
            <el-button type="success" size="small" @click="send(scope.$index,1)">解冻</el-button>
            <el-button type="danger" size="small" @click="send(scope.$index,0)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin: 60px 60px"></div>
  </div>
</template>

<script>
export default {
  name: " UserValidate",
  mounted() {
    this.getForm()
  },
  data() {
    return {
      show_type: 1,
      tableData: []
    }
  },
  methods: {
    getForm() {
      let that = this
      let sent_data = {'token': this.$store.state.token}
      let suffix = ''
      if (this.show_type === 1)
        suffix = 'get_company_user_validate/'
      else if (this.show_type === 2)
        suffix = 'get_all_user_normal/'
      else
        suffix = 'get_all_user_freeze/'
      this.$axios.request({
        url: this.$url + suffix,
        method: 'POST',
        data: sent_data,
        responseType: 'json'
      }).then(function (response) {
        that.tableData = response.data
      })
    },
    send(inx, type) {
      let that = this
      let name = this.tableData[inx].username
      let sent_data = {'token': this.$store.state.token, 'username': name, 'type': type}
      this.$axios.request({
        url: this.$url + 'update_state/',
        method: 'POST',
        data: sent_data,
        responseType: 'json'
      }).then(function (response) {
        let code = response.data['code']
        if (code === 1) {
          alert("操作成功！")
        } else {
          alert("操作失败！")
        }
        that.getForm()
      })
    },
    select(inx) {
      this.show_type = inx
      this.getForm()
    }
  }
}
</script>

<style scoped>

</style>