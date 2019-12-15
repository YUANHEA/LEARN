<template>
  <div>
      <!-- 局部组件显示 -->
      <!-- 幻灯片组件 -->
      <home-header></home-header>
      <!-- 分类导航组件 -->
      <swiper></swiper>
      <!-- 分类导航组件 -->
      <home-nav></home-nav>
      <!-- 热销推荐组件 -->
      <home-recomment></home-recomment>
      <!-- 周末游组件组件 -->
      <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './component/Header' // 导入单页面组件
import Swiper from './component/Swiper' // 导入幻灯片组件
import HomeNav from './component/nav' // 导入分类导航组件
import HomeRecomment from './component/Recomment' // 导入热销推荐组件
import HomeWeekend from './component/Weekend' // 导入周末游组件组件
export default {
  name: 'home',
  components: {
    // 局部组件注册
    HomeHeader, // HomeHeader: HomeHeader。对于es6语法来说，键值如果一致，只需写一个就行
    Swiper,
    HomeNav,
    HomeRecomment,
    HomeWeekend
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
