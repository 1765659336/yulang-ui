<template>
  <div class="yulang-animate yulang-heart-beat-slow">心跳慢速</div>
</template>

<script>
export default {
  name: 'yulang-heart-beat-slow',
  data() {
    return {
      title: '心跳慢速',
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
