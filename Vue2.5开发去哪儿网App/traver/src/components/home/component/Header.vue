<template>
  <div class="header">
      <div class="header-left">
        <span class="iconfont">&#xe618;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe609;</span>
        输入城市/景点/游玩主题
      </div>
      <div class="header-right">
        <span class="iconfont">
          &#xe64a;
        </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
// 用scss管理css，为了不让本组件样式影响其它组件，用scoped特性
<style lang="scss" scoped>
@import '~style/scss/_valiable.scss';
// 确定父容器大小，子元素大小和位置
// rem计算
// 设计稿为2X,那么html根元素中fontsize:50px写为100px一半，这样就能直接.xrem
// height计算
// height=line-height-margintop&bottom
// 布局
// flex+rem布局
// 父级display: flex;,设置flex布局
// 子级flex：n,控制空间占比
// 子级如果需要固定位置，用float: left/right;
  .header{
    display: flex;
    line-height: .86rem; // line-heigth设置在父容器，让容器里面内容垂直居中
    background-color: $bgColor;
    color: #fff;
    &-left{
      width: .64rem;
      float: left;
    }
    &-input{
      flex: 1;
      margin-top: .12rem;
      margin-left: .2rem;
      // margin-bottom: .12rem;
      line-height: .62rem;
      height: .62rem;
      background-color: #fff;
      border-radius: .1rem;
      color: #ccc;
    }
    &-right{
      width: 1.24rem;
      float: right;
      text-align: center;
    }
  }
</style>
