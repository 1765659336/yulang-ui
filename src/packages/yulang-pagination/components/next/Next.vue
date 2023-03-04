<template>
  <!-- 右移icon -->
  <i
    v-if="layout.find((item) => item === 'next')"
    :class="[
      'iconfont',
      'icon-chevron-right',
      'yulang-pagination-count',
      currentPageComputed === pageArr.length
        ? 'is-disabled'
        : 'is-not-disabled',
    ]"
    @click="$listeners.changeCurrentPage(currentPageComputed + 1)"
  ></i>
</template>

<script>
export default {
  name: "layout-next",
  props: ["layout", "currentPageComputed", "pageArr"],
};
</script>

<style lang="less" scoped>
@import url(../../index.less);
</style>