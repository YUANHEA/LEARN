<template>
  <div>
    <!-- title -->
    <div class="title">热销推荐</div>
    <!-- list -->
    <!-- <div></div> -->
    <!-- 多用ul与li与做列表项，不用div -->
    <ul>
      <!-- 用router-link代替li,动态绑定路由 -->
      <router-link
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        tag="li"
        :to="'/detail/'+item.id"
      >
        <!-- li中再用div分模块 -->
        <div class="item-img-wrap">
          <img class="item-img" :src="item.imgUrl" alt="#" />
        </div>
        <div class="item-inf">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
// import {reccomentItems} from '../config'
export default {
  name: 'HomeRecomment',
  created () {
    // this.reccomentItems = reccomentItems
  },
  props: {
    recommendList: {
      type: Array
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~style/scss/_mixin.scss";
.title {
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
}
.item {
  // 模块容器整体采用flex布局
  // 父级设置flex,子级分空间与调间距
  display: flex;
  overflow: hidden;
  // 有设置flex布局，不能用padding-bottom占位
  height: 1.9rem;
  // width: 100%;
  // height: 0;
  // padding-bottom: 30%;
  &-img {
    padding: 0.1rem;
    width: 1.7rem;
    height: 1.7rem;
  }
  &-inf {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
  }
  &-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    @include ellipsis();
  }
  &-desc {
    line-height: 0.4rem;
    color: #ccc;
    @include ellipsis();
  }
  &-btn {
    line-height: 0.44rem;
    margin-top: 0.2rem;
    background-color: #ff9300;
    padding: 0 0.2rem;
    border-radius: 0.06rem;
    color: #fff;
  }
}
</style>
