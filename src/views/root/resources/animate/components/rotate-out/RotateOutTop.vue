<template>
  <div v-if="value" class="yulang-animate yulang-rotate-out-top">漂浮滚动离开</div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-rotate-out-top",
  mixins: [disappear],
  data() {
    return {
      title: "漂浮滚动离开",
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
