/*
* 路由器对象模块
* */
// 引入各个组件
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由的各个组件
import MSite from "../pages/Msite/MSite";
import Search from "../pages/Search/Search";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";

//声明使用插件
Vue.use(VueRouter)

// 暴露
//new VueRouter 对象 传的是配置对象
export default new VueRouter({
  // 配置对象 是 所有的路由
  // 多个使用routes属性名  值为数组
  routes: [
    {
      path: '/mite',
      component:  MSite,
      // 路由里面写一个meta属性，用于控制是否显示底部Footer  meta默认为空
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component:  Search,
      // 路由里面写一个meta属性，用于控制是否显示底部Footer
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component:  Order,
      // 路由里面写一个meta属性，用于控制是否显示底部Footer
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component:  Profile,
      // 路由里面写一个meta属性，用于控制是否显示底部Footer
      meta: {
        showFooter: true
      }
    },
    {
      // 默认路由  '/mite'
      path: '/',
      redirect:  '/mite'
    },
    {
      path: '/login',
      component:  Login
    }
  ]
})
