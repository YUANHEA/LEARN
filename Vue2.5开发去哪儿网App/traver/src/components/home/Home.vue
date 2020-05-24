<template>
    <div>
        <!-- 局部组件显示 -->
        <!-- 幻灯片组件 -->
        <home-header :city="city"></home-header>
        <!-- 分类导航组件 -->
        <swiper :swiperList="swiperList"></swiper>
        <!-- 分类导航组件 -->
        <home-nav :iconList="iconList"></home-nav>
        <!-- 热销推荐组件 -->
        <home-recomment :recommendList="recommendList"></home-recomment>
        <!-- 周末游组件组件 -->
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './component/Header' // 导入单页面组件
import Swiper from './component/Swiper' // 导入幻灯片组件
import HomeNav from './component/nav' // 导入分类导航组件
import HomeRecomment from './component/Recomment' // 导入热销推荐组件
import HomeWeekend from './component/Weekend' // 导入周末游组件组件
import axios from 'axios'
import { mapState } from 'vuex'
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
    return {
      // city: '', // 城市
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      tempCity: '' // city公共量临时缓存量
      // cityList: [
      //   {
      //     value: '1',
      //     label: '北京'
      //   },
      //   {
      //     value: '2',
      //     label: '上海'
      //   },
      //   {
      //     value: '3',
      //     label: '广州'
      //   }
      // ],
      // model1: '2'
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    // 先axios接受数据，再通过父组件传值给子组件，分数据到各个子组件
    getHomeInf: function () {
      // 在methors中调用方法不用方法名，因为同为对象？http://120.24.70.157/ci3/index.php/test/goodsbyid?id=1
      // 一个页面一个接口请求
      axios
        .get('/api/index.json?city=' + this.city)
      // axios.get('/api/ci3/index.php/test/goodsbyid?')
        .then(this.getHomeInfSucc)
    },
    getHomeInfSucc: function (res) {
      console.log('数据', res)
      // 参数解析
      // 先用参数本身取出data！
      res = res.data
      // 返回状态正常且有数据
      if (res.ret && res.data) {
        // 将接受到的数据先保存到变量中，再调用变量
        const dat = res.data
        // this.city = dat.city
        this.swiperList = dat.swiperList
        this.iconList = dat.iconList
        this.recommendList = dat.recommendList
        this.weekendList = dat.weekendList
      }
    }
  },
  // created () {
  //   this.model1 = this.cityList[1].value
  // },
  // 在mounted方法中调用axios方法
  mounted () {
    this.tempCity = this.city
    this.getHomeInf()
  },
  // activated生命周期钩子
  // 在用keepAlive缓存情况，用keepAlive提供的activated生命周期钩子，在activated实现对axois再次请求。
  // 作用，和computed计算属性相同，请求axios
  activated () {
    // console.log('activated')
    if (this.tempCity !== this.city) {
      this.tempCity = this.city
      this.getHomeInf()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
