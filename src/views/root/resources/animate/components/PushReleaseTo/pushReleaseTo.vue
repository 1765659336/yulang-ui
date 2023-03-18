<template>
  <div v-if="value" class="yulang-animate yulang-push-release-to">缩小再放大消失</div>
</template>

<script>
import { disappear } from '../mixin';
export default {
  name: 'yulang-push-release-to',
  mixins: [disappear],
  data() {
    return {
      title: '缩小再放大消失',
      attribute: 'middle',
    };
  },
};
</script>

<style lang="less" scoped>
div {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
