<template>
  <div class="packages-yulang-dropdown-container">
    <yulang-popover :trigger="trigger" ref="popoverRef">
      <template #reference>
        <slot></slot>
      </template>
      <template #content>
        <slot name="dropdown"></slot>
      </template>
    </yulang-popover>
  </div>
</template>

<script>
import YulangPopover from "@/packages/yulang-popover/YulangPopover.vue";

export default {
  name: "yulang-dropdown",
  components: {
    YulangPopover,
  },
  provide() {
    return {
      closeShow: this.closeShow,
      commandhandle: this.$listeners.command,
    };
  },
  props: {
    // 触发方式
    trigger: {
      default: "click",
      validator(value) {
        return ["click", "hover", "focus", "manual"].find(
          (item) => item === value
        );
      },
    },
  },
  methods: {
    closeShow() {
      this.$refs.popoverRef.closeShow();
    },
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-dropdown-container {
  display: inline-block;
}
</style>
