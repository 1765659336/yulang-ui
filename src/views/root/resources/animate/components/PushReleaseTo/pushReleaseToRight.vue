<template>
  <div class="yulang-animate yulang-push-release-to-right">向右再向左消失</div>
</template>

<script>
export default {
  name: 'yulang-push-release-to-right',
  data() {
    return {
      title: '向左再向右消失',
      attribute: 'right leave',
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
