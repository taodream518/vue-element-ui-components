<template>
  <div class="t-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TForm",
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: "80px"
    }
  },
  provide() {
    return {
      Form: this
    };
  }
};
</script>

<style lang="scss" scoped>
</style>