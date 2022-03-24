<template>
  <div>
    <div style="margin: 20px 20px 20px 20px"></div>
    <el-button style="margin: 0 0 0 30px" @click="inx_1">兼职信息冻结</el-button>
    <el-button @click="inx_2">兼职信息解冻</el-button>
    <div style="margin: 30px 30px 30px 30px"></div>
    <el-divider></el-divider>

    <div v-if="show_type===1">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="fbsj" label="发布时间" width="150"/>
        <el-table-column prop="zwlb" label="职位类别" width="120"/>
        <el-table-column prop="zwmc" label="职位名称" width="100"/>
        <el-table-column prop="nr" label="职位内容" width="100"/>
        <el-table-column prop="xz" label="薪资" width="100"/>
        <el-table-column prop="gzdz" label="工作地址" width="100"/>
        <el-table-column prop="nr" label="内容" width="100"/>
        <el-table-column prop="qtxx" label="其它信息" width="100"/>
        <el-table-column prop="fbz" label="发布者" width="100"/>
        <el-table-column prop="fbzyhm" label="发布者用户名" width="100"/>
        <el-table-column prop="jgdm" label="发布者机构代码" width="100"/>
        <el-table-column prop="lxdh" label="联系电话" width="100"/>
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <el-button type="text" size="small" @click="send(scope.$index,4)">冻结</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-else-if="show_type===0">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="fbsj" label="发布时间" width="150"/>
        <el-table-column prop="zwlb" label="职位类别" width="120"/>
        <el-table-column prop="zwmc" label="职位名称" width="100"/>
        <el-table-column prop="nr" label="职位内容" width="100"/>
        <el-table-column prop="xz" label="薪资" width="100"/>
        <el-table-column prop="gzdz" label="工作地址" width="100"/>
        <el-table-column prop="nr" label="内容" width="100"/>
        <el-table-column prop="qtxx" label="其它信息" width="100"/>
        <el-table-column prop="fbz" label="发布者" width="100"/>
        <el-table-column prop="fbzyhm" label="发布者用户名" width="140"/>
        <el-table-column prop="jgdm" label="机构代码" width="100"/>
        <el-table-column prop="lxdh" label="联系电话" width="100"/>
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <el-button type="text" size="small" @click="send(scope.$index,5)">解冻</el-button>
            <el-button type="text" size="small" @click="send(scope.$index,0)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin: 60px 60px"></div>
  </div>
</template>

<script>
export default {
  name: "UserManage",
  mounted: function () {
    this.getForm()
  },
  data() {
    return {
      show_type: 1,
      tableData: [],
    }
  },
  methods: {
    inx_1() {
      this.show_type = 1
      this.getForm()
    },
    inx_2() {
      this.show_type = 0
      this.getForm()
    },

    getForm() {
      let that = this
      this.$axios.request({
        url: this.$url + 'get_job/',
        method: 'POST',
        data: {type: this.show_type},
        responseType: 'json'
      }).then(function (response) {
        that.tableData = response.data
      })
    },
    send(inx, type) {
      let that = this
      let sent_data = {}
      sent_data = {'token': this.$store.state.token, 'type': type, 'id': this.tableData[inx]['id']}
      this.$axios.request({
        url: this.$url + 'update_job/',
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