<template>
  <div v-if="value" class="yulang-animate yulang-zoom-out">原地放大消失</div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-zoom-out",
  mixins: [disappear],
  data() {
    return {
      title: "原地放大消失",
      attribute: 'middle',
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
