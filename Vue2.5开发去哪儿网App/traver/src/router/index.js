import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/Home'
import City from '@/components/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/', // 路由地址
    //   name: 'HelloWorld', // 路由地址名
    //   component: HelloWorld // 路由地址绑定的组件
    // },
    {
      path: '/', // 路由地址
      name: 'Home', // 路由地址名
      component: Home // 路由地址绑定的组件
    },
    {
      path: '/city', // 路由地址
      name: 'City', // 路由地址名
      component: City // 路由地址绑定的组件
    }
  ]
})
