<template>
  <div
    :style="{ '--container-width--': width ? width : $parent.minWidth }"
    class="packages-yulang-table-item-container"
  >
    {{ label }}
  </div>
</template>

<script>
export default {
  name: "yulang-table-item",
  props: {
    prop: {
      type: String,
    },
    label: {
      type: String,
    },
    width: {},
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
