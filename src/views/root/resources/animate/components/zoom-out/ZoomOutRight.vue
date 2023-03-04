<template>
  <div v-if="value" class="yulang-animate yulang-zoom-out-right">右移消失</div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-zoom-out-right",
  mixins: [disappear],
  data() {
    return {
      title: "右移消失",
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
