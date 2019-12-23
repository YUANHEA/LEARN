<template>
  <div class="seacher">
    <input class="seacher-input" type="text" placeholder="请输入需要搜索城市名">
  </div>
</template>

<script>
export default {
  name: 'CitySeacher'
}
</script>

<style lang="scss" scoped>
@import '~style/scss/_mixin.scss';
.seacher{
    height: .72rem;
    background: $bgColor;
    padding: .1rem;
    &-input{
        width: 100%;
        height: .62rem;
        line-height: .62rem;
        // input输入框不用box-sizing: border-box;padding不能正常设置
        box-sizing: border-box;
        padding: 0 .1rem;
        color: #666;
    }
}
</style>
