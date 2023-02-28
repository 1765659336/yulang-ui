<template>
  <!-- 左移icon -->
  <i
    v-if="layout.find((item) => item === 'prev')"
    :class="[
      'iconfont',
      'icon-chevron-left',
      'yulang-pagination-count',
      currentPageComputed === 1 ? 'is-disabled' : 'is-not-disabled',
    ]"
    @click="$listeners.changeCurrentPage(currentPageComputed - 1)"
  ></i>
</template>

<script>
export default {
  name: "layout-prev",
  props: ["layout", "currentPageComputed"],
};
</script>

<style lang="less" scoped>
@import url(../../index.less);
</style>
