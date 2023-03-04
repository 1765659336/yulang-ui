<template>
  <div v-if="value" class="yulang-animate yulang-zoom-out-left">左移消失</div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-zoom-out-left",
  mixins: [disappear],
  data() {
    return {
      title: "左移消失",
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
