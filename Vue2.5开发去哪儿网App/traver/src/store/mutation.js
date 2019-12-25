// store仓库中mutations属性值的提取文件
// 作用，保存从mutations属性提取的属性值，简化store/indexed.js文件中mutations属性代码
export default {
  changeCity (state, dat) {
    state.city = dat
    // 用localStorage将state中数据缓存到本地
    // 将数据量赋值给localStorage.数据量。将数据量缓存到本地
    // 给localStorage赋值外面设置trycatch
    try {
      localStorage.city = dat
    } catch (error) {

    }
  }
}
