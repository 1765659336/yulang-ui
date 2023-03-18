<template>
  <div class="yulang-animate yulang-blur-in-left">从左侧清晰出现</div>
</template>

<script>
export default {
  name: 'yulang-blur-in-left',
  data() {
    return {
      title: '从左侧清晰出现',
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
