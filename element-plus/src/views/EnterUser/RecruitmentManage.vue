<template>
  <div>
    <div style="margin: 20px 20px 20px 20px"></div>
    <el-button style="margin: 0 0 0 30px" @click="inx_1">发布招聘信息</el-button>
    <el-button @click="inx_2">管理招聘信息</el-button>
    <div style="margin: 30px 30px 30px 30px"></div>
    <el-divider></el-divider>

    <div v-if="show_type===1">
      <div style="margin: 80px 120px"></div>

      <el-row :gutter="0" justify="center">
        <el-col :span="10">
          <el-form
              ref="dataList"
              :model="dataList"
              status-icon
          >
            <el-form-item label="招聘职位类别" required style="margin-left: 130px">
              <el-select v-model="dataList.zwlb" size="middle">
                <el-option
                    v-for="item in options"
                    :key="item.mc"
                    :label="item.mc"
                    :value="item.mc">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="职位名称" prop="zwmc" required>
              <el-input
                  v-model="dataList.zwmc"
                  autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="薪资" prop="xz" required>
              <el-input
                  v-model="dataList.xz"
                  autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="工作地址" prop="gzdz" required>
              <el-input
                  v-model="dataList.gzdz"
                  autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="内容" prop="nr" required>
              <el-input
                  v-model="dataList.nr"
                  autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="其它信息" prop="qtxx" required>
              <el-input
                  v-model="dataList.qtxx"
                  autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-button
                type="primary"
                @click="send(0,1)"
                style="width: 40%; margin-left: 150px"
            >创建
            </el-button>
          </el-form>
        </el-col>
      </el-row>

    </div>
    <div v-else-if="show_type===2">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="fbsj" label="发布时间" width="150"/>

        <el-table-column prop="zwlb" label="职位类别" width="100">
          <template #default="scope">
            <el-select v-model="tableData[scope.$index].zwlb" size="middle">
              <el-option
                  v-for="item in options"
                  :key="item.mc"
                  :label="item.mc"
                  :value="item.mc">
              </el-option>
            </el-select>
          </template>
        </el-table-column>

        <el-table-column prop="zwmc" label="职位名称" width="100">
          <template #default="scope">
            <el-input v-model="tableData[scope.$index].zwmc"/>
          </template>
        </el-table-column>

        <el-table-column prop="nr" label="职位内容" width="100">
          <template #default="scope">
            <el-input v-model="tableData[scope.$index].nr"/>
          </template>
        </el-table-column>

        <el-table-column prop="xz" label="薪资" width="100">
          <template #default="scope">
            <el-input v-model="tableData[scope.$index].xz"/>
          </template>
        </el-table-column>

        <el-table-column prop="gzdz" label="工作地址" width="100">
          <template #default="scope">
            <el-input v-model="tableData[scope.$index].gzdz"/>
          </template>
        </el-table-column>

        <el-table-column prop="nr" label="内容" width="100">
          <template #default="scope">
            <el-input v-model="tableData[scope.$index].nr"/>
          </template>
        </el-table-column>

        <el-table-column prop="qtxx" label="其它信息" width="100">
          <template #default="scope">
            <el-input v-model="tableData[scope.$index].qtxx"/>
          </template>
        </el-table-column>

        <el-table-column prop="fbz" label="发布者" width="100">
          <template #default="scope">
            <el-input v-model="tableData[scope.$index].fbz" disabled/>
          </template>
        </el-table-column>

        <el-table-column prop="lxdh" label="联系电话" width="100">
          <template #default="scope">
            <el-input v-model="tableData[scope.$index].lxdh"/>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="150">
          <template #default="scope">
            <el-button type="primary" size="small" @click="send(scope.$index,2)">修改</el-button>
            <el-button type="danger" size="small" @click="send(scope.$index,0)">删除</el-button>
          </template>
        </el-table-column>

        <el-table-column fixed="right" label="查看" width="150">
          <template #default="scope">
            <el-button type="success" size="small" @click="resumeDetail(scope.$index)">查看已投递简历</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>
    <div v-else-if="show_type===3" style="margin-left: 150px;margin-right: 100px">
      <h1 style="color: #6481bd">未回复:</h1>
      <template v-for="(item,inx) in this.whf" :key="item.username">
        <el-descriptions
            direction="vertical"
            :column="4"
            size="large"
            border
        >
          <el-descriptions-item label="姓名" :span="1">{{ item.xm }}</el-descriptions-item>
          <el-descriptions-item label="性别" :span="1">{{ item.xb }}</el-descriptions-item>
          <el-descriptions-item label="民族" :span="1">{{ item.mz }}</el-descriptions-item>
          <el-descriptions-item label="年龄" :span="1">{{ item.nl }}</el-descriptions-item>
          <el-descriptions-item label="学历" :span="1">{{ item.xl }}</el-descriptions-item>
          <el-descriptions-item label="电话" :span="1">{{ item.dh }}</el-descriptions-item>
          <el-descriptions-item label="学校" :span="1">{{ item.xx }}</el-descriptions-item>
          <el-descriptions-item label="专业" :span="1">{{ item.zy }}</el-descriptions-item>
          <el-descriptions-item label="自我介绍" :span="4">{{ item.zwjs }}</el-descriptions-item>
          <el-descriptions-item label="工作经历" :span="2">{{ item.gzjl }}</el-descriptions-item>
          <el-descriptions-item label="教育经历" :span="2">{{ item.jyjl }}</el-descriptions-item>
          <el-descriptions-item label="获奖记录" :span="2">{{ item.hjjl }}</el-descriptions-item>
          <el-descriptions-item label="特长爱好" :span="2">{{ item.ahtc }}</el-descriptions-item>
          <el-descriptions-item label="期望薪资" :span="2">{{ item.qwxz }}</el-descriptions-item>
          <el-descriptions-item label="附加信息" :span="2">{{ item.fjxx }}</el-descriptions-item>
          <el-descriptions-item label="回复信息" :span="3">
            <el-input v-model="hfxx" size="large">
            </el-input>
          </el-descriptions-item>
          <el-descriptions-item label="Address" :span="1">
            <el-button type="success" plain @click="updateResume(inx,1)">同意</el-button>
            <el-button type="danger" plain @click="updateResume(inx,2)">拒绝</el-button>
          </el-descriptions-item>
        </el-descriptions>
        <el-divider></el-divider>
      </template>
      <div style="margin: 30px 30px 30px 30px"></div>
      <el-divider></el-divider>

      <h1 style="color: #85d500">已回复:</h1>
      <template v-for="item in this.yhf" :key="item.username">
        <el-descriptions
            direction="vertical"
            :column="4"
            size="large"
            border
        >
          <el-descriptions-item label="姓名" :span="1">{{ item.xm }}</el-descriptions-item>
          <el-descriptions-item label="性别" :span="1">{{ item.xb }}</el-descriptions-item>
          <el-descriptions-item label="民族" :span="1">{{ item.mz }}</el-descriptions-item>
          <el-descriptions-item label="年龄" :span="1">{{ item.nl }}</el-descriptions-item>
          <el-descriptions-item label="学历" :span="1">{{ item.xl }}</el-descriptions-item>
          <el-descriptions-item label="电话" :span="1">{{ item.dh }}</el-descriptions-item>
          <el-descriptions-item label="学校" :span="1">{{ item.xx }}</el-descriptions-item>
          <el-descriptions-item label="专业" :span="1">{{ item.zy }}</el-descriptions-item>
          <el-descriptions-item label="自我介绍" :span="4">{{ item.zwjs }}</el-descriptions-item>
          <el-descriptions-item label="工作经历" :span="2">{{ item.gzjl }}</el-descriptions-item>
          <el-descriptions-item label="教育经历" :span="2">{{ item.jyjl }}</el-descriptions-item>
          <el-descriptions-item label="获奖记录" :span="2">{{ item.hjjl }}</el-descriptions-item>
          <el-descriptions-item label="特长爱好" :span="2">{{ item.ahtc }}</el-descriptions-item>
          <el-descriptions-item label="期望薪资" :span="2">{{ item.qwxz }}</el-descriptions-item>
          <el-descriptions-item label="附加信息" :span="2">{{ item.fjxx }}</el-descriptions-item>
          <el-descriptions-item label="回复信息" :span="2">{{ item.hf }}</el-descriptions-item>
          <el-descriptions-item label="回复意见" :span="2">{{ item.zt }}</el-descriptions-item>
        </el-descriptions>
        <el-divider></el-divider>
      </template>

    </div>
    <div style="margin: 120px 120px"></div>
  </div>
