<template>
  <div class="yulang-pagination-pager-container">
    <div
      v-for="item in pageArr"
      :key="item"
      :class="[
        'yulang-pagination-pager-item',
        'yulang-pagination-count',
        currentPageComputed === item ? 'is-checked' : 'is-not-disabled',
        currentPageComputed === item
          ? 'yulang-animate yulang-pull-release'
          : '',
      ]"
      @click="$listeners.changeCurrentPage(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "less-pager",
  props: ["pageArr", "currentPageComputed"],
};
</script>

<style lang="less" scoped>
@import url(../../../../index.less);
</style>
