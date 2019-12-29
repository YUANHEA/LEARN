<template>
  <div class="banner">
      <img class="banner-img" src="//imgs.qunarzz.com/p/p14/201302/28/218ac6605f1d637f93835fbb.jpg_256x160_bfee6c2d.jpg">
      <div class="banner-inf">
          <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
          <div class="banner-num">
              <span class="iconfont banner-icon">&#xe674;</span>39</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style lang='scss' scoped>
.banner{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 62.5%;
    &-img{
        width: 100%;
    }
    &-inf{
        // 上级设置flex布局，下级flex值分空间
        display: flex;
        position: absolute;
        // left: 0;right: 0;能让左右内容分到两边
        left: 0;
        right: 0;
        bottom: 0;
        line-height: .6rem;
        color: #fff;
        // 用背景图设置线性渐变色
        background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
    }
    &-title{
        flex: 1;
        padding: 0 .2rem;
        font-size: .32rem;
    }
    &-num{
        // 定位，大小，外间距，内间距，外观
        line-height: .32rem;
        height: .32rem;
        margin: .14rem 0;
        padding: 0 .4rem;
        font-size: .24rem;
        border-radius: .2rem;
        background-color: rgba(0,0,0,.8);
    }
    &-icon{
        font-size: .24rem;
    }
}
</style>
