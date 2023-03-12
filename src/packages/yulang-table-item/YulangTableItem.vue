<template>
  <div class="packages-yulang-table-item-container" :prop="prop">
    <slot name="scope" :scope="{ row: $parent.rowData }"></slot>
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
    width: {
      type: String,
    },
    fixed:{}
  },
  data() {
    return {
      yulangComponentName: "yulang-table-item",
    };
  },
};
</script>

<style lang="less" scoped></style>
