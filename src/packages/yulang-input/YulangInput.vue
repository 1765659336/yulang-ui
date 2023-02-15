<template>
  <div class="package-yulang-input-container">
    <div v-if="type !== 'textarea'">
      <div class="prefix-icon-container">
        <slot name="prefix">
          <i v-if="prefixIcon" :class="['iconfont', prefixIcon]"></i>
        </slot>
      </div>
      <input
        :class="inputClassComputed"
        :type="showPassword && !isShowPassword ? 'password' : type"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="valueComputed"
        @input="valueComputedInput"
      />
      <div class="suffix-icon-container">
        <i
          class="iconfont icon-guanbi"
          v-show="iconIsShow"
          @click="clearValue"
        ></i>
        <i
          class="iconfont icon-yanjing"
          v-if="showPassword"
          v-YulangLongClick="passwordEyeClick"
        ></i>
        <slot name="suffix">
          <i v-if="suffixIcon" :class="['iconfont', suffixIcon]"></i>
        </slot>
      </div>
    </div>
    <textarea
      v-else
      class="textarea"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      :value="valueComputed"
      @input="valueComputedInput"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "yulang-input",
  props: {
    value: {},
    // 输入框的类型
    type: {
      type: String,
      default: () => {
        return "text";
      },
    },
    // 提示文本
    placeholder: {
      default: "请输入",
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否可清空
    clearable: {
      type: Boolean,
      default: false,
    },
    // 是否是密码框
    showPassword: {
      type: Boolean,
      default: false,
    },
    // 后缀图标类名
    suffixIcon: {
      type: String,
    },
    // 前缀图标类名
    prefixIcon: {
      type: String,
    },
    // 文本域的高度
    rows: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      isShowPassword: false,
    };
  },
  computed: {
    // 双向绑定外部传入的值
    valueComputed: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    // input动态class类名
    inputClassComputed() {
      return {
        input: true,
        "input-disabled": this.disabled,
      };
    },
    // icon是否显示
    iconIsShow() {
      console.log(this.disabled, this.clearable);
      return this.valueComputed && !this.disabled && this.clearable;
    },
  },
  methods: {
    resetFields() {
      this.valueComputed = null;
    },
    valueComputedInput(e) {
      this.valueComputed = e.target.value;
    },
    // 清除icon点击事件
    clearValue() {
      this.valueComputed = null;
    },
    // 密码眼图标点击事件
    passwordEyeClick(type) {
      this.isShowPassword = type === "down";
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
