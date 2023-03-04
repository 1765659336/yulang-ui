export const initObj = {
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
  },
  methods: {
    resetFields() {
      this.valueComputed = null;
    },
    valueComputedInput(e) {
      this.valueComputed = e.target.value;
    },
    valueComputedBlur(e) {
      this.$listeners.blur && this.$listeners.blur(e);
    },
    valueComputedClick(e) {
      this.$listeners.click = this.$listeners.click(e);
    },
  },
};
