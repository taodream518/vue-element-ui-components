
<template>
  <label class="t-checkbox" :class="{'is-checked':isChecked}">
    <span class="t-checkbox_input">
      <span class="t-checkbox_inner"></span>
      <input
        type="checkbox"
        class="t-checkbox_original"
        :name="name"
        v-model="model"
        :value="label"
      />
    </span>
    <span class="t-checkbox_label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "TCheckbox",
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    }
  },
  inject: {
    CheckboxGroup: {
      default: ""
    }
  },
  computed: {
    isGroup() {
      return !!this.CheckboxGroup;
    },
    isChecked() {
      // 如果被CheckboxGroup包裹，model为数组，并判断label是否在model数组中，否则model为布尔值，直接使用
      return this.isGroup ? this.model.includes(this.label) : this.model;
    },
    model: {
      get() {
        // 被CheckboxGroup包裹就拿CheckboxGroup上v-model绑定的value,否则拿Checkbox上v-model绑定的value
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.CheckboxGroup.$emit("input", value) // 被CheckboxGroup包裹就发射CheckboxGroup的input事件，再value值传过去
          : this.$emit("input", value); // 不被CheckboxGroup包裹就发射自身Checkbox的input事件，再value值传过去
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.t-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .t-checkbox_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .t-checkbox_inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s, cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #ffffff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(1);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .t-checkbox_original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .t-checkbox_label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// 选中的样式
.t-checkbox.is-checked {
  .t-checkbox_input {
    .t-checkbox_inner {
      background-color: #409eff;
      border-color: #409eff;
    }
    &:after {
      transform: rotate(45deg) scaleY(1);
    }
  }
  .t-checkbox_label {
    color: #409eff;
  }
}
</style>