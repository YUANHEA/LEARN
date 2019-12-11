<template>
  <div>
      <!-- 局部组件显示 -->
      <home-header></home-header>
      <swiper></swiper>
      <home-nav></home-nav>
  </div>
</template>

<script>
import HomeHeader from './component/Header' // 导入单页面组件
import Swiper from './component/Swiper' // 导入幻灯片组件
import HomeNav from './component/nav'
export default {
  name: 'home',
  components: {
    // 局部组件注册
    HomeHeader, // HomeHeader: HomeHeader。对于es6语法来说，键值如果一致，只需写一个就行
    Swiper,
    HomeNav
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
