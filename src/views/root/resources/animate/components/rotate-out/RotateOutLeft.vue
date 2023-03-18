<template>
  <div v-if="value" class="yulang-animate yulang-rotate-out-left">左侧滚动离开</div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-rotate-out-left",
  mixins: [disappear],
  data() {
    return {
      title: "左侧滚动离开",
      attribute: 'left leave',
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
