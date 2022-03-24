<template>
  <div>
    <div style="margin: 100px 120px"><h1 style="text-align: center;font-size: 50px">用户注册</h1></div>
    <el-row :gutter="40"  justify="center">
      <el-col :span="3">
        <el-select v-model="register_type" size="large">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <div style="margin: 20px 0"></div>
    <el-row :gutter="40"  justify="center">
      <el-col :span="2" >
        <el-button
            type="primary"
            @click="conform"
            size="large"
        >确定
        </el-button>
      </el-col>
    </el-row>
    <div style="margin: 250px 0"></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      register_type: 'Register_0',
      options: [{
        value: 'Register_0',
        label: '求职用户'
      }, {
        value: 'Register_1',
        label: '企业管理用户'
      }, {
        value: 'Register_2',
        label: '企业普通用户'
      }],
    }
  },
  methods: {
    conform() {
      this.$router.push({name: this.register_type})
    }
  },
  components: {}
}
</script>
