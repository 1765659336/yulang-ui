<template>
  <div v-if="value" class="yulang-animate yulang-zoom-out-top">爬升消失</div>
</template>

<script>
import { disappear } from "../mixin";
export default {
  name: "yulang-zoom-out-top",
  mixins: [disappear],
  data() {
    return {
      title: "爬升消失",
      attribute: 'top leave',
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
