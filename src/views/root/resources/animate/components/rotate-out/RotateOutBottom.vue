<template>
  <div v-if="value" class="yulang-animate yulang-rotate-out-bottom">掉落滚动离开</div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-rotate-out-bottom",
  mixins: [disappear],
  data() {
    return {
      title: "掉落滚动离开",
      attribute: 'bottom leave',
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
