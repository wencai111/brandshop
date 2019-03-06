<template>
  <div class="myproduct">
    <div class="products"> 
      <a href>
        <img src="@/assets/detial/01.jpg">
      </a>
    </div>
    <div class="products">
      <a href>
        <img src="@/assets/detial/02.jpg">
      </a>
    </div>
    <div class="products">
      <img src="@/assets/detial/03.jpg">
    </div>
    <div class="products">
      <img src="@/assets/detial/04.jpg">
    </div>
    <div class="products">
      <img src="@/assets/detial/05.jpg">
    </div>
    <div class="products">
      <img src="@/assets/detial/03.jpg">
    </div>
    <div class="products">
      <img src="@/assets/detial/06.jpg">
    </div>
    <div class="products">
      <img src="@/assets/detial/07.jpg">
    </div>
    <div class="products">
      <img src="@/assets/detial/08.jpg">
    </div>
    <div class="products">
      <img src="@/assets/detial/09.jpg">
    </div>
    <div class="products">
      <img src="@/assets/detial/10.jpg">
    </div>
    <div class="products">
      <img src="@/assets/detial/11.jpg">
    </div>
    <div class="boutique">
      <img src="@/assets/detial/12.jpg">
    </div>

   <div class="goumai">
     <router-link to='purchase'>
      <img src="@/assets/detial/buynow.jpg">
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name:"Prodict",
  data(){
    return{
        goumai:"",  
    }
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.product{
  width: 100%;
  height: auto;
}
.products{
  margin-top: -5px;
}
.myproduct img{
  width: 100%;
}
.goumai img{
  width: 50%;
  height: 50px;
  float: right;
}
</style>
