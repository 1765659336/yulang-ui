<template>
  <div v-if="value" class="yulang-animate yulang-blur-out">失焦离开</div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-blur-out",
  mixins: [disappear],
  data() {
    return {
      title: "失焦离开",
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
