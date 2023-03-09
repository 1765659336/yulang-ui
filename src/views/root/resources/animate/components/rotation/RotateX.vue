<template>
  <div v-if="value" class="yulang-animate-div yulang-animate yulang-rotate-x">
    往后倒
  </div>
</template>

<script>
import { disappear } from "../mixin";
export default {
  name: "yulang-rotate-x",
  mixins: [disappear],
  data() {
    return {
      title: "往后倒",
      attribute: 'Y-axis',
    };
  },
};
</script>

<style lang="less" scoped></style>
