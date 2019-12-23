<template>
  <ul class="list">
    <!-- <li class="item" v-for="(item , key) of cities" :key="key" @click="handleLetterChange">{{key}}</li> -->
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterChange"
      @touchstart="handleTouchstart"
      @touchmove="handleTouchmove"
      @touchend="handleTouchend"
    >{{item}}</li>
  </ul>
</template>

<script>
// import startPoint from './config'
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  created () {
    console.log(this.cities)
  },
  //   因为Alphabet组件显示，一开始city{}没有数据，组件不显示。数据是axios获取到，传值，因此页面一开始接到值为空对象。
  // 因此对于固定数值量，写到update生命周期函数中
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
    this.timer = 1 // 修改页面内容
  },
  computed: {
    // 需要根据数组下表去对应字母，先将数据如果是对象类型，先转为数组
    letters () {
      const letters = []
      let object = this.cities
      // 取对象中数据，用forin循环
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          letters.push(key)
        }
      }
      return letters
    }
  },
  methods: {
    // 点击事件组件中发消息
    handleLetterChange (e) {
      // 在事件中获取到点击事件dom,利用e.target
      this.$emit('change', e.target.innerHTML)
      // console.log(this.$refs)
    },
    // 触摸事件
    handleTouchstart (e) {
      // console.log('handleTouchstart', e)
    },
    handleTouchmove (e) {
      // 利用事件函数参数寻找，控制量
      // 想要获取元素信息，通过ref标志元素，再到js中获取到元素。再打印寻找出需要的参数，再点取属性，直到找到想要属性。
      // console.log(this.$refs['A'][0].offsetTop)
      // const startY = this.$refs['A'][0].offsetTop
      // 利用事件函数参数寻找，控制量
      // 触摸找触摸属性touches、targetTouches。再打印寻找出需要的参数，再点取属性，直到找到想要属性。
      // console.log('handleTouchmove', e.targetTouches[0].clientY)
      // console.log('handleTouchmove1', e.touches[0].clientY)
      // 多用changedTouches，在触点改动时y距离
      // console.log('handleTouchmove1', e.changedTouches[0].clientY - 89)
      // const startY = this.$refs['A'][0].offsetTop
      // const endY = e.changedTouches[0].clientY - 89
      // const index = Math.floor((endY - this.startY) / 20)
      // if (index >= 0 && index < this.letters.length) {
      //   this.$emit('change', this.letters[index])
      // }
      // 对频繁触发事件，用事件节流
      // 如果上次动作事件还没结束，下次事件就来，取消上次事件
      // clearTimeout(量)，清空定时器
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // setTimeout设置定时器，保存到变量中，量即定时器
      this.timer = setTimeout(() => {
        const endY = e.changedTouches[0].clientY - 89
        const index = Math.floor((endY - this.startY) / 20)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }, 16)
    },
    handleTouchend (e) {
      // console.log('handleTouchend', e)
      // console.log('handleTouchend', e.target.innerHTML)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~style/scss/_mixin.scss";
.list {
  overflow: hidden;
  position: absolute;
  top: 1.78rem; //这个值需要根据上面两个组件高度与它们padding决定
  bottom: 0;
  right: 0;
  @include flex-center(column);
  .item {
    width: 0.4rem;
    line-height: 0.4rem;
    @include flex-center(row);
  }
}
</style>
