<template>
  <Tabs value="name1">
    <TabPane label="待付款" name="name1">
    <div v-if="name1.length>0">
    <div class="order" v-for="item in dai" v-bind:key="item.order_on">
        <p>订单号：{{item.order}}</p>
        <nav class="border"></nav>
        <div class="img1" v-for="item in name1" v-bind:key="item.audioID">
            <img :src="item.goods_image">
    </div>
        <div v-for="item in name1" v-bind:key="item.audioID">
        <P class="wnezi">
           <span> {{item.goods_title}}</span>
          <br/><br/>
           <span>{{item.buy_sku}}</span><br/><br/>
           <span class="price">{{item.pay_amount}}</span>
        </p>
        <span class="number">x1</span>
         </div>
        <nav class="border1"></nav>
        <div v-for="item in name1" v-bind:key="item.audioID" class="total"><span>合计：{{item.pay_amount}}</span>
        <button class="deliver" type="button">{{item.values}}</button>
        </div>
      </div>
      </div>
      <div class="information" v-else>
          <img src="@/photo/goods/no-order.png"><br/>
          暂无订单消息</div>
    </TabPane>
    <TabPane label="待发货" name="name2"  >
        <div v-if="name2.length>0">

        </div>
        <div class="information" v-else>
            <img src="@/photo/goods/no-order.png"><br/>暂无订单消息</div>
    </TabPane>
    <TabPane label="待收货" name="name3">
            <div v-if="name3.length>0">
            
        </div>
        <div class="information"  v-else>
            <img src="@/photo/goods/no-order.png"><br/>暂无订单消息</div>
    </TabPane>
    <TabPane label="退换货" name="name4">    
         <div v-if="name4.length>0">
            
        </div>
        <div class="information" v-else>
            <img src="@/photo/goods/no-order.png"><br/>暂无订单消息</div>
        </TabPane>
    <TabPane label="已完成" name="name5"> 
        <div v-if="name5.length>0">
            
        </div>
        <div class="information" v-else>
            <img src="@/photo/goods/no-order.png"><br/>暂无订单消息</div>
    </TabPane>
  </Tabs>
</template>
<script>
export default {
    name: "Order",
    code:0,
    data(){
        return {
            name1:[
                {
                buy_nums:"1",
                buy_sku:"minions Vacation",
                coupon_amount:"0",
                create_time:"",
                express_name:"",
                express_sn:"",
                goods_id:"2",
                goods_image:"/assets/1goodsku/1.jpg",
                goods_price:"2001",
                goods_title:"便捷式安全增高垫",
                openid:"oiFBo5OQY1u4cNCBO4-UpjeyrSf0",
                order_on:"2019021013061110437",
                pay_amount:"5001",
                status:"0",
                total_amount:"5001",
                userid:"10437",
                values:"立即付款",
                },
            ],
            name2:[],
            name3:[],
            name4:[],
            name5:[],
        }
    },
    created(){
        var daii=[{"order":"",products:[{"img":"","name":""}]}];
        this.dai=daii;
    }
};
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
.information{
    margin-top: 50%;
    margin-left: 40%;
}
.information img{
    width: 30px;
    height: 40px;
    margin-left: 9%;
}
.order{
    margin-left: 15px;
}
.order p{
    margin-bottom: 10px;
}
.border
{
    border: 0.5px solid rgb(175, 175, 173);
    width: 100%;
}
.img1{
    height: 100px;
    width: 30%;
    margin: 10px 0px;
    float: left;
}
.img1 img{
     width: 100%;
     height: 100%;
}
.wnezi{
     float: left;
     margin: 10px 20px;
     font-size: 14px;
}
.border1{
    border: 0.5px solid rgb(175, 175, 173);
    width: 100%;
    margin-top: 130px;
}
.price{
    color: red;
    font-size: 16px;
}
.number{
    float: right;
    font-size: 18px;
    margin-top: 90px;
    margin-right: 20px;
}
.total{
 color: red;
 float: left;
 font-size: 16px;
 width: 100%;
 margin-top: 10px;
}
.deliver{
    background-color: white;
    border: 1px solid red;
    width: 100px;
    height: 33px;
    text-align: center;
    color: red;
    float: right;
    margin-right: 20px;
}
</style>