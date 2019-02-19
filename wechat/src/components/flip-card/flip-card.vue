<template>
  <div v-bind:class="pagination?'flipCardComponent pagination':'flipCardComponent'">
    <ul ref="list" v-on:touchmove="onTouchMove" v-on:touchstart="onTouchStart" v-on:touchend="onTouchEnd">
      <li v-for="(item,i) of listArry"  v-html="item.el" v-bind:class="item.status" v-bind:style="item.style"></li>
    </ul>
    <div class="pagination" v-if="pagination">
      <span v-for="(item,i) of listArry" v-bind:class="item.status=='active'?'active':''" v-if="pageCtrl.pageLength==1"></span>
      <span v-for="(item,i) of listArry" v-bind:class="item.status=='active'?'active':''" v-if="pageCtrl.pageLength>1&&i>0&&i<pageCtrl.pageLength-1"></span>
    </div>
    <div ref="domSave" style="display:none">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlipCard',
  props: {
    "can-touch":{
      default:true
    },
    pagination:{
      default:true
    }
  },
  data(){
  	return{
      listArry:[],
      pageCtrl:{
        currentPage:1,
        pageLength:0,
        locked:false,
      },
      touch:{
        startPoint:null,
        preventStart:null,
        valume:0,
        theardhold:15,
      }
  	}
  },
  mounted(){
    this.initDom();
  },
  methods:{
    initDom(){
      this.listArry = [];
      let domArray = this.$refs.domSave.children;
      this.pageCtrl.pageLength = (domArray.length==1)?1:domArray.length+2;
      if(domArray.length>0){
        for(let item of domArray){
          this.listArry.push({el:item.innerHTML,status:'hide',style:{}});
        }
        if(domArray.length>1){
          this.listArry.unshift({el:domArray[domArray.length-1].innerHTML,status:'hide',style:{}});
          this.listArry.push({el:domArray[0].innerHTML,status:'hide',style:{}});
          this.goPage(1);
        }else{
          this.pageCtrl.currentPage = 0;
          this.goPage(0);
          this.pageCtrl.locked = true;
        }
      }
    },
    goPage(page){
      this.pageCtrl.currentPage = page;
      for(let item of this.listArry){
        item.status='hide';
        item.style={}
      }
      this.listArry[page].status='active';
      this.listArry[page-1].status='prev';
      this.listArry[page+1].status='next';
    },
    onTouchStart(event){
      if(!this.canTouch){return null}
      this.touch.startPoint=event.touches[0].screenX;
      this.touch.preventStart=event.touches[0].screenY;
      this.touch.valume = 0;
    },
    onTouchMove(event){
      if(!this.canTouch){return null}
      let preventValume = Math.abs(event.touches[0].screenY - this.touch.preventStart);
      if(this.touch.startPoint&&preventValume<10){
        this.touch.valume = event.touches[0].screenX - this.touch.startPoint;
        this.doTouchMoveAnimate();
      }
    },
    onTouchEnd(event){
      if(!this.canTouch){return null}
      this.touch.startPoint=null;
      this.touch.preventStart=null;
      if(this.touch.valume>this.touch.theardhold&&this.pageCtrl.currentPage>1){
          this.goPage(this.pageCtrl.currentPage-1);
          return 'done';
      }else if(this.touch.valume<-this.touch.theardhold&&this.pageCtrl.currentPage<this.pageCtrl.pageLength-2){
          this.goPage(this.pageCtrl.currentPage+1);
          return 'done';
      }
      this.goPage(this.pageCtrl.currentPage);
    },
    doTouchMoveAnimate(){
      let scaleValume = 1-Math.abs(this.touch.valume)/900;
      scaleValume = (scaleValume<0.95)?0.95:scaleValume;
      let overValume = this.touch.valume;
      if(this.touch.valume>this.touch.theardhold){
        overValume = this.touch.theardhold + (this.touch.valume-this.touch.theardhold)/50;
      }else if(this.touch.valume<-this.touch.theardhold){
        overValume = -this.touch.theardhold + (this.touch.valume+this.touch.theardhold)/50;
      }
      this.listArry[this.pageCtrl.currentPage].style={
        transition:'none',
        transform:'translateX('+overValume+'px)scale('+scaleValume+')',
      }
      if(this.listArry[this.pageCtrl.currentPage-1]){
        this.listArry[this.pageCtrl.currentPage-1].style={
          transition:'none',
          transform:'translateX(calc(-12% - '+overValume+'px))scale('+(scaleValume*0.9)+')',
        }
      }
      if(this.listArry[this.pageCtrl.currentPage+1]){
        this.listArry[this.pageCtrl.currentPage+1].style={
          transition:'none',
          transform:'translateX(calc(12% - '+overValume+'px))scale('+(scaleValume*0.9)+')',
        }
      }
    }
  }
}
</script>

<style type="text/css">
  .flipCardComponent{
    display: grid;
    overflow: hidden;
  }
  .flipCardComponent.pagination {
    grid: calc(100% - 60px) 60px /auto;
  }
  .flipCardComponent > ul{
    position: relative;
    list-style: none;
    padding: 0;
  }
  .flipCardComponent > ul > li{
    height: 100%;
    width: 80%;
    position: absolute;
    top: 0;
    left: 10%;
    opacity: 0.6;
    transition: 0.1s;
    list-style: none;
    padding: 0;
    transform: translateZ(-20px)scale(0.8);
    opacity: 0;
  }
  .flipCardComponent > ul > li.prev{
    transform: translateX(-12%)scale(0.9);
    z-index: 0;
    opacity: 0.7;
  }
  .flipCardComponent > ul > li.active{
    z-index: 1;
    opacity: 1;
    transform: translate3d(0,0,0);
  }
  .flipCardComponent > ul > li.next{
    transform: translateX(12%)scale(0.9);
    z-index: 0;
    opacity: 0.7;
  }
  .flipCardComponent .pagination{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flipCardComponent .pagination span{
    display: block;
    position: relative;
    height: 10px;
    width: 10px;
    background-color: #fff;
    margin: 10px;
    border-radius: 50%;
  }
  .flipCardComponent .pagination span:after{
    content: "";
    display: block;
    position: absolute;
    height: 10px;
    width: 10px;
    top: 0px;
    left:0px;
    border: 1px solid #fff;
    border-radius: 50%;
    opacity: 0;
    transition: 0.3s;
  }
  .flipCardComponent .pagination span.active:after{
    height: 18px;
    width: 18px;
    top: -5px;
    left:-5px;
    opacity: 1;
  }
</style>
