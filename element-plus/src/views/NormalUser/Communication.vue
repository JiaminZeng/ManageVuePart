<template>
  <div>
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span>person1</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span>person2</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span>person3</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span>person4</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span>person5</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-menu"></i>
            <span>person6</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-menu"></i>
            <span>person7</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="1">
        <el-button type="success" plain style="float: right">AA</el-button>

        <div style="margin: 240px"></div>
        <el-button type="success" plain style="float: right">AA</el-button>
      </el-col>
      <el-col :span="9">
        <el-card class="box-card" style="float: left">
          <div v-for="o in 2" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
        <div style="margin: 240px"></div>
        <el-card class="box-card" style="float: left">
          <div v-for="o in 2" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="9">
        <div style="margin: 140px"></div>
        <el-card class="box-card" style="float: right;">
          <div v-for="o in 1" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="1">
        <div style="margin: 140px"></div>
        <el-button type="primary" plain>BB</el-button>
      </el-col>
    </el-row>
    <div style="margin:140px"></div>

    <el-row class="tac">
      <el-col :span="6" offset="4">
      </el-col>
      <el-col :span="11" offset="4">
        <el-input type="textarea"
                  :autosize="{ minRows: 3, maxRows: 3}"></el-input>
      </el-col>
      <el-button type="primary" plain style="margin: 43px 30px">发送</el-button>

    </el-row>

    <div style="margin: 20px"></div>
  </div>
</template>

<script>
export default {
  name: "Communication"
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
</style>