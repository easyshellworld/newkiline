import { createApp } from 'vue'
import App from './App.vue'
//import axios from "axios"


createApp(App).mount('#app')
App.mount('#app')

//设置axios请求的地址默认是'/api'
//axios.defaults.baseURL = "/api";

//将axios挂载到原型对象上
//App.config.globalProperties.$http = axios;



