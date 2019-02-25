<template>
  <div>
      <Row>
          <i-col span=12>
              <slot></slot>
      </i-col>
      </Row>
  </div>
</template>

<script>
export default {
  name: "Demo",
  props: {
    message: {
        default:"我是来自父级组件的值"
    }
  },
  data: function() {
    return {
      count: 0
    };
  }
};
</script>

