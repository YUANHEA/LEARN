<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe618;</div>
    </router-link>
    <me-navbar class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <div class="iconfont back-icon header-fixed-left" slot="left">&#xe618;</div>
      <div class="header-fixed-input" slot="center">景点详情</div>
      <div class="header-fixed-right" slot="right"></div>
    </me-navbar>
  </div>
</template>

<script>
import MeNavbar from 'base/navbar'
export default {
  name: 'DetailHeader',
  components: {
    MeNavbar
  },
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      console.log(top)
      if (top > 43) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang='scss' scoped>
.header {
    // display: inline;
    transform: none;
  &-abs {
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    width: 0.6rem;
    height: 0.6rem;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 0.3rem;
    text-align: center;
    line-height: 0.6rem;
    &-back {
      color: #fff;
      font-size: 0.4rem;
    }
  }
  &-fixed {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    &-left {
      width: 0.64rem;
      text-align: center;
    }
    &-input {
      color: #fff;
      text-align: center;
    }
    &-right {
      min-width: 0.64rem;
    }
  }
}
</style>
