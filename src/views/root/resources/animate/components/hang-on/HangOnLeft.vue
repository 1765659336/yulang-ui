<template>
  <div class="yulang-animate yulang-hang-on-left">向左悬挂</div>
</template>

<script>
export default {
  name: 'yulang-hang-on-left',
  data() {
    return {
      title: '向左悬挂',
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
