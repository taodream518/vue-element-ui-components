<template>
  <div class="t-form-item">
    <label :style="labelStyle" class="t-form-item_label">{{label}}</label>
    <div class="t-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TFormItem",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  computed: {
    labelStyle() {
      return {
        width: this.Form.labelWidth
      };
    }
  },
  inject: ["Form"]
};
</script>

<style lang="scss" scoped>
.t-form-item {
  margin-bottom: 25px;
  .t-form-item_label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .t-form-item_content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>