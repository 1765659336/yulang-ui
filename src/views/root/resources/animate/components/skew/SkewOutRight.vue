<template>
  <div v-if="value" class="yulang-animate-div yulang-animate yulang-skew-out-right">
    右上角拉伸右侧离开
  </div>
</template>

<script>
import { disappear } from "../mixin";
export default {
  name: "yulang-skew-out-right",
  mixins: [disappear],
  data() {
    return {
      title: "右上角拉伸右侧离开",
    };
  },
};
</script>

<style lang="less" scoped></style>
