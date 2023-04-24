<template>
  <div class="yulang-head-container" id="yulang-head-container">
    <h3 class="yulang-head-title">
      <img
        src="@/assets/images/langicon.png"
        alt=""
        @click="jump({ path: '/' + $locale.locale + '/root/home' })"
      />
    </h3>
    <div class="yulang-head-menu-items">
      <div
        @click="jump(item)"
        class="yulang-head-menu-item"
        :class="menuItemClass(item)"
        :id="item.id"
        v-for="item in btnArr"
        :key="item.title"
      >
        {{ item.title }}
      </div>
    </div>
    <yulang-switch
      id="switchTheme"
      v-model="themeComputed"
      inactiveText="绿"
      activeText="蓝"
      inactiveColor="#2FFF00"
      activeColor="#69DFEB"
      >切换主题</yulang-switch
    >
    <yulang-dropdown @command="commandHandle">
      <span class="yulang-dropdown-link">
        语言：{{ locale }}<i class="iconfont icon-chevron-down"></i>
      </span>
      <template #dropdown>
        <yulang-dropdown-menu>
          <yulang-dropdown-item command="zh">中文</yulang-dropdown-item>
          <yulang-dropdown-item command="en">英文</yulang-dropdown-item>
        </yulang-dropdown-menu>
      </template>
    </yulang-dropdown>
    <!-- 这是引导组件 -->
    <yulang-leader
      :leader-list="leaderList"
      v-if="isShowLeader"
    ></yulang-leader>
  </div>
</template>

<script>
import YulangSwitch from "@/packages/yulang-switch/YulangSwitch.vue";
import { btnArr } from "./data";
export default {
  name: "yulang-head",
  components: {
    YulangSwitch,
  },
  props: {
    theme: {},
  },
  data() {
    return {
      btnArr: btnArr(this),
      isShowLeader: false,
      leaderList: [
        {
          // 指定id
          target: "#guide",
          text: "配置和使用yulangUI的一些相关事宜",
          placement: "bottom",
        },
        {
          // 指定id
          target: "#packages-demo",
          text: "这里包含组件的使用说明演示和属性",
          placement: "bottom",
        },
        {
          // 指定id
          target: "#theme",
          text: "设置组件库的全局风格配置",
          placement: "bottom",
        },
        {
          // 指定id
          target: "#resources",
          text: "包含开箱即用的全局动画,自定义指令和工具函数",
          placement: "bottom",
        },
        {
          // 指定id
          target: "#switchTheme",
          text: "主题的选择,支持自定义主题",
          placement: "bottom",
        },
      ],
    };
  },
  computed: {
    themeComputed: {
      get() {
        return this.theme;
      },
      set(newVal) {
        this.$emit("update:theme", newVal);
      },
    },
    locale() {
      return this.$locale.locale === "zh" ? "中文" : "英文";
    },
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
    menuItemClass(item) {
      // console.log(this.$route);
      return {
        // 选中样式
        ["yulang-head-menu-item-active"]:
          item.path === this.$route.matched[1].path,
      };
    },
    commandHandle(command) {
      this.$router.push(this.$route.fullPath.replace(/zh|en/gi, command));
    },
  },
  mounted() {
    // console.log(localStorage.isFirstVisit);
    if (!localStorage.isFirstVisit) {
      this.isShowLeader = true;
      localStorage.isFirstVisit = true;
    } else {
      this.isShowLeader = false;
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
