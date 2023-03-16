<template>
  <div class="yulang-animate yulang-fade-in-right">从右逐渐进入</div>
</template>

<script>
export default {
  name: 'yulang-fade-in-right',
  data() {
    return {
      title: '从右逐渐进入',
      attribute: 'right show',
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
