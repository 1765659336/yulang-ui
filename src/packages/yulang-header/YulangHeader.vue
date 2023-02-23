<template>
  <div
    class="yulang-header-container"
    :style="{ '--yulang-header-height--': height }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "yulang-header",
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
      yulangComponentName: "yulang-header",
    };
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
