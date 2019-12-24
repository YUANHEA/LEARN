<template>
  <div>
    <div class="seacher">
      <!-- 给搜索框做双向数据绑定，用v-modle -->
      <input class="seacher-input" type="text" placeholder="请输入需要搜索城市名" v-model="keyWord">
    </div>
    <!-- 显示搜索结果结构 -->
    <div class="search-content" ref="searchContent" v-show="keyWord">
      <ul>
        <li v-for='item of list' :key="item.id" class="search-content-item border-topbottom" >{{item.name}}</li>
        <!-- v-if不能和v-for一起用.给否则设置v-show-->
        <!-- v-if将元素销毁，比较消耗性能。v-show只是display:none,隐藏。因此对于频繁切换，用v-show -->
        <li v-show="!list.length" class="search-content-item border-topbottom">没有匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySeacher',
  // 搜索需要数据，props接收组件间传值，接收数据量
  props: {
    cities: Object
  },
  data: function () {
    return {
      keyWord: '',
      list: [],
      timer: 0
    }
  },
  // vue中组件dom挂载完成自动执行的生命周期函数，因为这个better-scroll插件需要获取到本组件dom结构
  mounted () {
    // this 相当 let
    this.scroll = new BScroll(this.$refs.searchContent)
  },
  watch: {
    // 在watch属性中，监听数据改动，进行相应动作。
    // 比如关键词改动，判断再获取有相应数据
    keyWord () {
      // 对于频繁触发事件用事件节流
      // 定时器清除与设置
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        // forin,foreach遍历出数据，直到有相关关键数据。
        // 比如这里遍历直到有spell,name数据对象
        const result = []
        for (const key in this.cities) {
          if (this.cities.hasOwnProperty(key)) {
            const elementArray = this.cities[key]
            elementArray.forEach(element => {
              // if ((element.spell === this.keyWord) || (element.name === this.keyWord)) {
              //   console.log(element.spell, element.name)
              // }
              // indexof判断存在内容数量
              // 数据量.indexof(被判断词量) > -1
              if ((element.spell.indexOf(this.keyWord) > -1) || (element.name.indexOf(this.keyWord) > -1)) {
                // 将数据内容存到临时数组中
                result.push(element)
              }
            })
          }
        }
        // 将临时数组赋值给data数组
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~style/scss/_mixin.scss';
.seacher{
    height: .72rem;
    background: $bgColor;
    padding: .1rem;
    &-input{
        width: 100%;
        height: .62rem;
        line-height: .62rem;
        // input输入框不用box-sizing: border-box;padding不能正常设置
        box-sizing: border-box;
        padding: 0 .1rem;
        color: #666;
    }
}
.search-content{
  position: absolute;
  top: 1.78rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1; // 显示覆盖在上层
  background-color: #eee;
  overflow: hidden;
  &-item{
    line-height: .62rem;
    padding-left: .2rem;
    color: #666;
  }
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
</style>
