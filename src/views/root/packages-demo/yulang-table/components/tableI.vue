<template>
  <yulang-table
    :data="[...tableData, ...tableData, ...tableData]"
    isShowFooter
    :footerMethod="footerMethod"
    footerTitleWidth="100px"
    width="814px"
    height="200px"
  >
    <yulang-table-item prop="date" label="日期" width="100px">
    </yulang-table-item>
    <yulang-table-item prop="name" label="姓名" width="300px">
    </yulang-table-item>
    <yulang-table-item prop="name" label="姓名" width="300px">
    </yulang-table-item>
    <yulang-table-item prop="name" label="姓名" width="300px">
    </yulang-table-item>
    <yulang-table-item prop="name" label="姓名" width="300px">
    </yulang-table-item>
    <yulang-table-item fixed="right" prop="sex" label="性别" width="100px">
    </yulang-table-item>
    <yulang-table-item fixed="right" prop="address" label="地址" width="300px">
    </yulang-table-item>
  </yulang-table>
</template>

<script>
export default {
  name: 'tableI',
  props: {
    tableData: {
      type: Array,
    },
  },
  methods: {
    footerMethod(data, fieldSort) {
      return [
        fieldSort.map((item, index) => {
          if (item.type === 'footer') {
            return '求和';
          } else {
            return index;
          }
        }),
        fieldSort.map((item, index) => {
          if (item.type === 'footer') {
            return '平均值';
          } else {
            return index;
          }
        }),
      ];
    },
  },
};
</script>

<style lang="less" scoped></style>
