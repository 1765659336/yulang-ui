<template>
  <div class="yulang-animate yulang-move-to-bottom">向下移出</div>
</template>

<script>
export default {
  name: 'yulang-move-to-bottom',
  data() {
    return {
      title: '向下移出',
      attribute: 'bottom leave',
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
