<template>
  <div v-if="value" class="yulang-animate-div yulang-animate yulang-bounce-out-top">
    抖动漂浮离开
  </div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-bounce-out-top",
  mixins: [disappear],
  data() {
    return {
      title: "抖动漂浮离开",
      attribute: 'top leave',
    };
  },
};
</script>

<style lang="less" scoped></style>
