<template>
  <div
    v-if="value"
    class="yulang-animate-div yulang-animate yulang-bounce-out-left"
  >
    抖动左侧离开
  </div>
</template>

<script>
import { disappear } from '../mixin';

export default {
  name: 'yulang-bounce-out-left',
  mixins: [disappear],
  data() {
    return {
      title: '抖动左侧离开',
      attribute: 'left leave',
    };
  },
};
</script>

<style lang="less" scoped>
div {
  width: 100px;
  height: 100px;
  background-color: pink;
}
</style>
