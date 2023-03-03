<template>
  <div class="yulang-animate yulang-spin-out-left-top">左上角旋转消失</div>
</template>

<script>
import { disappear } from "../mixin";
export default {
  name: "yulang-spin-out-left-top",
  mixins: [disappear],
  data() {
    return {
      title: "左上角旋转消失",
    };
  },
};
</script>

<style lang="less" scoped>
div {
  height: 200px;
  width: 200px;
  background-color: pink;
}
</style>
