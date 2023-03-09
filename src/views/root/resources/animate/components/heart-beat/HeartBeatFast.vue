<template>
  <div class="yulang-animate yulang-heart-beat-fast">心跳快速</div>
</template>

<script>
export default {
  name: 'yulang-heart-beat-fast',
  data() {
    return {
      title: '心跳快速',
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
