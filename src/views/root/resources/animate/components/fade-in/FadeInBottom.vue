<template>
  <div class="yulang-animate yulang-fade-in-bottom">从下逐渐进入</div>
</template>

<script>
export default {
  name: 'yulang-fade-in-bottom',
  data() {
    return {
      title: '从下逐渐进入',
      attribute: 'bottom show',
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
