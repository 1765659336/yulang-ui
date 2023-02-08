<template>
  <div class="yulang-packages-union">
    <div class="component-menu" id="component-menu">
      <div class="menu-title-1 menu-title-level2-common">更新日志</div>
      <div class="menu-title-1 menu-title-level2-common">开发指南</div>
      <div
        v-for="(item, index) in unionData"
        :key="item.title"
        :class="unionDataClass(item)"
        @click="jumpComponentRouter(item, index)"
      >
        {{ item.title }}
      </div>
    </div>
    <keep-alive>
      <!-- 需要缓存的视图组件 -->
      <router-view v-if="$route.meta.keepAlive" class="component-content"></router-view>
    </keep-alive>
    <!-- 不需要缓存的视图组件 -->
    <router-view v-if="!$route.meta.keepAlive" class="component-content"></router-view>
  </div>
</template>

<script>
import { unionData } from "./data.js";
export default {
  name: "yulang-packages-union",
  data() {
    return {
      unionData,
      componentIndex: 2,
    };
  },
  computed: {},
  methods: {
    // 跳转到
    jumpComponentRouter(item, index) {
      if (item.level === 2 && item.path) {
        this.$router.push(item.path);
        this.unionData = this.unionData.map((item, unionDataIndex) => {
          item.active = index === unionDataIndex;
          return item;
        });
      }
    },
    unionDataClass(item) {
      return [
        "menu-title-" + item.level,
        item.active ? "menu-title-actived" : "",
        item.level === 2 ? "menu-title-level2-common" : "",
      ];
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
