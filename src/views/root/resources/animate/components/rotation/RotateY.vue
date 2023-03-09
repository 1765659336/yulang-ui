<template>
  <div v-if="value" class="yulang-animate-div yulang-animate yulang-rotate-y">
    往侧面倒
  </div>
</template>

<script>
import { disappear } from "../mixin";
export default {
  name: "yulang-rotate-y",
  mixins: [disappear],
  data() {
    return {
      title: "往侧面倒",
      attribute: 'X-axis',
    };
  },
};
</script>

<style lang="less" scoped></style>
