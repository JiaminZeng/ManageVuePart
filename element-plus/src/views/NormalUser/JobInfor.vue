<template>
  <div>
    <div style="margin: 20px 20px 20px 20px"></div>
    <el-button style="margin: 0 0 0 30px" @click="inx_1">岗位信息</el-button>
    <el-button @click="inx_2">已投递</el-button>
    <el-button @click="inx_3">已回复</el-button>
    <div style="margin: 30px 30px 30px 30px"></div>
    <el-divider></el-divider>

    <div v-if="show_type===1">
      <el-select v-model="select_type" size="middle" style="margin: 0 0 0 30px" @change="getForm()">
        <el-option
            v-for="item in options"
            :key="item.mc"
            :label="item.mc"
            :value="item.mc">
        </el-option>
      </el-select>
      <el-divider></el-divider>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="fbsj" label="发布时间" width="170"/>
        <el-table-column prop="zwlb" label="职位类别" width="120"/>
        <el-table-column prop="zwmc" label="职位名称" width="100"/>
        <el-table-column prop="nr" label="职位内容" width="100"/>
        <el-table-column prop="xz" label="薪资" width="100"/>
        <el-table-column prop="gzdz" label="工作地址" width="100"/>
        <el-table-column prop="nr" label="内容" width="100"/>
        <el-table-column prop="qtxx" label="其它信息" width="100"/>
        <el-table-column prop="fbz" label="发布者" width="100"/>
        <el-table-column prop="qymc" label="企业名称" width="100"/>
        <el-table-column prop="jgdm" label="机构代码" width="100"/>
        <el-table-column prop="qydz" label="企业地址" width="100"/>
        <el-table-column prop="qyxz" label="企业性质" width="100"/>
        <el-table-column prop="zyyw" label="主要业务" width="100"/>
        <el-table-column prop="djsj" label="登记时间" width="100"/>
        <el-table-column prop="lxdh" label="联系电话" width="100"/>
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <el-button type="text" size="small" @click="createResume(scope.$index)">投递简历</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
    <div v-else-if="show_type===2">
      <el-table :data="db" style="width: 100%">
        <el-table-column fixed prop="tdsj" label="投递时间" width="170"/>
        <el-table-column prop="zwlb" label="职位类别" width="120"/>
        <el-table-column prop="zwmc" label="职位名称" width="100"/>
        <el-table-column prop="nr" label="职位内容" width="100"/>
        <el-table-column prop="xz" label="薪资" width="100"/>
        <el-table-column prop="gzdz" label="工作地址" width="100"/>
        <el-table-column prop="nr" label="内容" width="100"/>
        <el-table-column prop="qtxx" label="其它信息" width="100"/>
        <el-table-column prop="fbz" label="发布者" width="100"/>
        <el-table-column prop="qymc" label="企业名称" width="100"/>
        <el-table-column prop="jgdm" label="机构代码" width="100"/>
        <el-table-column prop="qydz" label="企业地址" width="100"/>
        <el-table-column prop="qyxz" label="企业性质" width="100"/>
        <el-table-column prop="zyyw" label="主要业务" width="100"/>
        <el-table-column prop="djsj" label="登记时间" width="100"/>
        <el-table-column prop="lxdh" label="联系电话" width="100"/>
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <el-button type="text" size="small" @click="createResume(scope.$index)">交流</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-else-if="show_type===3">
      <el-table :data="db" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="tdsj" label="投递时间" width="170"/>
        <el-table-column prop="zt" label="状态" width="100"/>
        <el-table-column prop="hf" label="回复内容" width="170"/>
        <el-table-column prop="zwlb" label="职位类别" width="120"/>
        <el-table-column prop="zwmc" label="职位名称" width="100"/>
        <el-table-column prop="nr" label="职位内容" width="100"/>
        <el-table-column prop="xz" label="薪资" width="100"/>
        <el-table-column prop="gzdz" label="工作地址" width="100"/>
        <el-table-column prop="nr" label="内容" width="100"/>
        <el-table-column prop="qtxx" label="其它信息" width="100"/>
        <el-table-column prop="fbz" label="发布者" width="100"/>
        <el-table-column prop="qymc" label="企业名称" width="100"/>
        <el-table-column prop="jgdm" label="机构代码" width="100"/>
        <el-table-column prop="qydz" label="企业地址" width="100"/>
        <el-table-column prop="qyxz" label="企业性质" width="100"/>
        <el-table-column prop="zyyw" label="主要业务" width="100"/>
        <el-table-column prop="djsj" label="登记时间" width="100"/>
        <el-table-column prop="lxdh" label="联系电话" width="100"/>
      </el-table>
    </div>
    <div style="margin: 60px 60px"></div>
  </div>
</template>

<script>

export default {
  name: "UserManage",
  data() {
    return {
      select_type: 'ALL',
      show_type: 1,
      dataList: {
        zwlb: '',
        zwmc: '',
        xz: '',
        gzdz: '',
        nr: '',
        qtxx: '',
      },
      tableData: [],
      db: [],
      options: []
    }
  },
  mounted: function () {
    this.getOptionsForm()
    this.getForm()
    this.getResume(1)
  },
  methods: {
    inx_1() {
      this.getOptionsForm()
      this.getForm()
      this.show_type = 1
    },
    inx_2() {
      this.getResume(1)
      this.show_type = 2
    },
    inx_3() {
      this.getResume(2)
      this.show_type = 3
    },
    getOptionsForm() {
      let that = this
      this.$axios.request({
        url: this.$url + 'get_job_type/',
        method: 'POST',
        data: {},
        responseType: 'json'
      }).then(function (response) {
        let t = {'mc': 'ALL'}
        that.options = response.data
        that.options.unshift(t)
      })
    },
    getForm() {
      let that = this
      this.$axios.request({
        url: this.$url + 'get_job/',
        method: 'POST',
        data: {'type': 1, 'zwlb': this.select_type},
        responseType: 'json'
      }).then(function (response) {
        that.tableData = response.data
      })
    },
    send(inx, type) {
      let that = this
      let sent_data = {}
      if (type === 1)
        sent_data = {'token': this.$store.state.token, 'type': type, 'data': this.dataList}
      else if (type === 2)
        sent_data = {'token': this.$store.state.token, 'type': type, 'data': this.tableData[inx]}
      else if (type === 0)
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
        that.getOptionsForm()
        that.getForm()

      })
    },
    createResume(inx) {
      let sent_data = {
        'token': this.$store.state.token,
        'type': 1,
        'id': this.tableData[inx]['id'],
        'fbz': this.tableData[inx]['fbz']
      }
      this.$axios.request({
        url: this.$url + 'update_resume/',
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
      })
    },
    getResume(state) {
      let that = this
      this.$axios.request({
        url: this.$url + 'get_resume/',
        method: 'POST',
        data: {'type': 2, 'state': state, 'token': this.$store.state.token,},
        responseType: 'json'
      }).then(function (response) {
        that.db = response.data
      })
    },
    tableRowClassName({row}) {
      if (row['zt'] === '拒绝') {
        return 'warning-row';
      } else {
        return 'success-row';
      }
    }
  }
}
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
