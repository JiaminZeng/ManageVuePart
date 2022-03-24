<template>
  <div>
    <div style="margin: 20px 20px 20px 20px;"></div>
    <div style="width: 60%;margin:0 0 0 500px">
      <el-row :gutter="20">
        <el-col :span="10">
          <el-input
              type="textarea"
              autosize
              maxlength="50"
              show-word-limit
              placeholder="请输入职位类别"
              v-model="mc">
          </el-input>
        </el-col>
        <div style="margin: 10px 0;"></div>
        <el-col :span="2" offset="1">
          <el-button
              @click="send(0,1)">添加
          </el-button>
        </el-col>
      </el-row>

      <div style="margin: 30px 30px 30px 30px"></div>

      <el-table :data="tableData" style="width: 80%">
        <el-table-column fixed prop="sj" label="修改时间" width="200"/>
        <el-table-column label="类别名称" width="120">
          <template #default="scope">
            <el-input v-model="tableData[scope.$index].new_mc"/>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="240">
          <template #default="scope">
            <el-button type="success" size="small" @click="send(scope.$index,2)">修改</el-button>
            <el-button type="danger" size="small" @click="send(scope.$index,0)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin: 160px 60px"></div>
  </div>
</template>

<script>
export default {
  name: "TypeManage",
  mounted() {
    this.getForm()
  },
  data() {
    return {
      mc: '',
      tableData: []
    }
  },
  methods: {
    getForm() {
      let that = this
      this.$axios.request({
        url: this.$url + 'get_job_type/',
        method: 'POST',
        data: {'inf': 123},
        responseType: 'json'
      }).then(function (response) {
        that.tableData = response.data
      })
    },
    send(inx, type) {
      let that = this
      let mc = this.mc
      let new_mc = this.mc
      if (type !== 1) {
        mc = this.tableData[inx].mc
        new_mc = this.tableData[inx].new_mc
      }
      let sent_data = {'token': this.$store.state.token, 'mc': mc, 'new_mc': new_mc, 'type': type}
      this.$axios.request({
        url: this.$url + 'update_job_type/',
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