<template>
  <div v-if="value" class="yulang-animate yulang-blur-out-top">
    失焦掉落离开
  </div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-blur-out-top",
  mixins: [disappear],
  data() {
    return {
      title: "失焦掉落离开",
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
