<template>
  <div>
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
        >
          <template v-for="x in contacts" :key="x">
            <el-menu-item index="x" @click="getMessage(x)">
              <span>{{ x }}</span>
            </el-menu-item>
            <el-divider></el-divider>
          </template>
        </el-menu>
      </el-col>
      <el-col :span="16">
        <div v-for="item in messages" :key="item.time" class="text item">
          <el-divider direction="vertical"></el-divider>
          <div v-if="item.sender===2">
            <el-card class="box-card" style="margin-left: 30px">
              <div class="card-header">
                <span>{{ item.time }}</span>
              </div>
              <div class="text">{{ item.content }}</div>
            </el-card>
          </div>
          <div v-else>
            <el-card class="box-card" style="margin-left: 650px">
              <div class="card-header">
                <span>{{ item.time }}</span>
              </div>
              <div class="text">{{ item.content }}</div>
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>
    <div style="margin:40px"></div>
    <el-divider></el-divider>
    <el-row class="tac">
      <el-col :span="6" offset="4">
      </el-col>
      <el-col :span="11" offset="4">
        <el-input type="textarea"
                  v-model="content"
                  :autosize="{ minRows: 3, maxRows: 3}"></el-input>
      </el-col>
      <el-button type="primary" plain style="margin: 43px 30px" @click="sendMessage">发送</el-button>

    </el-row>

    <div style="margin: 20px"></div>
  </div>
</template>

<script>
export default {
  name: "Communication",
  mounted: function () {
    this.getContacts()
    this.timer = setTimeout(() => {   //设置延迟执行
      this.getMessage(this.contact)
    }, 200);
  },
  data() {
    return {
      content: '',
      contact: '',
      contacts: [],
      messages: []
    }
  },
  methods: {
    getContacts() {
      let that = this
      this.$axios.request({
        url: this.$url + 'get_link/',
        method: 'POST',
        data: {
          'token': this.$store.state.token, 'type': this.$store.state.type
        },
        responseType: 'json'
      }).then(function (response) {
        that.contacts = response.data
        that.contact = that.contacts[0]
      })
    },
    getMessage(user) {
      let that = this
      this.$axios.request({
        url: this.$url + 'get_message/',
        method: 'POST',
        data: {
          'token': this.$store.state.token, 'type': this.$store.state.type, 'user': user,
        },
        responseType: 'json'
      }).then(function (response) {
        that.messages = response.data
        that.contact = user
      })
    },
    sendMessage() {
      let that = this
      this.$axios.request({
        url: this.$url + 'create_message/',
        method: 'POST',
        data: {
          'token': this.$store.state.token,
          'type': this.$store.state.type,
          'user': this.contact,
          'content': this.content
        },
        responseType: 'json'
      }).then(function (response) {
        let code = response.data['code']
        if (code !== 1) {
          alert("操作失败！")
          return
        }
        that.content = ''
        that.getMessage(that.contact)
      })
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 400px;
}

.card-header {
  color: #6481bd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>