<template>
  <yulang-table :data="tableData" :isShowBorder="true" width="800px">
    <yulang-table-item prop="date" label="日期"> </yulang-table-item>
    <yulang-table-item prop="name" label="姓名"> </yulang-table-item>
    <yulang-table-item prop="address" label="地址"> </yulang-table-item>
  </yulang-table>
</template>

<script>
export default {
  name: 'tableC',
  props: {
    tableData: {
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped></style>
