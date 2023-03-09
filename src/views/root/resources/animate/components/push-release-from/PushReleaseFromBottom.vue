<template>
  <div class="yulang-animate yulang-push-release-from-bottom">下面到上面再回来</div>
</template>

<script>
export default {
  name: 'yulang-push-release-from-bottom',
  data() {
    return {
      title: '下面到上面再回来',
      attribute: 'bottom show',
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
