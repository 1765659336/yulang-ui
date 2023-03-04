<template>
  <div v-if="value" class="yulang-animate yulang-blur-out-left">
    左侧失焦离开
  </div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-blur-out-left",
  mixins: [disappear],
  data() {
    return {
      title: "左侧失焦离开",
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
