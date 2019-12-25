// store仓库中state属性值的提取文件
// 作用，保存从state属性提取的属性值，简化store/indexed.js文件中state属性代码
// eslint-disable-next-line no-unused-vars
let defaultCity = '北京'
try {
  if (localStorage.city) {
    // 将本地缓存赋值给目标量
    defaultCity = localStorage.city
  }
} catch (e) {

}
export default {
  city: defaultCity
}
