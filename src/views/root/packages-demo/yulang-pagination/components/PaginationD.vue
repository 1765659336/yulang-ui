<template>
  <div>
    <yulang-pagination
      :layout="['pager']"
      :total="50"
      :currentPage.sync="currentPage"
    >
    </yulang-pagination>
    <yulang-pagination
      :layout="['prev', 'pager', 'next']"
      :total="1000"
      :currentPage.sync="currentPage"
      :pagerCount="11"
    >
    </yulang-pagination>
    <yulang-pagination
      :layout="['prev', 'pager', 'next', 'total']"
      :total="1000"
      :currentPage.sync="currentPage"
      :pagerCount="11"
    >
    </yulang-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
    };
  },
};
</script>

<style lang="less" scoped></style>
