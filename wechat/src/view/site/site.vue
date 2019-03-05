<template>
  <section>
    <div class="site">
      <div class="take">
        <span class="size">收货人 &emsp;</span>
        <input
          class="text"
          v-bind:style="styleObject"
          type="text"
          v-model="address"
          placeholder="姓名"
        >
        <Icon type="md-person" size="24" color="#1aad19"/>
        <nav class="hr"></nav>
      </div>

      <div class="take">
        <span class="size">手机号码</span>
        <input class="text" type="text" v-model="phone" placeholder="11位手机号">
        <span>
          <i class></i>
        </span>
        <nav class="hr"></nav>
      </div>
      <div class="take">
        <span class="size">地区信息</span>
        <input class="text" type="text" v-model="region" placeholder="地区信息">
        <span>
          <Icon type="md-pin" size="24" color="#1aad19"/>
        </span>
        <nav class="hr"></nav>
      </div>
      <div class="take">
        <span class="size">详细地址</span>
        <input class="text" type="text" v-model="detail" placeholder="街道门牌信息">
        <span>
          <i class></i>
        </span>
        <nav class="hr"></nav>
      </div>
      <div class="take">
        <span class="size">邮政编码</span>
        <input class="text" type="text" v-model="code" placeholder="邮政编码">
        <span>
          <i class></i>
        </span>
        <nav class="hr"></nav>
      </div>
      <div class="button">
        <a
          href="javascript:;"
          class="weui-btn weui-btn_primary"
          v-bind:class="{'weui-btn_disabled':noneSubmit}"
          v-on:click="affirm"
        >提交</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Site",
  data() {
    return {
      address: "", //收货人
      phone: "", //手机号码
      region: "", //地区信息
      detail: "", //详细地址
      code: "", //邮政编码
      styleObject: ""
    };
  },
  computed: {
    noneSubmit: function() {
      if (
        this.address &&
        this.address != "" &&
        this.phone &&
        this.phone != "" &&
        this.region &&
        this.region != "" &&
        this.detail &&
        this.detail != "" &&
        this.code &&
        this.code != ""
      ) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px auto;
}
.ivu-icon-md-pin:before {
  margin-left: 5px;
}
.site {
  width: 90%;
  overflow: auto;
  margin-left: 5%;
}
.take {
  margin-top: 20px;
  text-align: left;
  position: relative;
}
.take img {
  width: 30px;
  float: right;
  margin-right: 20px;
}
.size {
  font-size: 1.3em;
  font-weight: bold;
  margin: 10px;
  width: 100%;
}
.text {
  height: 2em;
  border: none;
  outline: none;
  text-align: left;
  margin: 0px 30px;
  width: 30%;
  font-size: 1em;
}
.hr {
  border: 1px solid #c0c0c0;
  width: 100%;
}
.icon-teacher:before {
  position: absolute;
  right: 10%;
}
.button {
  width: 90%;
  height: 90%;
  margin-top: 50px;
  margin-left: 5%;
}
</style>