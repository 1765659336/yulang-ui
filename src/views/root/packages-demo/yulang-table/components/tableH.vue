<template>
  <div>
    <yulang-button @click="getSelectData">获取勾选的数据</yulang-button>
    <yulang-table :data="tableData" width="814px" height="200px" ref="tableH">
      <yulang-table-item type="radio" width="50px"> </yulang-table-item>
      <yulang-table-item type="checkbox" width="50px"> </yulang-table-item>
      <yulang-table-item prop="date" label="日期" width="100px">
      </yulang-table-item>
      <yulang-table-item prop="name" label="姓名" width="300px">
      </yulang-table-item>
      <yulang-table-item fixed="right" prop="sex" label="性别" width="100px">
      </yulang-table-item>
      <yulang-table-item
        fixed="right"
        prop="address"
        label="地址"
        width="300px"
      >
      </yulang-table-item>
    </yulang-table>
  </div>
</template>

<script>
export default {
  name: 'tableH',
  props: {
    tableData: {
      type: Array,
    },
  },
  methods: {
    getSelectData() {
      this.$yulangNotification({
        message: this.$refs.tableH.getRadioData(),
        type: 'success',
      });
      this.$yulangNotification({
        message: this.$refs.tableH.getCheckboxData(),
        type: 'success',
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
