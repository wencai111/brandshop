<template>
<div>
<div class="add">+</div>
<div class="mysite">
  <div class="site">
    <span id="name">{{name}}</span>
    <span id="name">，{{phone}}</span>
  </div>
  <div class="region">
       <span id="region">{{region}}</span>
  </div>
  <nav class="hr"></nav>
  </div>
  </div>
</template>
<script>
export default {
  name: "MySite",
  data() {
    return {
      name: "马伏赟",
      phone:"15272149054",
      region:"湖北省 武汉市 洪山区 明泽"
    };
  }
};
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
.add{
  float: right;
  font-size:35px;
  margin: 10px;
  margin-top: -30px;
}
.mysite{
    margin-left: 10px;
     margin-top: 30px;
}
.site{
    font-size: 18px;
    font-weight:bold;
    margin: 10px;
}
.region{
    color: rgba(49, 43, 43, 0.281);
    font-size: 16px;
     font-weight:bold;
    margin-bottom: 10px;
}
.hr{
    border: 0.5px solid rgba(116, 113, 113, 0.281);;
    width: 100%;
}
</style>

