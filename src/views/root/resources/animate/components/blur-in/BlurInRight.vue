<template>
  <div class="yulang-animate yulang-blur-in-right">从右侧清晰出现</div>
</template>

<script>
export default {
  name: "yulang-blur-in-right",
  data() {
    return {
      title: "从右侧清晰出现",
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
