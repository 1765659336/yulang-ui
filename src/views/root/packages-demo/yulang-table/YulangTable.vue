<template>
  <yulang-table :data="tableData">
    <yulang-table-item prop="date" label="日期" width="100px">
    </yulang-table-item>
    <yulang-table-item prop="name" label="姓名" width="150px">
    </yulang-table-item>
    <yulang-table-item prop="address" label="地址" width="300px">
    </yulang-table-item>
  </yulang-table>
</template>

<script>
export default {
  name: "packages-demo-yulang-table",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
