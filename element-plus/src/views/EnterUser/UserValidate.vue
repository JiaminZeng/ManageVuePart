<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="zcsj" label="注册时间" width="250"/>
    <el-table-column prop="username" label="用户名" width="270"/>
    <el-table-column prop="xm" label="注册人姓名" width="220"/>
    <el-table-column prop="dh" label="联系电话" width="220"/>
    <el-table-column prop="zw" label="职位" width="170"/>
    <el-table-column fixed="right" label="操作" width="220">
      <template #default="scope">
        <el-button type="success" size="small" @click="send(scope.$index,1)">同意</el-button>
        <el-button type="danger" size="small" @click="send(scope.$index,0)">拒绝</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: " UserValidate",
  mounted() {
    this.getForm()
  },
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    getForm() {
      let that = this
      let sent_data = {'token': this.$store.state.token}
      this.$axios.request({
        url: this.$url + 'get_enter_user_validate/',
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
  }
}
</script>

<style scoped>

</style>