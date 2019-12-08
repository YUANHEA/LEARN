<template>
  <div id="app">
    <!-- router-view显示的是当前路由地址所对应内容 -->
    <!-- 当前路由地址对应内容为helloworld小组件 -->
    <!-- 当前路由地址怎么找？到父组件中看router，会再找到router文件夹中index.js文件中路由配置项，就能知道路由地址对于内容 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
