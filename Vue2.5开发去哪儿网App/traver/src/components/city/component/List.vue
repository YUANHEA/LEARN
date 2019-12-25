<template>
  <div class="list wrapper" ref="wrapper">
    <div class="content">
      <div>
        <div class="title border-topbottom">当前城市</div>
        <div class="btnList">
          <div class="btn-wrap">
            <div class="btn">{{this.city}}</div>
          </div>
          <!-- <div class="btn-wrap">
          <div class="btn">北京</div>
        </div>
        <div class="btn-wrap">
          <div class="btn">北京</div>
          </div>-->
        </div>
      </div>
      <div>
        <div class="title border-topbottom">热门城市</div>
        <div class="btnList">
          <div
            class="btn-wrap"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleChangeCity(item.name)"
          >
            <div class="btn">{{item.name}}</div>
          </div>
          <!-- <div class="btn-wrap">
            <div class="btn">北京</div>
          </div>
          <div class="btn-wrap">
            <div class="btn">北京</div>
          </div>
          <div class="btn-wrap">
            <div class="btn">北京</div>
          </div>
          <div class="btn-wrap">
            <div class="btn">北京</div>
          </div>
          <div class="btn-wrap">
            <div class="btn">北京</div>
          </div>-->
        </div>
      </div>
      <div v-for="(itemList , key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <!-- <ul class="item-list">
        <li class="item border-topbottom">a</li>
        <li class="item border-topbottom">a</li>
        <li class="item border-topbottom">a</li>
        <li class="item border-topbottom">a</li>
        <li class="item border-topbottom">a</li>
        </ul>-->
        <!-- 行内元素ul,li没有img标签作为支撑，需要设置高度，直接换div标签 -->
        <div class="item-list" v-for="item of itemList" :key="item.id">
          <div class="item border-bottom" @click="handleChangeCity(item.name)">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 这里安装根据到packkage.json文件中寻找
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    // axios
    hotCities: Array,
    cities: Object,
    // 侧边栏
    letter: String
  },
  // vue中组件dom挂载完成自动执行的生命周期函数，因为这个better-scroll插件需要获取到本组件dom结构
  mounted () {
    // this 相当 let
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  computed: {
    // mapState将vuex中公共量映射到组件名为city计算属性中
    ...mapState(['city'])
  },
  // watch属性监听数据改动
  watch: {
    letter () {
      if (this.letter) {
        // 利用ref获取dom元素
        const element = this.$refs[this.letter][0]
        // 利用scroll-better提供跳转到指定元素方法
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    // 获取dom元素中数据，数据来源很多
    handleChangeCity (city) {
      // console.log(dat)
      // 在组件事件中，通过dispatch触发vuex的action中相应方法
      // this.$store.dispatch('changeCity', city)
      // 由于组件没有涉及异步数据获取，组件可直接通过commit调用mutation中方法
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    // 将Mutation量映射到methods中名为changeCity的方法中
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang='scss' scoped>
// 不用浏览器自动滚动
// 1、给最外层设置绝对定位
// 2、top值留出空间
// 3、再溢出隐藏
.list {
  overflow: hidden;
  position: absolute;
  top: 1.78rem; //这个值需要根据上面两个组件高度与它们padding决定
  bottom: 0;
  left: 0;
  right: 0;
}
// 利用伪元素画上下边框线
.border-topbottom {
  &::before {
    border-color: #ccc;
  }
  &::after {
    border-color: #ccc;
  }
}
// 只画下边界
.border-bottom {
  &::before {
    border-color: #ccc;
  }
}
.title {
  line-height: 0.44rem;
  padding-left: 0.2rem;
  background-color: #eee;
  color: #666;
  font-size: 0.26rem;
}
.btnList {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;
  .btn-wrap {
    float: left;
    //   width: 33.3%，再用margin调不同元素距离，缩小这个值
    width: 33.3%;

    .btn {
      margin: 0.1rem;
      padding: 0.1rem 0;
      text-align: center;
      border: 0.02rem solid #ccc;
      border-radius: 0.06rem;
    }
  }
}
// 城市列表样式
.item-list {
  .item {
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }
}
</style>
