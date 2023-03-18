<template>
  <a
    :class="renderClass"
    :style="renderStyle"
    @click="clickFun"
    :href="url"
    :target="target"
    :disabled="disabledComputed"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'yulang-link',
  props: {
    // 文字颜色、a标签背景色
    mainColor: {
      type: String,
      default: () => {
        return '#54138c';
      },
    },
    // 跳转地址
    url: {
      type: String,
      default: () => {
        return '';
      },
    },
    // a标签target对应的属性
    target: {
      type: String,
      default: () => {
        return '_self';
      },
    },
    // 是否不可点击
    disabled: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    // 是否存在下划线
    openUnderline: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
  },
  computed: {
    disabledComputed: {
      get() {
        return this.disabled;
      },
      set(value) {
        this.emits('update:disabled', value);
      },
    },
    renderClass() {
      return {
        'custom-link-container': true,
        'custom-link-open-underline': this.openUnderline,
      };
    },
    renderStyle() {
      return {
        '--main-color--': this.mainColor,
        '--cursor--': this.disabledComputed ? 'not-allowed' : 'pointer',
      };
    },
  },
  methods: {
    clickFun(e) {
      if (this.disabledComputed) {
        e.preventDefault();
      } else {
        if (this.url === '') {
          e.preventDefault();
          this.$emit('clickCallback', e);
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
