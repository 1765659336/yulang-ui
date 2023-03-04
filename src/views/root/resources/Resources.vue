<template>
  <div class="root-resources-container">
    <div class="touter-link-container">
      <div
        v-for="item in routerLinkArr"
        :key="item.path"
        @click="$router.push(item.path)"
        :class="[
          'router-link-item',
          item.path === $route.path ? 'isSelect' : '',
        ]"
      >
        {{ item.title }}
      </div>
    </div>
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
  name: "root-resources",
  data() {
    return {
      routerLinkArr: [
        { path: "/root/resources/animate", title: "动画" },
        { path: "/root/resources/tools", title: "工具函数" },
        { path: "/root/resources/instruction", title: "指令" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
