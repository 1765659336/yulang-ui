<template>
  <div class="packages-yulang-select-container">
    <yulang-popover
      trigger="click"
      :minWidth="250"
      ref="popoverRef"
      :openBeforeValidator="isShowBefore"
    >
      <template #reference>
        <yulang-input
          v-model="label"
          suffixIcon="icon-chevron-down"
          :placeholder="placeholder"
          :disabled="disabled"
          :clearable="clearable"
          @blur="inputBlur"
        >
        </yulang-input>
      </template>
      <template #content>
        <slot></slot>
      </template>
    </yulang-popover>
  </div>
</template>

<script>
import YulangPopover from "@/packages/yulang-popover/YulangPopover.vue";
import YulangInput from "@/packages/yulang-input/YulangInput.vue";

export default {
  name: "yulang-select",
  components: {
    YulangPopover,
    YulangInput,
  },
  props: {
    value: {},
    placeholder: {
      default(){
        return this.$locale.gv(["select", "placeholder"]);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    // 是否开启远程检索
    remote: {
      type: Boolean,
      default: false,
    },
    // 远程检索函数
    remoteMethod: {
      type: Function,
      default: () => {
        return () => {};
      },
    },
  },
  provide() {
    return {
      YulangSelect: this,
      closePopover: this.closePopover,
      multiple: this.multiple,
    };
  },
  data() {
    return {
      label: "",
    };
  },
  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  watch: {
    label(val) {
      if (this.remote) {
        this.remoteMethod(val);
      }
    },
  },
  methods: {
    closePopover() {
      this.$refs.popoverRef.closeShow();
    },
    isShowBefore() {
      return !this.disabled;
    },
    inputBlur(value) {
      if (value.target.value) {
        // 如果当前输入的值在options中的label中，则改为label值，否则不变
        this.$slots.default?.forEach((component) => {
          const { child } = component;
          if (
            child &&
            child.yulangComponentName === "yulang-option" &&
            child.label.indexOf(value.target.value) != -1
          ) {
            if (this.multiple) {
              this.label = child.label + ";";
              this.valueComputed = [child.value];
            } else {
              this.label = child.label;
              this.valueComputed = child.value;
            }
          }
        });
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
