<template>
  <div v-if="value" class="yulang-animate yulang-blur-out-right">右侧失焦离开</div>
</template>

<script>
import { disappear } from "../mixin";

export default {
  name: "yulang-blur-out-right",
  mixins: [disappear],
  data() {
    return {
      title: "右侧失焦离开",
      attribute: 'right leave',
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
