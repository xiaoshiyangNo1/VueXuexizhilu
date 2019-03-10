
import Vue from 'vue'

import router from './router'

import App from './App'

import ElementUI from 'element-ui';

import './style/common.css'

import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)


Vue.use(ElementUI)

new Vue({
  el: '#app',
   router,
   render: c => c(App)
})
