<template>
  <yulang-pagination
    :layout="['prev', 'pager', 'next']"
    :total="1000"
    :currentPage.sync="currentPage"
    :pagerCount="11"
  >
  </yulang-pagination>
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
