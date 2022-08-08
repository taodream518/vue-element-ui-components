<template>
  <div class="t-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TRadioGroup",
  // provide 和 inject用于子孙间通讯（一般用于开发高阶组件和UI组件库）
  provide() {
    return {
      RadioGroup: this
    };
  },
  props: {
    // 该value的作用是：接收v-model传过来的value，还要触发当前组件的input事件
    value: null
  }
};
</script>