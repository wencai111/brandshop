<template>
    <div class="confirms">
        <router-link to='my-site'>
       <div class="dizi">
        <img src="@/assets/goods/withoutaddress.jpg" > 
        <img src="@/assets/goods/u62.jpg">
        </div>
        </router-link>
        <div class="order1">
            <span>订单信息</span>
        <nav class="border"></nav>
         <img src="@/assets/1goodsku/1.jpg">
        </div>
        <div>
        <P class="wnezi">
         <span>  欧标ISOFIX硬接口</span><br/><br/>
           <span class="price">{{sold}}</span>
        </p>
        </div>
        <div class="distribution">
            <span>配送方式</span>
            <span class="exemption">包邮</span>
        </div>
        <div class="distribution">
            <span> 店铺优惠</span>
            <span class="exemptions">{{coupon}}</span>
        </div>
        <div class="bottom">
            <div class="bottoms">
            <span>应付金额：</span>
            <span class="jinge">{{jinge}}</span>
            </div>
            <router-link to=''>
            <div class="img">
            <img src="@/assets/goods/buyconfirm.jpg">
            </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:"Confirm",
    data(){
      return{
          sold:"￥50",
          jinge:"￥40",
          coupon:"省10元：10元优惠券",
      }
    }
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
.dizi img{
    width: 100%;
    min-width: 100%;
}
.order1 span{
    margin: 10px;
    font-size: 16px;
    margin-left: 20px;
}
.border{
    border: 0.5px solid rgb(99, 97, 97);
    margin: 10px;
    width: 100%;
}
.order1 img{
    width: 150px;
    margin-left: 20px;
}
.wnezi{
    float: left;
    margin-left: 200px;
    margin-top: -100px;
    font-size: 14px;
}
.price{
    color: red;
    font-size: 16px
}
.distribution{
    margin: 20px;
    width: 100%;
    height: 30px;
    font-size: 16px;
}
.exemption{
    margin-left: 60%;
}
.exemptions{
    margin-left: 35%; 
}
.bottom{
    position:absolute;
    width:50%;
    bottom:0;
    height: 30px;
    font-size: 14px;
    margin-left: 10%;
    float: left; 
}

.jinge{
color: red;
}
.img{
    position:absolute;
    width:100%;
    bottom:0;
    height: 40px;
   float: right;
}
.img img{
    height: 100%;
    width: 100%;
    margin-left: 80%;
}
</style>


