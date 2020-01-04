<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="//imgs.qunarzz.com/p/p14/201302/28/218ac6605f1d637f93835fbb.jpg_256x160_bfee6c2d.jpg"
      />
      <div class="banner-inf">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-num">
          <span class="iconfont banner-icon">&#xe674;</span>39
        </div>
      </div>
    </div>
    <!-- 到触发显示组件中，写信息组件。因为两者是替换显示 -->
    <CommentGallary :swiperList = 'swiperList' v-show="showGallary" @closeGallary = "handleCloseGallary"></CommentGallary>
  </div>
</template>

<script>
import CommentGallary from 'comment/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommentGallary
  },
  data () {
    return {
      swiperList: [
        {
          key: '1',
          imgUrl: '//imgs.qunarzz.com/p/tts3/1811/e1/9428128a63c23202.jpg_r_480x320x90_28c81e21.jpg'
        }, {
          key: '2',
          imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/ca708182-68cc-4e6e-94d2-06771f227013.jpg_r_390x260x90_3a70c477.jpg'
        }, {
          key: '3',
          imgUrl: '//imgs.qunarzz.com/p/tts3/1707/fe/ce09fcf5c5b87802.jpg_r_480x320x90_cacac77e.jpg'
        }
      ],
      // 控制幻灯片显示
      showGallary: true
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = !this.showGallary
    },
    handleCloseGallary () {
      this.showGallary = !this.showGallary
    }
  }
}
</script>

<style lang='scss' scoped>
.banner {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 62.5%;
  &-img {
    width: 100%;
  }
  &-inf {
    // 上级设置flex布局，下级flex值分空间
    display: flex;
    position: absolute;
    // left: 0;right: 0;能让左右内容分到两边
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    // 用背景图设置线性渐变色
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
  }
  &-title {
    flex: 1;
    padding: 0 0.2rem;
    font-size: 0.32rem;
  }
  &-num {
    // 定位，大小，外间距，内间距，外观
    line-height: 0.32rem;
    height: 0.32rem;
    margin: 0.14rem 0;
    padding: 0 0.4rem;
    font-size: 0.24rem;
    border-radius: 0.2rem;
    background-color: rgba(0, 0, 0, 0.8);
  }
  &-icon {
    font-size: 0.24rem;
  }
}
</style>
