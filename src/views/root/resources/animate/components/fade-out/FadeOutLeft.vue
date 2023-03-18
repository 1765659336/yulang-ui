<template>
  <div class="yulang-animate yulang-fade-out-left">向左逐渐消失</div>
</template>

<script>
export default {
  name: 'yulang-fade-out-left',
  data() {
    return {
      title: '向左逐渐消失',
      attribute: 'left leave',
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
