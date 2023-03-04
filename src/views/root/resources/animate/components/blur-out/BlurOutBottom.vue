<template>
  <div v-if="value" class="yulang-animate yulang-blur-out-bottom">
    失焦漂浮离开
  </div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-blur-out-bottom",
  mixins: [disappear],
  data() {
    return {
      title: "失焦漂浮离开",
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
