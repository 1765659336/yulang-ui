<template>
  <div
    class="packages-yulang-loading-container"
    :style="{
      '--container-height--': height,
      '--container-width--': width,
    }"
  >
    yulang-loading...
  </div>
</template>

<script>
export default {
  name: "yulang-loading",
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
