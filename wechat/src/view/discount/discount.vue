<template>
  <div class="discounts">
    <div
      class="discount1"
      v-bind:style="{backgroundImage:'url('+require('../../assets/goods/goods-banner.jpg')+')'}"
    ></div>
    <div
      class="discount2"
      v-bind:style="{backgroundImage:'url('+require('../../assets/goods/goods-coupon.jpg')+')'}"
    ></div>
    <div
      class="discount3"
      v-bind:style="{backgroundImage:'url('+require('../../assets/goods/goods-index.jpg')+')'}"
    ></div>
    <div class="product">
      <img src="@/assets/goods/getcoupon.jpg">
    </div>
  </div>
</template>
<script>
export default {
  name:"Discount",
  data(){
   return{

   }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.discounts {
  width: 100%;
  height: 100%;
}

.discount1 {
  height: 250px;
  background-size: 100% auto;
  filter: grayscale(60%);
  background-repeat: no-repeat;
}
.discount2 {
  height: 157px;
  width: 100%;
  margin-top: -15px;
  filter: grayscale(60%);
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.discount3 {
  height: 400px;
  width: 100%;
  filter: grayscale(60%);
  margin-top: -15px;
  background-size: 100% auto;
  background-repeat: no-repeat;
}

.getcoupons {
  width: 150px;
  height: 150px;
}
.product {
  margin-left: 10%;
}
.product img {
  width: 300px;
  height: 300px;
  margin-top: -500px;
  position: fixed;
  display: block;
}
</style>
