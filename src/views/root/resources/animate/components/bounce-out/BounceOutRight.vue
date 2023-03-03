<template>
  <div class="yulang-animate-div yulang-animate yulang-bounce-out-right">
    抖动右侧离开
  </div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-bounce-out-right",
  mixins: [disappear],
  data() {
    return {
      title: "抖动右侧离开",
    };
  },
};
</script>

<style lang="less" scoped></style>
