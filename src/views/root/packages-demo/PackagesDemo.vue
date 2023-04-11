<template>
  <div class="yulang-packages-union">
    <div class="component-menu union-menu" id="component-menu">
      <yulang-link url="https://gitee.com/langlangyilangl/yulang-ui"
        >gitee仓库地址</yulang-link
      >
      <div
        v-for="item in unionData"
        :key="item.title"
        :class="unionDataClass(item)"
        @click="jumpComponentRouter(item)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="component-menu-mobile union-menu">
      <yulang-button @click="drawer = true"><i class="iconfont icon-jiuping"></i></yulang-button>
      <yulang-drawer :visible.sync="drawer" :withHeader="false" direction="left">
        <yulang-link url="https://gitee.com/langlangyilangl/yulang-ui"
          >gitee仓库地址</yulang-link
        >
        <div
          v-for="item in unionData"
          :key="item.title"
          :class="unionDataClass(item)"
          @click="jumpComponentRouter(item, true)"
        >
          {{ item.title }}
        </div>
      </yulang-drawer>
    </div>
    <keep-alive>
      <!-- 需要缓存的视图组件 -->
      <router-view
        v-if="$route.meta.keepAlive"
        class="component-content"
      ></router-view>
    </keep-alive>
    <!-- 不需要缓存的视图组件 -->
    <router-view
      v-if="!$route.meta.keepAlive"
      class="component-content"
    ></router-view>
  </div>
</template>

<script>
import YulangDrawer from "@/packages/yulang-drawer/YulangDrawer.vue";
import { unionData } from "./data.js";
export default {
  components: { YulangDrawer },
  name: "yulang-packages-union",
  data() {
    return {
      unionData,
      drawer: false,
    };
  },
  computed: {},
  methods: {
    // 跳转到
    jumpComponentRouter(item, isCloseDrawer) {
      if (item.level === 2 && item.path) {
        this.$router.push(item.path);
      }
      isCloseDrawer && (this.drawer = false);
    },
    unionDataClass(item) {
      return [
        "menu-title-" + item.level,
        item.path === this.$route.path ? "menu-title-actived" : "",
        item.level === 2 ? "menu-title-level2-common" : "",
      ];
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
