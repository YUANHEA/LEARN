<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <!-- <swiper-slide><img src="" alt="https://www.imooc.com" class="swiper-img" :key="1"></swiper-slide>
      <swiper-slide><img src="" alt="https://www.imooc.com" class="swiper-img" :key="2"></swiper-slide>
      <swiper-slide><img src="" alt="https://www.imooc.com" class="swiper-img" :key="3"></swiper-slide> -->
      <swiper-slide v-for='item of swiperList' :key='item.id'>
        <img :src="item.imgUrl" alt="#" class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper', // 组件名不能和某单词重复，再组件名前面写上页面名就不会和关键词冲突
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
          clickable: true
        } // 这样写小圆点就有了
        // pagination: true
      },
      swiperList: [{
        id: '001',
        imgUrl: '//imgs.qunarzz.com/vc/48/4d/58/490ca00c8127e8fe8276ab1a20.jpg_92.jpg'
      }, {
        id: '002',
        imgUrl: '//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
      }, {
        id: '003',
        imgUrl: '//imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
// 设置子组件中元素样式
// 样式不在父组件中，在子组件。由于scoped限制，不能直接修改到其它组价中样式。用样式穿透，父组件样式 >>> 子组件样式。
.swiper >>> .swiper-pagination-bullet-active{
  background: white;
}
.swiper{
  // 图片容器宽高比，如果不设置和图片宽高比相同，分页点显示不出。
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 29.95%;
  &-img{
    width: 100%;
  }
}
</style>
