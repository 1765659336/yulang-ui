<template>
  <div class="yulang-pagination-pager-container">
    <div
      :class="[
        'yulang-pagination-pager-item',
        'yulang-pagination-count',
        currentPageComputed === 1 ? 'is-checked' : 'is-not-disabled',
        currentPageComputed === 1
          ? 'yulang-animate yulang-pull-release'
          : '',
      ]"
      @click="$listeners.changeCurrentPage(1)"
    >
      {{ 1 }}
    </div>
    <!-- 左跳跃icon -->
    <i
      :class="[
        'iconfont',
        'icon-kuaitui',
        'yulang-pagination-count',
        'is-not-disabled',
      ]"
      @click="
        $listeners.changeCurrentPage(currentPageComputed - morePageArr.length)
      "
    ></i>
    <div v-for="item in morePageArr" :key="item">
      <div
        v-if="!(item === 1 || item === pageArr.length)"
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
        <span>{{ item }}</span>
      </div>
    </div>
    <!-- 右跳跃icon -->
    <i
      :class="[
        'iconfont',
        'icon-kuaijin',
        'yulang-pagination-count',
        'is-not-disabled',
      ]"
      @click="
        $listeners.changeCurrentPage(currentPageComputed + morePageArr.length)
      "
    ></i>
    <div
      :class="[
        'yulang-pagination-pager-item',
        'yulang-pagination-count',
        currentPageComputed === pageArr.length
          ? 'is-checked'
          : 'is-not-disabled',
        currentPageComputed === pageArr.length
          ? 'yulang-animate yulang-pull-release'
          : '',
      ]"
      @click="$listeners.changeCurrentPage(pageArr.length)"
    >
      {{ pageArr.length }}
    </div>
  </div>
</template>

<script>
export default {
  name: "more-pager",
  props: ["currentPageComputed", "pageArr", "morePageArr"],
};
</script>

<style lang="less" scoped>
@import url(../../../../index.less);
</style>