</template>

<script>

export default {
  name: "UserManage",
  data() {
    return {

      select_type: 1,
      show_type: 1,
      resume_id: 0,
      hfxx: '',
      dataList: {
        zwlb: '',
        zwmc: '',
        xz: '',
        gzdz: '',
        nr: '',
        qtxx: '',
      },
      tableData: [],
      options: [],
      whf: [],
      yjf: [],
    }
  },
  mounted: function () {
    this.getOptionsForm()
    this.getForm()
  },
  methods: {
    inx_1() {
      this.show_type = 1
      this.getOptionsForm()
    },
    inx_2() {
      this.show_type = 2
      this.getForm()
    },

    getOptionsForm() {
      let that = this
      this.$axios.request({
        url: this.$url + 'get_job_type/',
        method: 'POST',
        data: {},
        responseType: 'json'
      }).then(function (response) {
        that.options = response.data
      })
    },
    getForm() {
      let that = this
      this.$axios.request({
        url: this.$url + 'get_job/',
        method: 'POST',
        data: {'type': 1},
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
    resumeDetail(inx) {
      let zwid = this.tableData[inx]['id']
      this.getResume(1, zwid)
      this.getResume(2, zwid)
      this.timer = setTimeout(() => {   //设置延迟执行
        this.show_type = 3
      }, 200);
    },
    getResume(state, zwid) {
      let that = this
      this.$axios.request({
        url: this.$url + 'get_resume/',
        method: 'POST',
        data: {'type': 1, 'state': state, 'token': this.$store.state.token, 'zwid': zwid},
        responseType: 'json'
      }).then(function (response) {
        if (state === 1)
          that.whf = response.data
        else
          that.yhf = response.data
      })
    },
    updateResume(inx, tp) {
      let sent_data = {
        'token': this.$store.state.token,
        'type': 2,
        'hf': this.hfxx,
        'id': this.tableData[inx]['id'],
        'zt': ''
      }
      if (tp === 1)
        sent_data['zt'] = '同意'
      else
        sent_data['zt'] = '拒绝'
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
