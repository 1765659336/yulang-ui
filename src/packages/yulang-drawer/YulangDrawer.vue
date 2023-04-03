<template>
  <transition
    @before-leave="transitionBeforeLeave"
    @enter="transitionEnter"
    :duration="{ enter: 500, leave: 500 }"
  >
    <div
      class="packages-yulang-drawer-container"
      v-if="visibleComputed"
      :style="{ '--width--': width, '--height--': height }"
      ref="drawerRef"
    >
      <!-- 遮罩层 -->
      <div class="mask-layer" @click="maskLayerClick"></div>
      <!-- 内容容器 -->
      <div
        :class="`yulang-drawer-content-container-${direction}`"
        ref="content"
      >
        <div class="content-title-container" v-if="withHeader">
          <div class="content-title" v-if="isFalse(title, 0, false)">
            <slot name="title">{{ title }}</slot>
          </div>
          <i class="iconfont icon-guanbi" @click="changeVisible"></i>
        </div>
        <div class="content-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { isFalse } from "@/packages/lib";
const directionAnimateClass = {
  left: {
    enter: "yulang-blur-in-left",
    lever: "yulang-blur-out-left",
  },
  top: {
    enter: "yulang-blur-in-top",
    lever: "yulang-blur-out-top",
  },
  bottom: {
    enter: "yulang-blur-in-bottom",
    lever: "yulang-blur-out-bottom",
  },
  right: {
    enter: "yulang-blur-in-right",
    lever: "yulang-blur-out-right",
  },
};
export default {
  name: "yulang-drawer",
  props: {
    // 抽屉的标题
    title: {},
    // 控制弹窗的显示与隐藏
    visible: {
      type: Boolean,
      default: false,
    },
    // 抽屉的方向
    direction: {
      type: String,
      default: "right",
      validator(value) {
        return ["top", "right", "bottom", "left"].find(
          (item) => item === value
        );
      },
    },
    // 点击遮罩层是否可以关闭抽屉
    wrapperClosable: {
      type: Boolean,
      default: true,
    },
    // 抽屉的高度，当direction为top/bottom时生效
    height: {
      default: "50%",
    },
    // 抽屉的宽度，当direction为left/right时生效
    width: {
      default: "50%",
    },
    // 控制是否显示头部title与关闭icon
    withHeader: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    visibleComputed: {
      get() {
        return this.visible;
      },
      set(value) {
        this.$emit("update:visible", value);
      },
    },
  },
  methods: {
    isFalse,
    changeVisible() {
      if (this.$listeners.beforeClose) {
        this.$listeners.beforeClose(() => {
          this.visibleComputed = false;
        });
      } else {
        this.visibleComputed = !this.visibleComputed;
      }
    },
    // 遮罩层点击事件
    maskLayerClick() {
      this.wrapperClosable && this.changeVisible();
    },
    // 组件离开之前的钩子
    transitionBeforeLeave() {
      this.$refs.content.classList.remove(
        directionAnimateClass[this.direction].enter
      );
      this.$refs.content.classList.add(
        directionAnimateClass[this.direction].lever
      );
    },
    // 组件进入的钩子函数
    transitionEnter() {
      this.$refs.content.className +=
        " yulang-animate " + directionAnimateClass[this.direction].enter;
      this.$nextTick(() => {
        this.$refs.drawerRef.style.zIndex = this.$yulangIndex.getIndex();
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
