<template>
  <div v-if="value" class="yulang-animate yulang-perspective-to-top">
    向上翻转消失
  </div>
</template>

<script>
import { disappear } from "../mixin";
export default {
  name: "yulang-perspective-to-top",
  mixins: [disappear],
  data() {
    return {
      title: "向上翻转消失",
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
