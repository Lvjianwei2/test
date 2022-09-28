<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#000"
      @change="onchangefn"
      route="true"
    >
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/fen">分销</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/cart">购物</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router'
let active=ref(0)
let router=useRouter()

// 点击事件，onchange
let onchangefn:(index?:number | string)=>void=function(index?:number | string){
  console.log(index)
  // switch(index){
  //   case 0:router.push("/");break
  //   case 1:router.push("/fen");break
  //   case 2:router.push("/cart");break
  //   case 3:router.push("/mine");break
  // }
}



// export default defineComponent({
//   name: 'TabBar',
//   setup(){
//     let active=ref(0)
//     return {
//         active
//     }
//   }
// });
</script>

<style lang="scss" scoped>

</style>