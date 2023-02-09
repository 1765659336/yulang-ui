<template>
  <div
    :class="containerClass"
    @click="handleClick"
    :style="{
      '--margin-top-botton--': this.marginTopBotton,
      '--margin-left-right--': this.marginLeftRight,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
const sizeRuler = {
  medium: { marginTopBotton: '50px', marginLeftRight: '80px' },
  small: { marginTopBotton: '40px', marginLeftRight: '60px' },
  mini: { marginTopBotton: '30px', marginLeftRight: '40px' },
};
export default {
  name: 'yulang-button',
  props: {
    // 控制按钮是否禁用
    disabled: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    // 设置按钮的主题
    type: {
      type: String,
      default: () => {
        return 'default';
      },
      validator: (value) => {
        return ['default', 'success', 'error'].find((item) => item === value);
      },
    },
    // 设置按钮的大小
    size: {
      type: String,
      default: () => {
        return 'medium';
      },
      validator: (value) => {
        return ['medium', 'small', 'mini'].find((item) => item === value);
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    containerClass: {
      get() {
        return {
          'packages-yulang-button-container': true,
          'is-disable': this.disabled,
          'not-disable': !this.disabled,
          'is-success': this.type === 'success',
          'is-error': this.type === 'error',
        };
      },
    },
    // 按钮的上下间距
    marginTopBotton: {
      get() {
        return sizeRuler[this.size].marginTopBotton;
      },
    },
    // 按钮的左右间距
    marginLeftRight: {
      get() {
        return sizeRuler[this.size].marginLeftRight;
      },
    },
  },
  methods: {
    handleClick(e) {
      !this.disabled && this.$listeners.click && this.$listeners.click(e);
    },
  },
};
</script>

<style scoped lang="less">
@import url('./index.less');
</style>
