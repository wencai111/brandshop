<template>
  <div>
    <Demo>
        <li v-for="item in menus" v-bind:key="item">
            <a>{{item}}</a>
        </li>
    </Demo>
    <i-button type="primary">Primary</i-button>
  </div>
</template>

<script>
import Demo from "@/components/demo";
export default {
  name: "Test",
  data() {
    return {
        menus:["首页","服务","关于我们"]
    };
  },
  components: {
    Demo
  }
};
</script>
