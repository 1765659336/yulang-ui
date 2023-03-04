<template>
  <div>{{ label }}</div>
</template>

<script>
export default {
  name: 'yulang-table-plus-column',
  props: {
    prop: {
      type: String,
      require: true,
    },
    label: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="less" scoped></style>
