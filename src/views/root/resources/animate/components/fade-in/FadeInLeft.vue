<template>
  <div class="yulang-animate yulang-fade-in-left">从左逐渐进入</div>
</template>

<script>
export default {
  name: 'yulang-fade-in-left',
  data() {
    return {
      title: '从左逐渐进入',
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
