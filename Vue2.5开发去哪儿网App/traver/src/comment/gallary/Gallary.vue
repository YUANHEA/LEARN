<template>
  <div class="container" @click="handleClick">
    <div class="wrapper">
      <!-- <swiper :options="swiperOption" v-if="showSwiper"> -->
      <swiper :options="swiperOption">
        <!-- 先实现，一张图片滑动 -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="img-wrapper" :src="item.imgUrl" alt="#" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentGallary',
  props: {
    swiperList: {
      type: Array
    }
  },
  data () {
    return {
      // swiperawesome插件配置参数
      swiperOption: {
        // direction: 'horizontal',
        loop: true,
        // interval: 0,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction',
          // 隐藏再次显示swiper插件，由于width没有重新计算导致
          // 监听到这个swiper插件元素/父级元素发送改动，会自我刷新。
          observeParents: true,
          observer: true
        }
      }
    }
  },
  methods: {
    // 不在本组件实现功能，关键找出触发及实现功能组件
    handleClick () {
      this.$emit('closeGallary')
    }
  }
}
</script>

<style lang='scss' scoped>
.container >>> .swiper-container {
  overflow: inherit;
}
.container {
  /* 用fixed定位与上下左右全为0 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background-color: #000;
}
/* 关键在于padding-bottom控制宽高比 */
.wrapper {
  // overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 66.5%;
}
.img-wrapper {
  width: 100%;
}
.swiper-pagination {
  color: #fff;
  bottom: -1rem;
}
</style>
