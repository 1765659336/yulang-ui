<template>
  <div class="packages-yulang-button-container">
    <div v-if="inactiveText" :style="TextClass">{{ inactiveText }}</div>
    <div :class="ButtonClass" :style="bgClassLogic" @click="changeVal">
      <div class="circle" :class="circleClass"></div>
    </div>
    <div v-if="activeText" :style="TextClass">{{ activeText }}</div>
  </div>
</template>

<script>
export default {
  name: "yulang-switch",
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    inactiveColor: {
      type: String,
      default: "#ff4949",
    },
    activeColor: {
      type: String,
      default: "#13ce66",
    },
    inactiveText: {
      type: String,
    },
    activeText: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    // 需要双向绑定的 props 变量名称，也就是父组件通过 v-model 与子组件双向绑定的变量
    prop: "value",
    // 定义由 $emit 传递变量的名称
    event: "newValue",
  },
  computed: {
    // 按钮的class样式
    ButtonClass() {
      return {
        ButtonClassCommon: true,
        ButtonClassAble: !this.disabled,
        ButtonClassDisabled: this.disabled,
      };
    },
    // 背景颜色style样式
    bgClassLogic() {
      return this.value
        ? { backgroundColor: this.activeColor }
        : { backgroundColor: this.inactiveColor };
    },
    valueComputed: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("newValue", newValue);
        this.$emit("change", newValue);
      },
    },
    // 提示文字颜色
    TextClass() {
      return this.valueComputed
        ? { color: this.activeColor }
        : { color: this.inactiveColor };
    },
    // 内部圆点
    circleClass() {
      return {
        circleSuccess: this.valueComputed,
        circleFail: !this.valueComputed,
      };
    },
  },
  methods: {
    // 修改选中状态
    changeVal() {
      !this.disabled && (this.valueComputed = !this.valueComputed);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
