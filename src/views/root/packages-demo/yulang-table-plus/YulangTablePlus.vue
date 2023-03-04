<template>
  <div>
    <yulang-table-plus :data="tableData">
      <yulang-table-plus-column prop="date" label="Date" width="150" />
      <yulang-table-plus-column prop="name" label="Name" width="120" />
      <yulang-table-plus-column prop="state" label="State" width="120" />
      <yulang-table-plus-column prop="operation" label="Operation" width="120">
        <div>111</div>
      </yulang-table-plus-column>
    </yulang-table-plus>
  </div>
</template>

<script>
export default {
  name: 'packages-demo-yulang-table-plus',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
