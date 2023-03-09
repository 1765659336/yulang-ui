<template>
  <div class="yulang-animate yulang-fade-out-top">向上逐渐消失</div>
</template>

<script>
export default {
  name: 'yulang-fade-out-top',
  data() {
    return {
      title: '向上逐渐消失',
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
