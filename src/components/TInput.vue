<template>
  <div class="t-input" :class="{'t-input_suffix': showSuffix}">
    <!-- 如果传了showPassword属性，判断是否需要切换密码显示和隐藏；如果不传入showPassword不判断直接赋值type -->
    <input
      class="t-input_inner"
      :class="{'is-disabled':disabled}"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :minlength="minlength"
      :maxlength="maxlength"
      :value="value"
      @input="handleInput"
    />
    <span class="t-input_suffix" v-if="showSuffix">
      <i class="t-input_icon t-icon-cancel" v-if="value && clearable" @click="clear"></i>
      <i
        class="t-input_icon t-icon-eye_protection"
        v-if="showPassword"
        :class="{'t-icon-eye_protection-active':passwordVisible}"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "TInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    minlength: {
      type: Number
    },
    maxlength: {
      type: Number
    },
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    }
  },
  data() {
    return {
      // 是否显示密码
      passwordVisible: false
    };
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
    // 清空input内容
    clear() {
      this.$emit("input", "");
    },
    //显示隐藏密码
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    }
  }
};
</script>

<style lang="scss">
.t-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .t-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    // transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

// 输入框后缀icon
.t-input_suffix {
  .t-input_inner {
    padding-right: 30px;
  }
  .t-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .t-icon-eye_protection-active {
      color: #409eff;
    }
  }
}
</style>