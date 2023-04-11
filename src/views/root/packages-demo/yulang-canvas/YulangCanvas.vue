<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a>
      <yulang-canvas></yulang-canvas>
    </template>
  </yulang-anchor-point>
</template>

<script>
export default {
  name: "packages-demo-yulang-canvas",
  data() {
    return {
      slotArr: [{ slotName: "a", slotTitle: "Canvas 画布", level: 1 }],
    };
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
