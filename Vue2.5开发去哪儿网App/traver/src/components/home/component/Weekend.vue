<template>
  <div>
      <!-- title -->
      <div class="title">周末去哪儿</div>
      <!-- list -->
      <ul>
          <li class="item border-bottom" v-for="item of weekendItems" :key="item.id">
              <div class="item-img-wrap">
                  <img class="item-img" :src="item.picUrl" alt="#">
              </div>
              <div class="item-inf">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import {weekendItems} from '../config'
export default {
  name: 'HomeWeekend',
  created () {
    this.weekendItems = weekendItems
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
    &-img-wrap{
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 30.5%;
    }
    &-img{
        width: 100%;
    }
    &-inf{
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
}
</style>
