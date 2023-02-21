<template>
  <div>
    <yulang-button @click="drawer = true"> 点我打开 </yulang-button>
    <yulang-drawer title="我是标题" :visible.sync="drawer" :withHeader="false">
      <span>我来啦!</span>
    </yulang-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="less" scoped></style>
