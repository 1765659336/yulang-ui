<template>
  <div v-if="value" class="yulang-animate yulang-spin-out-right-bottom">
    右下角旋转消失
  </div>
</template>

<script>
import { disappear } from "../mixin";
export default {
  name: "yulang-spin-out-right-bottom",
  mixins: [disappear],
  data() {
    return {
      title: "右下角旋转消失",
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
