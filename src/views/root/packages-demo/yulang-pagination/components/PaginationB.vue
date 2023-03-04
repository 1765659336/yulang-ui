<template>
  <div>
    <div>
      <span class="demonstration">页数较少时的效果</span>
      <yulang-pagination
        :layout="['prev', 'pager', 'next']"
        :total="50"
        :currentPage.sync="currentPage1"
      >
      </yulang-pagination>
    </div>
    <div>
      <span class="demonstration">大于 7 页时的效果</span>
      <yulang-pagination
        :layout="['prev', 'pager', 'next']"
        :total="100"
        :currentPage.sync="currentPage2"
      >
      </yulang-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 1,
      currentPage2: 1,
    };
  },
};
</script>

<style lang="less" scoped></style>
