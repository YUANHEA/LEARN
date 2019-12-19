<template>
  <div class="mine-navbar">
      <div class="mine-navbar-left" v-if="$slots.left">
        <slot name="left"></slot>
      </div>
      <div class="mine-navbar-center" v-if="$slots.center">
        <slot name="center"></slot>
      </div>
      <div class="mine-navbar-right" v-if="$slots.right">
        <slot name="right"></slot>
      </div>
      <div class="mine-navbar-absoluteCenter" v-if="$slots.absoluteCenter">
        <slot name="absoluteCenter"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'mine-navbar'
}
</script>

<style lang='scss' scoped>
@import '~style/scss/_mixin.scss';
@import '~style/scss/_valiable.scss';
.mine-navbar{
  display: flex;
  @include flex-between();
  height: .86rem;
  line-height: .86rem;
  position: relative;
  background-color: $bgColor;
  color: #fff;
  &-left{
    float: left;
    margin-right: .1rem;
  }
  &-center{
    flex: 1;
  }
  &-right{
    float: right;
    margin-left: .1rem;
  }
  &-absoluteCenter{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    @include flex-center();
  }
}
</style>
