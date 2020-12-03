/*
* 入口 JS
* */
import Vue from 'vue'
import App from './App'
//引入路由器
import router from './router'

new Vue({
  el: '#app',
  render: h=> h(App),
  //配置路由器
  router
})
