<template>
  <el-container style="height: 100%;">
    <el-header>
      <el-menu mode="horizontal" router>

        <el-menu-item>
          <img src="./assets/title.png" style="width: 120px; height: 60px;"/>
        </el-menu-item>

        <template v-if="type === 1">
          <el-menu-item :index="'/job_infor'">求职</el-menu-item>
          <el-menu-item :index="'/self_infor'">个人信息</el-menu-item>
          <el-menu-item :index="'/communication'">消息界面</el-menu-item>
          <div style="margin: 12px 0 0 700px">
            <el-button type="primary" @click="out">退出</el-button>
          </div>
        </template>
        <template v-else-if="type === 2">
          <el-menu-item :index="'/recruitment'">招聘信息</el-menu-item>
          <el-menu-item :index="'/enter'">信息管理</el-menu-item>
          <el-menu-item :index="'/user_validate'">注册审核</el-menu-item>
          <el-menu-item :index="'/statistics'">数据统计</el-menu-item>
          <el-menu-item :index="'/communication'">消息界面</el-menu-item>
          <div style="margin: 12px 0 0 700px">
            <el-button type="primary" @click="out">退出</el-button>
          </div>
        </template>
        <template v-else-if="type === 3">
          <el-menu-item :index="'/user_manage'">用户信息管理</el-menu-item>
          <el-menu-item :index="'/job_manage'">兼职信息管理</el-menu-item>
          <el-menu-item :index="'/type_manage'">职位类别管理</el-menu-item>
          <div style="margin: 12px 0 0 700px">
            <el-button type="primary" @click="out">退出</el-button>
          </div>
        </template>
        <template v-else>
          <el-menu-item :index="'/login'">登录</el-menu-item>
          <el-menu-item :index="'/register'">注册</el-menu-item>
        </template>
      </el-menu>

    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer height="40px" style="color: #909399; text-align: center;">©2022 LYH Part-Time Management System
    </el-footer>
  </el-container>
</template>

<script>

import {ElMessage} from 'element-plus'

export default {
  name: 'main',
  computed: {
    type() {
      return this.$store.state.type || ''
    }
  },
  methods: {
    out() {
      ElMessage({
        showClose: true,
        message: `用户 ${this.$store.state.username} 注销成功!`,
        type: 'success',
      })
      this.$store.state.type = ''
      this.$router.replace({name: 'Login'})
    }
  }
}
</script>