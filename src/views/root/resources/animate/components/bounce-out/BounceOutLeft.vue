<template>
  <div v-if="value" class="yulang-animate-div yulang-animate yulang-bounce-out-left">
    抖动左侧离开
  </div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-bounce-out-left",
  mixins: [disappear],
  data() {
    return {
      title: "抖动左侧离开",
    };
  },
};
</script>

<style lang="less" scoped></style>
