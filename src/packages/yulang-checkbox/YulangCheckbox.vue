<template>
  <div
    class="packages-checkbox-container yulang-checkbox-disabled"
    :style="{ '--cursor--': disabled ? 'not-allowed' : 'pointer' }"
  >
    <input
      type="checkbox"
      :value="label"
      :checked="inputValue"
      :disabled="disabled"
      :id="label + name"
      @change="inputValueChange"
      class="yulang-checkbox-disabled"
    />
    <label :for="label + name" class="yulang-checkbox-disabled">{{
      label
    }}</label>
  </div>
</template>

<script>
export default {
  name: "yulang-checkbox",
  props: {
    // 是否选中
    value: {
      type: Boolean,
      default: false,
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
    // 值改变发生的回调
    valueChange: {
      type: Function,
    },
  },
  data() {
    return {
      yulangComponentName: "yulang-checkbox",
      name: "",
      checked: false,
    };
  },
  computed: {
    inputValue: {
      get() {
        if (this.$parent.yulangComponentName === "yulang-checkbox-group") {
          return this.checked;
        } else {
          return this.value;
        }
      },
      set(newValue) {
        if (this.$parent.yulangComponentName === "yulang-checkbox-group") {
          this.checked = newValue;
        } else {
          this.$emit("input", newValue);
        }
      },
    },
  },
  methods: {
    inputValueChange(value) {
      this.inputValue = value.target.checked;
      if (this.$parent.yulangComponentName === "yulang-checkbox-group") {
        this.$parent.valueComputed = [...this.$parent.valueComputed, value];
      }
      this.valueChange && this.valueChange(this.inputValue);
    },
  },
};
</script>

<style lang="less" scoped>
.packages-checkbox-container {
  display: inline-block;

  .yulang-checkbox-disabled {
    cursor: var(--cursor--);
  }
}
</style>
