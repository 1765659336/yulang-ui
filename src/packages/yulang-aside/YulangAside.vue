<template>
  <div
    class="packages-yulang-aside-container"
    :style="{ '--yulang-aside-width--': width }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "yulang-aside",
  props: {
    width: {
      type: String,
      default: () => {
        return "300px";
      },
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
