import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/Home'
import City from '@/components/city/City'
import Detail from '@/components/detail/Detail'

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
    },
    // 动态路由
    // :前面表示标签路由请求前面部分固定路径必须是/detail/,后面id表示标签请求后面部分通过拼接的动态参数的动态路径传到路由中id变量中
    {
      path: '/detail/:id', // 路由地址
      name: 'Detail', // 路由地址名
      component: Detail // 路由地址绑定的组件
    }
  ]
})
