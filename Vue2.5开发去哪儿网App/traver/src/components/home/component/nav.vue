<template>
  <div>
    <swiper>
      <!-- 由swiper-slide标签决定，页面显示在哪页 -->
      <!-- <swiper-slide>
        <ul class="nav">
            <li class="nav-item" v-for="nav of navs" :key="nav.id">
                <a :href="nav.linkUrl" class="nav-link">
                    <img :src="nav.picUrl" class="nav-img">
                    <span>{{nav.text}}</span>
                </a>
            </li>
        </ul>
      </swiper-slide> -->
      <!-- 分页 -->
      <!-- <swiper-slide v-for="(page,index) of pages" :key="index">
        <ul class="nav" v-for="item of page" :key="item.id">
            <li class="nav-item" v-for="nav of navs" :key="nav.id">
                <a :href="nav.linkUrl" class="nav-link">
                    <img :src="nav.picUrl" class="nav-img">
                    <span>{{nav.text}}</span>
                </a>
            </li>
        </ul>
      </swiper-slide> -->
       <swiper-slide v-for="(page,index) of pages" :key="index">
        <!-- 因为swiper-slider需要分页，因此vfor设置在这层 -->
        <ul class="nav">
            <li class="nav-item" v-for="item of page" :key="item.id">
              <!-- 因为li是渲染元素直接容器因此vfor设置在这层 -->
                <a :href="item.linkUrl" class="nav-link">
                    <img :src="item.picUrl" class="nav-img">
                    <!-- <span class="nav-txt">{{item.text}}</span> -->
                    <p class="nav-desc">{{item.text}}</p>
                </a>
            </li>
        </ul>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { navItems } from '../config'
// 导入配置文件数据，先保存到data、created中，再到html中调用
export default {
  name: 'HomeNav',
  created () {
    this.navs = navItems
    // console.log(this.navs)
  },
  data () {
    return {}
  },
  // 复杂遍历运算在计算属性中计算，再返回。
  // 相当在data中定义过，类比created(){this.变量名=数据/其它量}
  computed: {
    pages () {
      const pages = []
      this.navs.forEach((item, index) => {
        // 元素应该显示在哪页
        const page = Math.floor(index / 10)
        // 新建存储数据的详细量
        if (!pages[page]) {
          pages[page] = []
        }
        // 通过改动数据结构，存储数据！
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~style/scss/_mixin.scss';
.nav{
    display: flex;
    flex-wrap: wrap;
    width: 100%; // 只能给类型导航区域设置适应容器宽高比，这样不会出现页面内容抖动。关于不同机型padding-top会导致容器内部内容上下距离不同，只能通过媒体查询解决。
    height: 0;
    padding-bottom: 39%;
    background-color: #ccc;
    padding-top: .15rem;
    // 带资源那种模块尽量采用适应容器宽高比
    // padding-bottom: .075rem;
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
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &-img{
      width: 60%;
      margin-bottom: .08rem;
    }
    &-desc{
      width: 70%; // 文本溢出显示省略号，需要配合宽度
      text-align: center;
      @include ellipsis();
    }
}
</style>
