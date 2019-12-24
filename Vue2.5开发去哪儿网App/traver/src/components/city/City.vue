<template>
  <div>
    <city-header></city-header>
    <City-seacher></City-seacher>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <!-- 父组件订阅消息 -->
    <Alphabet :cities="cities" @change="handleChange"></Alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './component/Header'
import CitySeacher from './component/Seacher'
import CityList from './component/List'
import Alphabet from './component/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySeacher,
    CityList,
    Alphabet
  },
  data () {
    return {
      // axios
      hotCities: [],
      cities: {},
      // 侧边栏点击
      letter: ''
    }
  },
  methods: {
    // axios数据获取
    getCityInfSuc (res) {
      res = res.data
      if (res.ret) {
        this.hotCities = res.data.hotCities
        this.cities = res.data.cities
      }
    },
    // 处理axios数据
    getCityInf () {
      // axios.get('/static/mock/city.json').then(this.getCityInfSuc)
      // 接口代理版city-logic
      axios.get('/api/city.json').then(this.getCityInfSuc)
    },
    // 保存子组件传来数据
    handleChange (res) {
      // console.log(res)
      this.letter = res
    }
  },
  // 计算属性中获取axios数据，实时改动用mounted,很符合axios实时响应特点
  mounted () {
    this.getCityInf()
  }
}
</script>

<style>
</style>
