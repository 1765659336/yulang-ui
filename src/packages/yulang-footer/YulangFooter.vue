<template>
  <div
    class="yulang-footer-container"
    :style="{ '--yulang-footer-height--': height }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "yulang-footer",
  props: {
    height: {
      type: String,
      default: () => {
        return "60px";
      },
    },
  },
  data() {
    return {
      yulangComponentName: "yulang-footer",
    };
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
