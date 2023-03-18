<template>
  <div class="yulang-animate yulang-move-from-left">从左移入</div>
</template>

<script>
export default {
  name: 'yulang-move-from-left',
  data() {
    return {
      title: '从左移入',
      attribute: 'left show',
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
