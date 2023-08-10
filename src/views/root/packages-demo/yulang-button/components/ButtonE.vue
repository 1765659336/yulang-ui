<template>
  <div>
    <yulang-button @click="changeLoading">切换加载状态</yulang-button>
    <yulang-button type="success" :loading="loading">成功按钮</yulang-button>
    <yulang-button type="danger" :loading="loading2">危险按钮</yulang-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      loading2: true,
    };
  },
  methods: {
    changeLoading() {
      this.loading = !this.loading;
      this.loading2 = !this.loading2;
    },
  },
};
</script>

<style lang="less" scoped></style>
