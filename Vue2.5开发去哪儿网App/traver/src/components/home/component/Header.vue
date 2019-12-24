<template>
  <div class="header">
      <!-- <div class="header-left">
        <span class="iconfont">&#xe618;</span>
        将span改div，显示display:block,占据空间大些
        <div class="iconfont back-icon">&#xe618;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe609;</span>
        输入城市/景点/游玩主题
      </div>
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">
          &#xe64a;
        </span>
      </div> -->
      <me-navbar>
          <div class="iconfont back-icon header-left" slot="left">&#xe618;</div>
          <div class="header-input" slot="center"><span class="iconfont">&#xe609;</span>输入城市/景点/游玩主题</div>
          <router-link to="./city" slot="right">
            <div class="header-right" >
              <!-- {{city}} -->
              <!-- 获取公共数据量 -->
              {{this.$store.state.city}}
              <span class="iconfont arrow-icon">
                &#xe64a;
              </span>
            </div>
          </router-link>
      </me-navbar>
  </div>
</template>

<script>
import MeNavbar from 'base/navbar'
export default {
  name: 'HomeHeader',
  // 不通过接收组件传值，用公共数据量
  // props: {
  //   city: {
  //     type: String
  //   }
  // },
  components: {
    MeNavbar
  }
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
// 未分离基础组件版
// .header{
// display: flex;
// line-height: .86rem; // line-heigth设置在父容器，让容器里面内容垂直居中
// background-color: $bgColor;
// color: #fff;
// &-left{
//   width: .64rem;
//   float: left;
//   .back-icon{
//     text-align: center;
//   }
// }
// &-input{
//   flex: 1;
//   margin-top: .12rem;
//   margin-left: .2rem;
//   // margin-bottom: .12rem;
//   line-height: .62rem;
//   height: .62rem;
//   background-color: #fff;
//   border-radius: .1rem;
//   color: #ccc;
//   padding-left: .1rem;
// }
// &-right{
//   width: 1.24rem;
//   float: right;
//   text-align: center;
//   .arrow-icon{
//     margin-left: -.01rem;
//     font-size: .24rem; // 对于图标字体大小调整，用fontsize，因为本质就是font字体
//   }
// }
// 子级如果需要固定位置，用float: left/right;
  .header{
    // background-color: $bgColor;
    // color: #fff;
    &-left{
      width: .64rem;
      text-align: center;
    }
    &-input{
      // flex: 1;
      // margin-top: .12rem;
      margin-top: 0;
      margin-bottom: 0;
      margin-left: .2rem;
      // margin-bottom: .12rem;
      line-height: .62rem;
      height: .62rem;
      background-color: #fff;
      border-radius: .1rem;
      color: #ccc;
      padding-left: .1rem;
    }
    &-right{
      width: 1.24rem;
      text-align: center;
      color: #fff;
    }
  }
</style>
