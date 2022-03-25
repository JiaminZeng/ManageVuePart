<template>
  <div id="Chart1" :style="{ width: '100%', height: '300px',border: '2px'}"></div>
  <el-divider></el-divider>
  <div id="Chart2" :style="{ width: '100%', height: '300px',border: '2px' }"></div>
  <el-divider></el-divider>
  <div id="Chart3" :style="{ width: '100%', height: '250px',border: '2px' }"></div>
  <el-divider></el-divider>
  <div id="Chart4" :style="{ width: '100%', height: '250px',border: '2px' }"></div>
  <el-divider></el-divider>
  <div id="Chart5" :style="{ width: '100%', height: '250px',border: '2px' }"></div>
</template>

<script>

export default {
  data() {
    return {
      'user': [],
      'zpxxsl': [],
      'jlsjsl': [],
      'hy': [],
      'zwgs': [],
      'jltd': [],
      'zdtd': [],
    };
  },
  mounted() {
    this.send()
  },
  methods: {
    send() {
      let that = this
      this.$axios.request({
        url: this.$url + 'get_statistics/',
        method: 'POST',
        data: {
          'token': this.$store.state.token,
        },
        responseType: 'json'
      }).then(function (response) {
        that.user = response.data['user']
        that.zpxxsl = response.data['zpxxsl']
        that.jlsjsl = response.data['jlsjsl']
        that.hy = response.data['hy']
        that.zwgs = response.data['zwgs']
        that.jltd = response.data['jltd']
        that.zdtd = response.data['zdtd']
        that.init()
      })
    },
    init() {
      let myChart1 = this.$echarts.init(document.getElementById("Chart1"), 'light');
      let myChart2 = this.$echarts.init(document.getElementById("Chart2"), 'light');
      let myChart3 = this.$echarts.init(document.getElementById("Chart3"), 'light');
      let myChart4 = this.$echarts.init(document.getElementById("Chart4"), 'light');
      let myChart5 = this.$echarts.init(document.getElementById("Chart5"), 'light');
      myChart1.setOption({
        title: {text: "公司成员招聘发布数量"},
        tooltip: {},
        xAxis: {
          data: this.user,
        },
        yAxis: {},
        series: [
          {
            name: "发布数量",
            type: "bar",
            barWidth: 30,

            data: this.zpxxsl,
            color: '#006BB0',
          },
        ],
      });
      myChart2.setOption({
        title: {text: "公司成员简历收集数量"},
        tooltip: {},
        xAxis: {
          data: this.user,
        },
        yAxis: {},
        series: [
          {
            name: "收集数量",
            type: "bar",
            barWidth: 30,
            data: this.jlsjsl,
            color: '#EFA90D',
          },
        ],
      });
      myChart3.setOption({
        title: {text: "行业招聘信息总发布数量"},
        tooltip: {},
        xAxis: {
          data: this.hy
        },
        yAxis: {},
        series: [
          {
            name: "发布数量",
            type: "bar",
            barWidth: 30,
            data: this.zwgs,
            color: '#1D1815',
          },
        ],
      });
      myChart4.setOption({
        title: {text: "行业招聘简历总收集数量"},
        tooltip: {},
        xAxis: {
          data: this.hy
        },
        yAxis: {},
        series: [
          {
            name: "收集数量",
            type: "bar",
            barWidth: 30,
            data: this.jltd,
            color: '#059341',
          },
        ],
      });
      myChart5.setOption({
        title: {text: "行业单岗位最大简历收集数量"},
        tooltip: {},
        xAxis: {
          data: this.hy
        },
        yAxis: {},
        series: [
          {
            name: "收集数量",
            type: "bar",
            barWidth: 30,
            data: this.zdtd,
            color: '#DC2F1F',
          },
        ],
      });
    }
  }
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>