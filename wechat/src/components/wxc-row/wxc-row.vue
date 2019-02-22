<template>
  <div>
    <div>
      <ul>
       <li v-for="item in audios" v-html="item" v-bind:key="item"></li>
      </ul>
    </div>
        <div ref="dom" style="display:none;">
          <slot></slot>
        </div>
  </div>
</template>

<script>
export default {
  name: "Wxcrow",
  data: function() {
    return {
      audios:[]
    };
  },
  mounted() {
    this.initDom();
  },
  methods: {
    initDom() {
      var dom=this.$refs.dom.children;
        if(dom.length>0){
          for(let item of dom){
        this.audios.push(item.outerHTML);
      }
        }
        else{

        }
        
      
    }
  }
};
</script>

