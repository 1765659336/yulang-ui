<template>
  <div class="yulang-animate yulang-push-release-to-top">向上再向下消失</div>
</template>

<script>
export default {
  name: 'yulang-push-release-to-top',
  data() {
    return {
      title: '向下再向上消失',
      attribute: 'top leave',
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
