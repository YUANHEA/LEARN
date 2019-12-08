<template>
  <div>
      <!-- 局部组件显示 -->
      <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './component/Header' // 导入单页面组件
export default {
  name: 'home',
  components: {
    // 局部组件注册
    HomeHeader// HomeHeader: HomeHeader。对于es6语法来说，键值如果一致，只需写一个就行
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
