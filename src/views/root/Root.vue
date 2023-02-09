<template>
  <div class="container">
    <root-head></root-head>
    <keep-alive>
      <!-- 需要缓存的视图组件 -->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不需要缓存的视图组件 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <yulang-back-top :bottom="100" :right="100" :hiddenValue="100">
      <div class="back-top-radiu">
        <div class="back-top-triangle"></div>
      </div>
    </yulang-back-top>
  </div>
</template>

<script>
import RootHead from '@/views/root/components/root-head/RootHead.vue';
export default {
  name: 'yulang-root',
  components: {
    RootHead,
  },
};
</script>

<style scoped lang="less">
@import url('./index.less');
</style>
