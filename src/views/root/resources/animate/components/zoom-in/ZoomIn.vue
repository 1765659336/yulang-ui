<template>
  <div class="yulang-animate yulang-zoom-in">原地缩小显现</div>
</template>

<script>
export default {
  name: "yulang-zoom-in",
  data() {
    return {
      title: "原地缩小显现",
      attribute: 'middle',
    };
  },
};
</script>

<style lang="less" scoped>
div {
  height: 200px;
  width: 200px;
  background-color: pink;
}
</style>
