<template>
  <div class="index">
      <DetailBanner></DetailBanner>
      <DetailHeader></DetailHeader>
      <div class="h"></div>
  </div>
</template>

<script>
import DetailBanner from './component/banner'
import DetailHeader from './component/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style>
.index{
  /* transform: none; */
}
.h{
    height: 50rem;
}
</style>
