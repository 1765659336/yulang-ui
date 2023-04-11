<template>
  <div>
    <div class="avatar">
      <yulang-avatar :size="50" :src="circleUrl"></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
      <yulang-avatar size="large" :src="circleUrl"></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
      <yulang-avatar size="medium" :src="circleUrl"></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
      <yulang-avatar size="small" :src="circleUrl"></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
    </div>
    <div class="avatar">
      <yulang-avatar :size="50" :src="squareUrl" shape="square"></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
      <yulang-avatar
        size="large"
        :src="squareUrl"
        shape="square"
      ></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
      <yulang-avatar
        size="medium"
        :src="squareUrl"
        shape="square"
      ></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
      <yulang-avatar
        size="small"
        :src="squareUrl"
        shape="square"
      ></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },
};
</script>

<style lang="less" scoped>
.avatar {
  display: inline-flex;
  align-items: center;
  height: 100px;
}
</style>
