<template>
  <div class="header">
    <me-navbar>
        <router-link to='./' slot="left">
            <div class="iconfont back-icon header-left">&#xe618;</div>
        </router-link>
        <div class="header-center" slot="center">城市选择</div>
    </me-navbar>
  </div>
</template>

<script>
import MeNavbar from 'base/navbar'
export default {
  name: 'CityHeader',
  components: {
    MeNavbar
  }
}
</script>

<style lang="scss" scoped>
@import '~style/scss/_mixin.scss';
    .header{
    // background-color: $bgColor;
    // color: #fff;
        position: relative;
        &-left{
            width: .64rem !important;
            text-align: center;
            color: #fff;
        }
        &-center{
            font-size: .32rem;
            position: absolute;
            top: 0;
            bottom: 0;
            // 如果设置为0,绝对定位就会覆盖返回按钮
            left: 30%;
            right: 30%;
            @include flex-center();
        }
    }
</style>
