<template>
  <div class="yulang-animate-div yulang-animate yulang-bounce-in-left">
    抖动左侧进入显示
  </div>
</template>

<script>
export default {
  name: 'yulang-bounce-in-left',
  data() {
    return {
      title: '抖动左侧进入显示',
      attribute: 'left show',
    };
  },
};
</script>

<style lang="less" scoped>
div {
  width: 100px;
  height: 100px;
  background-color: pink;
}
</style>
