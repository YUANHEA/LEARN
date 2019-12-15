<template>
  <div>
      <!-- title -->
      <div class="title">热销推荐</div>
      <!-- list -->
      <!-- <div></div> -->
      <!-- 多用ul与li与做列表项，不用div -->
      <ul>
          <li class="item border-bottom" v-for="item of reccomentItems" :key="item.id">
              <!-- li中再用div分模块 -->
              <div class="item-img-wrap">
                  <img class="item-img" :src="item.picUrl" alt="#">
              </div>
              <div class="item-inf">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p>
                  <button class="item-btn">查看详情</button>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import {reccomentItems} from '../config'
export default {
  name: 'HomeRecomment',
  created () {
    this.reccomentItems = reccomentItems
  }
}
</script>

<style lang='scss' scoped>
@import '~style/scss/_mixin.scss';
.title{
    line-height: .8rem;
    background-color: #eee;
    text-indent: .2rem;
}
.item{
    // 模块容器整体采用flex布局
    // 父级设置flex,子级分空间与调间距
    display: flex;
    overflow: hidden;
    // 有设置flex布局，不能用padding-bottom占位
    height: 1.9rem;
    // width: 100%;
    // height: 0;
    // padding-bottom: 30%;
    &-img{
        padding: .1rem;
        width: 1.7rem;
        height: 1.7rem;
    }
    &-inf{
        flex: 1;
        padding: .1rem;
        min-width: 0;
    }
    &-title{
        line-height: .54rem;
        font-size: .32rem;
        @include ellipsis();
    }
    &-desc{
        line-height: .4rem;
        color: #ccc;
        @include ellipsis();
    }
    &-btn{
        line-height: .44rem;
        margin-top: .2rem;
        background-color: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        color: #fff;
    }
}
</style>
