// 与样式相关
export const styleObj = {
  props: {
    // 提示文本
    placeholder: {
      default: "请输入",
    },
    // 是否禁用
    disabled: {
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
    // 是否只读
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // input动态class类名
    inputClassComputed() {
      return {
        "package-yulang-input": true,
        "input-disabled": this.disabled,
      };
    },
  },
};
