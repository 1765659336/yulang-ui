<template>
  <div class="yulang-animate yulang-move-from-top">从上移入</div>
</template>

<script>
export default {
  name: 'yulang-move-from-top',
  data() {
    return {
      title: '从上移入',
      attribute: 'top show',
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
