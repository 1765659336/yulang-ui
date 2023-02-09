<template>
  <div class="packages-checkbox-container">
    <input
      ref="checkboxRef"
      type="checkbox"
      name="scales"
      v-model="inputValue"
      :disabled="disabled"
      :id="label"
      @change="inputValueChange"
    />
    <label :for="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "yulang-checkbox",
  props: {
    // 是否选中
    value: {
      type: Boolean,
      default:false
    },
    // 右侧标签名
    label: {
      type: String,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    inputValueChange(value) {
      this.inputValue = value.target.checked;
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="less" scoped></style>
