// 密码框
export const passwordObj = {
  props: {
    // 是否是密码框
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShowPassword: false,
    };
  },
  methods: {
    // 密码眼图标点击事件
    passwordEyeClick(type) {
      this.isShowPassword = type === "down";
    },
  },
};
