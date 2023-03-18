<template>
  <div class="yulang-animate yulang-rotate-in-left">从左翻转显示</div>
</template>

<script>
export default {
  name: 'yulang-rotate-in-left',
  data() {
    return {
      title: '从左翻转显示',
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
