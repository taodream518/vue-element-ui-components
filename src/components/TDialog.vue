<template>
  <transition name="t-dialog-fade">
    <!-- .self点击自己才触发，点击其子元素不触发 -->
    <div class="t-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <div class="t-dialog" :style="{width:width,marginTop:top}">
        <div class="t-dialog_header">
          <!-- 将span放入slot中可以放文本也可以放样式，标签 -->
          <slot name="title">
            <span class="t-dialog_title">{{ title }}</span>
          </slot>
          <button class="t-dialog_headerbtn" @click="handleClose">
            <i class="t-icon-close"></i>
          </button>
        </div>
        <div class="t-dialog_body">
          <slot></slot>
        </div>
        <div class="t-dialog_footer">
          <!-- 如果footer不传入内容，则不显示footer -->
          <slot name="footer" v-if="$slots.footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TDialog",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    width: {
      type: String,
      default: "50%"
    },
    top: {
      type: String,
      default: "15vh"
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      // 子组件发射了一个update:visible事件出去，父组件应该用@update:visible=事件名接收去修改visible的值。但不需要，直接用
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.t-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .t-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .t-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .t-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .t-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      // 使用 scoped 后，父组件的样式将不会渗透到子组件中。
      // 深度选择器(不会生成一个随机的属性) 希望能够作用得“更深”，例如影响子组件
      ::v-deep .t-button:first-child {
        margin-right: 15px;
      }
    }
  }
}

// 显示 隐藏动画 (transition的name名-enter-active/-leave-active)
.t-dialog-fade-enter-active {
  animation: fade 0.3s;
}
.t-dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>