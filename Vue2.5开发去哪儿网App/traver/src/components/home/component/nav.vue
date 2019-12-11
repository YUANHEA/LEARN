<template>
  <div>
    <ul class="nav">
        <li class="nav-item" v-for="nav of navs" :key="nav.id">
            <a :href="nav.linkUrl" class="nav-link">
                <img :src="nav.picUrl" class="nav-img">
                <span>{{nav.text}}</span>
            </a>
        </li>
    </ul>
  </div>
</template>
<script>
import { navItems } from '../config'
// 导入配置文件数据，先保存到data、created中，再到html中调用
export default {
  name: 'HomeNav',
  created () {
    this.navs = navItems
  },
  data () {
    return {}
  }
}
</script>

<style lang='scss' scoped>
@import '~style/scss/_mixin.scss';
.nav{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    // height: 0;
    // padding-bottom: 45%;
    background-color: #ccc;
    padding-top: .3rem;
    padding-bottom: .3rem;
    // &-item{flex: 1;}
    // 要换两行只能给元素设置width,否则需要另起一行
    &-item{
        // 父级设置flex,子级分空间与调间距
        width: 20%;
        margin-bottom: .15rem;
    }
    &-link{
      // 如果是mixin中函数，需要用@include赋值
      @include flex-center(column);
    }
    &-img{
      width: 60%;
      margin-bottom: .08rem;
    }
}
</style>
