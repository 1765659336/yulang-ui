<template>
  <div class="yulang-animate yulang-fade-out-right">向右逐渐消失</div>
</template>

<script>
export default {
  name: 'yulang-fade-out-right',
  data() {
    return {
      title: '向右逐渐消失',
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
