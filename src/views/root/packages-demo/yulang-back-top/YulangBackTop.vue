<template>
  <div class="container">
    <yulang-back-top></yulang-back-top>
    <yulang-back-top :bottom="100" :right="100" :hiddenValue="100"
      >快速回到顶部</yulang-back-top
    >
    <yulang-back-top
      :bottom="150"
      :right="150"
      :hiddenValue="100"
      :animationTime="100"
      >慢速回到顶部</yulang-back-top
    >
  </div>
</template>

<script>
export default {
  name: "packages-yulang-back-top",
};
</script>

<style lang="less" scoped>
.container {
  height: 1000px;
  color: red;
}
</style>
