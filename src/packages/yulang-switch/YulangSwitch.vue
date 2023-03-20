<template>
  <div class="packages-yulang-button-container">
    <div
      v-if="inactiveText"
      class="text-inactive text-left"
      :class="value ? '' : 'text-active'"
    >
      {{ inactiveText }}
    </div>
    <div
      :class="[ButtonClass, computedBgColor]"
      :style="bgClassLogic"
      @click="changeVal"
    >
      <div class="circle" :class="circleClass"></div>
    </div>
    <div
      v-if="activeText"
      class="text-inactive text-right"
      :class="value ? 'text-active' : ''"
    >
      {{ activeText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'yulang-switch',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    inactiveColor: {
      type: String,
      // default: () => {
      //   const root = document.querySelector(':root');
      //   return `${getComputedStyle(root).getPropertyValue(
      //     '--yulang-font-color--'
      //   )}`;
      // },
    },
    activeColor: {
      type: String,
      // default: () => {
      //   return 'black';
      // },
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
    prop: 'value',
    // 定义由 $emit 传递变量的名称
    event: 'newValue',
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
      if (this.inactiveColor && this.value) {
        return { backgroundColor: this.activeColor };
      }
      if (this.activeColor && !this.value) {
        return { backgroundColor: this.inactiveColor };
      }
      return {};
    },
    valueComputed: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('newValue', newValue);
        this.$emit('change', newValue);
      },
    },
    // 提示文字颜色
    inactiveTextClass() {
      return (bool) => {
        let showColor = bool === 1 ? this.valueComputed : !this.valueComputed;
        if (this.inactiveColor && showColor) {
          return { color: this.activeColor };
        }
        if (this.activeColor && !showColor) {
          return { color: this.inactiveColor };
        }
      };
    },
    activeTextClass() {
      return (bool) => {
        let showColor = bool === 1 ? this.valueComputed : !this.valueComputed;
        if (this.inactiveColor && showColor) {
          return { color: this.activeColor };
        }
        if (this.activeColor && !showColor) {
          return { color: this.inactiveColor };
        }
      };
    },
    // 内部圆点
    circleClass() {
      return {
        circleSuccess: this.valueComputed,
        circleFail: !this.valueComputed,
      };
    },
    // 背景的动态样式，没传入inactiveColor和activeColor时执行此样式
    computedBgColor() {
      return {
        'button-bg-active': this.value,
        'button-bg-inactive': !this.value,
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
@import url('./index.less');
</style>
