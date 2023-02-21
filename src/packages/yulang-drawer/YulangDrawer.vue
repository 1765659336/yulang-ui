<template>
  <div
    class="packages-yulang-drawer-container"
    v-if="visibleComputed"
    :style="{ '--width--': width, '--height--': height }"
  >
    <!-- 遮罩层 -->
    <div class="mask-layer" @click="maskLayerClick"></div>
    <!-- 内容容器 -->
    <div :class="`yulang-drawer-content-container-${direction}`">
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
</template>

<script>
import { isFalse } from "@/packages/lib";
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
    maskLayerClick() {
      this.wrapperClosable && this.changeVisible();
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
