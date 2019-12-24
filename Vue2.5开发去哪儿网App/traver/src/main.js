// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'style/reset.css' // 设置默认样式：在reset文件中对默认样式重置。
import 'style/border.css' // 解决一像素边框问题：在border文件中对1px样式进行设置。
import 'style/iconfont.css'
import fastClick from 'fastclick' // 导入fastclick库
import VueAwesomeSwiper from 'vue-awesome-swiper' // 导入vue-awesome-swiper库
// VueAwesomeSwiper styles
import 'swiper/dist/css/swiper.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper) // { default global options }
// 解决300毫秒点击延迟问题：安装fastclick库，npm install fastclick --save。
// --save意思是不管在开发环境还是上线都用到fastclick这个库,那就通过--save将它保存到package.json这个库中
fastClick.attach(document.body) // 将fastclick绑定到网页
/* eslint-disable no-new */
new Vue({
  el: '#app', // vue实例接管元素，实例中内容都会显示被接管那个元素上
  router, // 实例路由，
  store, // 全局调用store
  components: { App }, // 子组件注册
  template: '<App/>' // vue实例模板组价模板，这里vue官网直接将子组件写作模板
})
