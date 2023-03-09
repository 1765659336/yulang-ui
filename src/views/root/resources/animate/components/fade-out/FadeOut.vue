<template>
  <div class="yulang-animate yulang-fade-out">逐渐消失</div>
</template>

<script>
export default {
  name: 'yulang-fade-out',
  data() {
    return {
      title: '逐渐消失',
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
