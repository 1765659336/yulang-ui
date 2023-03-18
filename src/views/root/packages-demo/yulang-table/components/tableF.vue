<template>
  <yulang-table :data="tableData" width="814px">
    <yulang-table-item prop="date" label="日期" width="100px">
    </yulang-table-item>
    <yulang-table-item
      v-for="index in 5"
      :key="index"
      prop="name"
      label="姓名"
      width="130px"
    >
    </yulang-table-item>
    <yulang-table-item fixed="right" prop="sex" label="性别" width="100px">
    </yulang-table-item>
    <yulang-table-item fixed="right" prop="address" label="地址" width="300px">
    </yulang-table-item>
  </yulang-table>
</template>

<script>
export default {
  name: 'tableF',
  props: {
    tableData: {
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped></style>
