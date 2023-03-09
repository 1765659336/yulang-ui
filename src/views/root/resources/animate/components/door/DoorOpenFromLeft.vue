<template>
  <div class="yulang-animate yulang-door-open-from-left">从左开门</div>
</template>

<script>
export default {
  name: 'yulang-door-open-from-left',
  data() {
    return {
      title: '从左开门',
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
