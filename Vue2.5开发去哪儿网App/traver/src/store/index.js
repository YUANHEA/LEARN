// store仓库文件
// 作用
// 1、通过vuex创建store仓库，数据池，公共数据量。
// 2、设置全局数据量缓存
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutation from './mutation'
// vue通过vue.use(插件名)用插件
Vue.use(Vuex)
// --------------------------设置本地缓存----------------------------
// 暴露，通过vuex创建store仓库，
// export default new Vuex.Store({
//   // 数据池
//   state: {
//     // 公共数据量
//     // city: '上海'
//     // 将本地缓存赋值给目标量
//     city: localStorage.city || '上海'
//   },
//   actions: {
//     changeCity (ctx, dat) { // ctx为上下文，能通过ctx调用commit方法
//       ctx.commit('changeCity', dat)
//     }
//   },
//   mutations: {
//     changeCity (state, dat) {
//       state.city = dat
//       // 用localStorage将state中数据缓存到本地
//       // 将数据量赋值给localStorage.数据量。将数据量缓存到本地
//       localStorage.city = dat
//     }
//   }
// })
// eslint-disable-next-line no-unused-vars
// -------------------------给localStorage赋值外面设置trycatch----------------------------------
// let defaultCity = '北京'
// try {
//   if (localStorage.city) {
//     // 将本地缓存赋值给目标量
//     defaultCity = localStorage.city
//   }
// } catch (e) {

// }
// export default new Vuex.Store({
//   // 数据池
//   state: {
//     city: defaultCity
//   },
//   actions: {
//     changeCity (ctx, dat) { // ctx为上下文，能通过ctx调用commit方法
//       ctx.commit('changeCity', dat)
//     }
//   },
//   mutations: {
//     changeCity (state, dat) {
//       state.city = dat
//       // 用localStorage将state中数据缓存到本地
//       // 将数据量赋值给localStorage.数据量。将数据量缓存到本地
//       // 给localStorage赋值外面设置trycatch
//       try {
//         localStorage.city = dat
//       } catch (error) {

//       }
//     }
//   }
// })
// let defaultCity = '北京'
// try {
//   if (localStorage.city) {
//     // 将本地缓存赋值给目标量
//     defaultCity = localStorage.city
//   }
// } catch (e) {

// }
// -------------------对象值内容过长，提取到单独文件中暴露。再导入，赋值-------------------------
export default new Vuex.Store({
  // 数据池
  state: state,
  actions: {
    changeCity (ctx, dat) { // ctx为上下文，能通过ctx调用commit方法
      ctx.commit('changeCity', dat)
    }
  },
  mutations: mutation,
  // 利用state中公共量进行计算
  // Vuex,store中getters相当computed计算,避免冗余计算
  getters: {
    doubleCity (state) {
      return state.city + '' + state.city
    }
  }
})
