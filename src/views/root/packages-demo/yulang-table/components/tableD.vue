<template>
  <yulang-table :data="tableData" :isShowBorder="true" width="1000px">
    <yulang-table-item prop="date" label="日期" width="100px">
    </yulang-table-item>
    <yulang-table-item prop="name" label="姓名" width="150px">
    </yulang-table-item>
    <yulang-table-item prop="address" label="地址" width="200px">
    </yulang-table-item>
    <yulang-table-item prop="operation" label="操作" width="200px">
      <template #scope="scope">
        <yulang-button @click="handleClick(scope)">编辑</yulang-button>
        <yulang-button @click="handleClick(scope)">查看</yulang-button>
      </template>
    </yulang-table-item>
  </yulang-table>
</template>

<script>
export default {
  name: 'tableD',
  props: {
    tableData: {
      type: Array,
    },
  },
  methods: {
    handleClick(value) {
      this.$yulangNotification({
        message: value.scope.row,
        type: 'success',
        timeout: 3000,
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
