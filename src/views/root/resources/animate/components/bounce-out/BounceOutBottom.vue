<template>
  <div class="yulang-animate-div yulang-animate yulang-bounce-out-bottom">
    抖动掉落离开
  </div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-bounce-out-bottom",
  mixins: [disappear],
  data() {
    return {
      title: "抖动掉落离开",
    };
  },
};
</script>

<style lang="less" scoped></style>
