<template>
  <div class="home">
    <div class="nav">
      <div class="pic">
        <img src="http://localhost:8080/images/image(5).png" alt="">
      </div>
      <div class="list">
        <van-grid :border="false" :column-num="4">
          <van-grid-item>
            <div class="grid-list">
              <van-image
                src="http://localhost:8080/images/image(6).png"
              />
              <p>限时抢购</p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <div class="grid-list">
              <van-image
                src="http://localhost:8080/images/image(4).png"
              />
              <p>登录福利</p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <div class="grid-list">
              <van-image
                src="http://localhost:8080/images/image(7).png"
              />
              <p>优惠卷包</p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <div class="grid-list">
              <van-image
                src="http://localhost:8080/images/image(2).png"
              />
              <p>推荐新品</p>
            </div>
          </van-grid-item>
        </van-grid>

      </div>
      <div class="imageList">
        <div class="left">
          <img src="http://localhost:8080/images/image(8).png" alt="">
        </div>
        <div class="right">
          <img src="http://localhost:8080/images/image(3).png" alt="">
          <img src="http://localhost:8080/images/image(9).png" alt="">

        </div>
      </div>
      <div class="text">
        <span>——更多好礼送给您——</span>
        <h4>限时抢购</h4>
        <span>——抓紧时间抢购啦——</span>
      </div>
      <div class="gou">
        <div class="imageU">
          <img src="http://localhost:8080/images/image(10).png" alt="">
        </div>
        <div class="flexU">
          <div class="gouL">
            <p class="p1">活动时间：2022.08.20-2020.09.01</p>
            <p class="p2">秒杀价<span>￥9.9</span>每个ID限购一次</p>
          </div>
          <div class="gouR">
            <van-button type="danger" class="btn" round=true>立即抢购</van-button>
          </div>
        </div>
      </div>
      <div class="gou">
        <div class="imageU">
          <img src="http://localhost:8080/images/image(11).png" alt="">
        </div>
        <div class="flexU">
          <div class="gouL">
            <p class="p1">活动时间：2022.08.20-2020.09.01</p>
            <p class="p2">秒杀价<span>￥9.9</span>每个ID限购一次</p>
          </div>
          <div class="gouR">
            <van-button type="danger" class="btn" round=true>立即抢购</van-button>
          </div>
        </div>
      </div>
      <div class="gou">
        <div class="imageU">
          <img src="http://localhost:8080/images/image(1).png" alt="">
        </div>
        <div class="flexU">
          <div class="gouL">
            <p class="p1">活动时间：2022.08.20-2020.09.01</p>
            <p class="p2">秒杀价<span>￥9.9</span>每个ID限购一次</p>
          </div>
          <div class="gouR">
            <van-button type="danger" class="btn" round=true>立即抢购</van-button>
          </div>
        </div>
      </div>
      <!-- 底部栏 -->

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue';
import {home_http} from '@/api/httpHome'
export default defineComponent({
  name: 'HomeView',
  components: {
  },
  setup(){
    async function gethome(){
      let {data}=await home_http()
      console.log(data)
    }
    gethome()

  }
});
</script>
<style lang="scss" scoped>
.home{
  .nav{
    .pic{
      width:375px;
      height:296px;
      background: red;
      img{
        width:100%;
        height:100%;
      }
    }
    
  }
  .list{
    .grid-list{
      padding:10px;
      p{
        font-size:14px;
      }
    }
  }
  .imageList{
    display: flex;
    height:200px;
    padding:0 10px;
    justify-content: space-between;
    .left{
      width:48%;
      img{
        width:100%;
        height:100%;
      }
    }
    .right{
      width:48%;
      img{
        width:100%;
        height:49%;
      }
    }
  }
  .text{
    height:40px;
    display: flex;
    font-size:12px;
    padding:10px;
    justify-content: space-between;
    align-items: center;
    h4{
      font-size:16px;
    }
  }
  .gou{
    padding:10px;
    .imageU{
      width:100%;
      img{
        width:100%;
        height:100%;
      }
    }
    .flexU{
      display: flex;
      justify-content: space-between;
      .p1{
        font-size:14px;

      }
      .p2{
        font-size:12px;
        span{
          color:red;
          font-size:18px;
        }
      }
      .gouR{
        .btn{
          height:30px;
        }
      }
    }
  }
  padding-bottom:50px;
}

</style>
