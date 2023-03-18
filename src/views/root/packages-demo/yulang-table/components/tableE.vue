<template>
  <yulang-table :data="tableData" width="814px" height="200px">
    <yulang-table-item prop="date" label="日期" width="100px">
    </yulang-table-item>
    <yulang-table-item
      v-for="index in 5"
      :key="index"
      prop="name"
      label="姓名"
      width="150px"
    >
    </yulang-table-item>
    <yulang-table-item prop="sex" label="性别" width="100px">
    </yulang-table-item>
    <yulang-table-item prop="address" label="地址" width="300px">
    </yulang-table-item>
  </yulang-table>
</template>

<script>
export default {
  name: 'tableE',
  props: {
    tableData: {
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped></style>
