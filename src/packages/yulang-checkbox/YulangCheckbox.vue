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
          this.$listeners.change && this.$listeners.change(newValue);
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

  //选中后labe内的内容
  input[type="checkbox"] + label::before {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    width: 13px;
    height: 13px;
    border: 1px solid #999999;
    margin-right: 0.2rem;
    box-sizing: border-box;
    margin-top: -0.1rem;
  }

  input[type="checkbox"]:checked + label::before {
    background-color: var(--yulang-theme-color--);
    background-clip: content-box;
    border: 1px solid var(--yulang-theme-color--);
    padding: 0.1rem;
    box-sizing: border-box;
  }

  input[type="checkbox"] {
    position: absolute;
    // 定义哪一部分是可见的
    clip: rect(0, 0, 0, 0);
  }
}
</style>
