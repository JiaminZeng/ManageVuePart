
import {createApp} from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)
app.config.globalProperties.$cookie = VueCookies
app.config.globalProperties.$axios = axios
app.config.globalProperties.$url = 'http://127.0.0.1:8000/';
// app.config.globalProperties.$url = 'http://123.60.74.235:8000/';

app.use(store).use(router).use(ElementPlus).mount('#app')

