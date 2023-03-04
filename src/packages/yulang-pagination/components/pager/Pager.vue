<template>
  <less-pager
    v-if="pageArr.length <= pagerCount - 2"
    :currentPageComputed="currentPageComputed"
    :pageArr="pageArr"
    @changeCurrentPage="$listeners.changeCurrentPage"
  ></less-pager>
  <more-pager
    v-else
    :currentPageComputed="currentPageComputed"
    :pageArr="pageArr"
    :morePageArr="morePageArr"
    @changeCurrentPage="$listeners.changeCurrentPage"
  ></more-pager>
</template>

<script>
import MorePager from "./components/morePager/MorePager.vue";
import LessPager from "./components/lessPager/LessPager.vue";
export default {
  name: "layout-pager",
  props: ["currentPageComputed", "pageArr", "morePageArr", "pagerCount"],
  components: {
    MorePager,
    LessPager,
  },
};
</script>

<style lang="less" scoped></style>
