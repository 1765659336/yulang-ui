<template>
  <div class="container">
    <root-head class="root-head-div" :theme.sync="theme"></root-head>
    <div class="root-content-view">
      <keep-alive>
        <!-- 需要缓存的视图组件 -->
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <!-- 不需要缓存的视图组件 -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <root-head-mobile
      class="root-head-mobile-div"
      :theme.sync="theme"
    ></root-head-mobile>

    <!-- 这是回到顶部组件 -->
    <yulang-back-top :bottom="100" :right="100" :hiddenValue="100">
      <div class="back-top-radiu">
        <div class="back-top-triangle"></div>
      </div>
    </yulang-back-top>
  </div>
</template>

<script>
import RootHead from "@/views/root/components/root-head/RootHead.vue";
import RootHeadMobile from "@/views/root/components/root-head-mobile/RootHeadMobile.vue";

export default {
  name: "yulang-root",
  components: {
    RootHead,
    RootHeadMobile,
  },
  data() {
    return {
      theme: true,
    };
  },
};
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
