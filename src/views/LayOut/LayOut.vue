<template>
  <div>
      <!-- 主题内容 -->
      <router-view></router-view>
      <!-- 底部tabber -->
      <TabBar/>
  </div>
</template>

<script lang="ts" setup>
import TabBar from '@/components/tabbar/TabBar.vue'

</script>

<style>

</style>