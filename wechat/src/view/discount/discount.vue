<template>
  <div class="discounts">
    <div class="discountbackground"></div>
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
  name: "Discount",
  data() {
    return {};
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.discountbackground {
  position: absolute;
  width: 100%;
  height: 827px;
  background-color: rgb(0, 0, 0, 0.4);
}
.discounts {
  width: 100%;
  height: 100%;

}

.discount1 {
  height: 250px;
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.discount2 {
  height: 157px;
  width: 100%;
  margin-top: -15px;
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.discount3 {
  height: 450px;
  width: 100%;
  margin-top: -15px;
  background-size: 100% auto;
  background-repeat: no-repeat;
}

.getcoupons {
  width: 150px;
  height: 150px;
}
.product img {
  margin: 10%;
  width: 80%;
  height: 45%;
  margin-top: -600px;
  position: fixed;
  display: block;
}
</style>
