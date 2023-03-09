<template>
  <div v-if="value" class="yulang-animate-div yulang-animate yulang-skew-out-left">
    左上角拉伸左侧离开
  </div>
</template>

<script>
import { disappear } from "../mixin";
export default {
  name: "yulang-skew-out-left",
  mixins: [disappear],
  data() {
    return {
      title: "左上角拉伸左侧离开",
      attribute: 'left leave',
    };
  },
};
</script>

<style lang="less" scoped></style>
