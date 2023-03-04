<template>
  <div
    class="yulang-color-picker-container"
    :style="{ '--color-block-background-color--': valueComputed }"
  >
    <yulang-popover trigger="click" placement="bottom-start">
      <template #reference>
        <div class="reference-container">
          <div class="color-block">
            <i class="iconfont icon-guanbi" v-if="valueComputed"></i>
            <i class="iconfont icon-chevron-down" v-else></i>
          </div>
        </div>
      </template>
      <template #content>
        <div class="color-picker-popover-container"></div>
      </template>
    </yulang-popover>
  </div>
</template>

<script>
import YulangPopover from "@/packages/yulang-popover/YulangPopover";
export default {
  name: "yulang-color-picker",
  components: {
    YulangPopover,
  },
  props: {
    value: {},
  },
  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
