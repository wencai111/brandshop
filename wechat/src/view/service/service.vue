
<template>
  <div id="app">
    <p>{{message}}</p>
    <button type="button" v-on:click="q">客服</button>
    <article>
      <div class="ban" v-bind:style="{backgroundImage:'url('+require('../../assets/upload/main/course2.jpg')+')'}"
        ></div>
    </article>
    <!-- <div>
      <input type="text" v-on:input="wd">
    </div> -->
  </div>
</template>
<script>
export default {
  name: "service",
  data() {
    return {
      message: "hello!"
    };
  },
  methods: {
    q: function() {
      alert("您好！");
    }
  },
  //   methods: {
  //   wd: function(event) {
  //    this.message=event.target.value;
  //   }
  // }
};
</script>
<style>
#app {
  color: red;
}
.ban{
  width: 100px;
  height: 100px;
  background-size: cover;
  border-radius: 50%;
}
</style>