<template>
  <div class="t-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TCheckboxGroup",
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  provide() {
    return {
      CheckboxGroup: this
    };
  }
};
</script>

<style lang="scss" scoped>
</style>