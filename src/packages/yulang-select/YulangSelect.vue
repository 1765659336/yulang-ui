<template>
  <div class="packages-yulang-select-container">
    <yulang-popover
      trigger="click"
      :minWidth="100"
      ref="popoverRef"
    >
      <template #reference>
        <yulang-input
          :value="label"
          suffixIcon="icon-chevron-down"
          :placeholder="placeholder ?? '请输入'"
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
    placeholder: {},
  },
  provide() {
    return {
      YulangSelect: this,
      closePopover: this.closePopover,
    };
  },
  data() {
    return {
      label: null,
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
  methods: {
    closePopover() {
      this.$refs.popoverRef.closeShow();
    },
  },
};
</script>

<style lang="less" scoped></style>
