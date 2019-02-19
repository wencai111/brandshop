<template>
  <div class="boutique">
    <div>
      <router-link to="product">
        <img src="@/assets/goods/goods-banner.jpg">
      </router-link>
    </div>
    <div class="boutique">
      <router-link to="discount">
        <img src="@/assets/goods/goods-coupon.jpg">
      </router-link>
    </div>
    <div class="boutique">
      <router-link to="product">
        <img src="@/assets/goods/goods-index.jpg">
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name:"Boutique",
  data(){
    return{

    }
  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
.boutique {
  margin-top: -5px;
}
</style>

