import Vue from 'vue'
import Vuex from 'vuex'
// vue通过vue.use(插件名)用插件
Vue.use(Vuex)
// 暴露，通过vuex创建store仓库，
export default new Vuex.Store({
  // 数据池
  state: {
    // 公共数据量
    city: '上海'
  },
  actions: {
    changeCity (ctx, dat) { // ctx为上下文，能通过ctx调用commit方法
      ctx.commit('changeCity', dat)
    }
  },
  mutations: {
    changeCity (state, dat) {
      state.city = dat
    }
  }
})
