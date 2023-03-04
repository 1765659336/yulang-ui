<template>
  <div class="yulang-head-container" id="yulang-head-container">
    <h3 class="yulang-head-title">
      <img src="@/assets/images/langicon.png" alt="" />
    </h3>
    <div class="yulang-head-menu-items">
      <div
        @click="jump(item)"
        class="yulang-head-menu-item"
        :class="menuItemClass(item)"
        v-for="item in btnArr"
        :key="item.title"
      >
        {{ item.title }}
      </div>
    </div>
    <div>中文</div>
  </div>
</template>

<script>
export default {
  name: "yulang-head",
  data() {
    return {
      btnArr: [
        {
          title: "指南",
          path: "/root/guide",
        },
        {
          title: "组件",
          path: "/root/packages-demo",
        },
        {
          title: "主题",
          path: "/root/theme",
        },
        {
          title: "资源",
          path: "/root/resources",
        },
      ],
    };
  },
  methods: {
    // 跳转到组件页面
    jump(item) {
      this.$router.push(item.path);
    },
    menuItemClass(item) {
      console.log(this.$route);
      return {
        // 选中样式
        ["yulang-head-menu-item-active"]: item.path === this.$route.matched[1].path,
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
