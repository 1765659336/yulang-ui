// 可清空
export const clearObj = {
  props: {
    // 是否可清空
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // 关闭icon是否显示
    guanbiIconIsShow() {
      return this.valueComputed && !this.disabled && this.clearable;
    },
  },
  methods: {
    // 清除icon点击事件
    clearValue() {
      this.valueComputed = null;
      this.$listeners.clear && this.$listeners.clear();
    },
  },
};
