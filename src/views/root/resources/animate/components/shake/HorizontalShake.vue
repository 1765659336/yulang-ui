<template>
  <div class="yulang-animate yulang-horizontal-shake">水平高速震动</div>
</template>

<script>
export default {
  name: 'yulang-horizontal-shake',
  data() {
    return {
      title: '水平高速震动',
      attribute: 'X-axis',
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
