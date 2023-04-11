<template>
  <div v-yulangLoading="loadingValue" class="app-container">
    <keep-alive>
      <!-- 需要缓存的视图组件 -->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不需要缓存的视图组件 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingValue: true,
      treeSelectValue: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.loadingValue = false;
    });
  },
};
</script>

<style lang="less" scoped>
.app-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
