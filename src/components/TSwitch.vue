<template>
  <label class="t-switch" :class="{'is-checked': value}" @click="handleClick">
    <span class="t-switch_core" ref="core">
      <span class="t-switch_button"></span>
    </span>
  </label>
</template>

<script>
export default {
  name: "TSwitch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleClick() {
      this.$emit("input", !this.value);
      // 等待value发生了变化再改变颜色
      this.$nextTick().then(() => this.setColor());
      // 点击还需要修改颜色
      this.setColor();
    },
    setColor() {
      // 修改开关颜色
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    }
  },
  mounted() {
    this.setColor();
  }
};
</script>

<style lang="scss" scoped>
.t-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .t-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .t-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

// 选中样式
.is-checked {
  .t-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .t-switch_button {
      transform: translateX(20px);
    }
  }
}
</style>