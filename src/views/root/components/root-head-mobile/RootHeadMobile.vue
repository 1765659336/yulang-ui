<template>
  <div class="yulang-head-mobile-container">
    <div class="yulang-head-menu-mobile-items">
      <div
        v-for="item in btnArr"
        :key="item.title"
        @click="jump(item)"
        class="yulang-head-menu-mobile-item"
      >
        {{ item.title }}
      </div>
      <div class="yulang-head-menu-mobile-item" @click="themeChange">
        <i class="iconfont icon-zhuti_tiaosepan_o theme-icon-color"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { btnArr } from "../root-head/data";

export default {
  data() {
    return {
      btnArr,
    };
  },
  props: {
    theme: {},
  },
  watch: {
    theme: {
      handler(val) {
        // 右边是绿色系的
        const root = document.querySelector(":root");
        root.style.setProperty(
          "--yulang-theme-color--",
          val ? "#69DFEB" : "#00DF74"
        );
        root.style.setProperty(
          "--yulang-font-color--",
          val ? "#69DFEB" : "#2FFF00"
        );
        root.style.setProperty(
          "--yulang-border-color--",
          val ? "#87D0EC" : "#00DF74"
        );
        root.style.setProperty(
          "--yulang-background-color--",
          val ? "#0094A3" : "#00BB9C"
        );
      },
      immediate: true,
    },
  },
  methods: {
    // 跳转到组件页面
    jump(item) {
      this.$router.push(item.path);
    },
    themeChange() {
      this.$emit("update:theme", !this.theme);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
