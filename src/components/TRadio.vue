<template>
  <label class="t-radio" :class="{'is-checked': label === model}">
    <span class="t-radio_input">
      <span class="t-radio_inner"></span>
      <input type="radio" class="t-radio_original" :value="label" :name="name" v-model="model" />
    </span>
    <span class="t-radio_label">
      <slot></slot>
      <!-- 如果没有传内容，把label的值当成内容 -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "TRadio",
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    value: null,
    name: {
      type: String,
      default: ""
    }
  },
  inject: {
    RadioGroup: {
      default: ""
    }
  },
  computed: {
    // 双向绑定一个计算属性必须提供set和get(对象形式)
    model: {
      get() {
        // 如果radio被radioGroup包裹，返回radioGroup用v-model绑定的value；
        // 如果radio没有被radioGroup包裹，则返回radio组件中的props的value(即label)
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        // 更改父组件的value,需要触发父组件的input事件
        this.$emit("input", value);
        this.isGroup
          ? this.RadioGroup.$emit("input", value)
          : this.$emit("input", value);
      }
    },
    // 用于判断radio组件是否被radioGroup组件所包裹
    isGroup() {
      return !!this.RadioGroup;
    }
  }
};
</script>

<style lang="scss" scoped>
.t-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .t-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .t-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .t-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .t-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.t-radio.is-checked {
  .t-radio_input {
    .t-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .t-radio_label {
    color: #409eff;
  }
}
</style>