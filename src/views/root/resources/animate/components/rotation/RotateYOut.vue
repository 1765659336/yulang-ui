<template>
  <div
    v-if="value"
    class="yulang-animate-div yulang-animate yulang-rotate-y-out"
  >
    侧面翻页离开
  </div>
</template>

<script>
import { disappear } from "../mixin";
export default {
  name: "yulang-rotate-y-out",
  mixins: [disappear],
  data() {
    return {
      title: "侧面翻页离开",
      attribute: 'middle',
    };
  },
};
</script>

<style lang="less" scoped></style>
