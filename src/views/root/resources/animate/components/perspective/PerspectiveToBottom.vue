<template>
  <div v-if="value" class="yulang-animate yulang-perspective-to-bottom">
    向下翻转消失
  </div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-perspective-to-bottom",
  mixins: [disappear],
  data() {
    return {
      title: "向下翻转消失",
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
