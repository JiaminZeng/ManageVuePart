import {createApp} from 'vue'
import axios from 'axios'
import App from './App.vue'
import ECharts from "vue-echarts";
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import * as echarts from 'echarts'

const app = createApp(App)
app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.$cookie = VueCookies
app.config.globalProperties.$axios = axios
app.config.globalProperties.$url = 'http://127.0.0.1:8000/';
// app.config.globalProperties.$url = 'http://123.60.74.235:8000/';

app.component('v-chart', ECharts)
app.use(store).use(ECharts).use(router).use(ElementPlus).mount('#app')

