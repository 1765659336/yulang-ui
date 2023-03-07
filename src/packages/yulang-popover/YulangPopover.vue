<template>
  <div
    class="packages-yulang-popover-container"
    :style="{
      '--yulang-popover-reference-min-width--': minWidth + 'px',
      '--yulang-popover-reference-max-width--': maxWidth + 'px',
      '--yulang-popover-position-min-height--': minHeight + 'px',
      '--yulang-popover-position-max-height--': maxHeight + 'px',
    }"
  >
    <div
      class="yulang-popover-reference"
      ref="yulangPopoverReferenceRef"
      v-YulangClickOutside="closeShow"
    >
      <!-- 触发点 -->
      <div ref="referenceRef">
        <slot name="reference"></slot>
      </div>
      <!-- 内容区 -->
      <transition
        @before-leave="transitionBeforeLeave"
        @enter="transitionEnter"
        :duration="{ enter: 500, leave: 500 }"
      >
        <div
          class="yulang-popover-position"
          v-if="isShow"
          ref="yulangPopoverContentRef"
        >
          <!-- 箭头 -->
          <!-- <div class="yulang-popover-triangle"></div> -->
          <!-- 标题 -->
          <div class="yulang-popover-title" v-if="title">
            <span>{{ title }}</span>
          </div>
          <!-- 内容区 -->
          <div class="yulang-popover-content">
            <slot name="content">
              <div>{{ content }}</div>
            </slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { longClick, getPosition, changePosition } from "@/packages/lib";
import { positionArr } from "@/packages/constant";
export default {
  name: "yulang-popover",
  props: {
    // popover弹出框中的文本
    content: {
      default: "",
    },
    // 弹出框的标题
    title: {},
    // 弹出框的最小宽度
    minWidth: {
      type: Number,
      default: () => {
        return 100;
      },
    },
    maxWidth: {
      type: Number,
      default: () => {
        return 500;
      },
    },
    // 弹出框的最小高度
    minHeight: {
      type: Number,
      default: () => {
        return 16;
      },
    },
    // 弹出框的最大的高度，超出最大高度开启滚动条
    maxHeight: {
      type: Number,
      default: () => {
        return 500;
      },
    },
    // 弹出框的触发方式
    trigger: {
      type: String,
      default: () => {
        return "manual";
      },
      validator(value) {
        return ["click", "hover", "focus", "manual"].find(
          (item) => item === value
        );
      },
    },
    // 弹出框默认弹出的位置
    placement: {
      type: String,
      default: "bottom",
      validator(value) {
        return positionArr.find((item) => item === value);
      },
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    // 组件离开之前的钩子
    transitionBeforeLeave(el) {
      el.classList.remove("yulang-rotate-y-in");
      el.classList.add("yulang-rotate-y-out");
    },
    // 组件进入的钩子函数
    transitionEnter(el) {
      el.className += " yulang-animate yulang-rotate-y-in";
    },
    // 关闭
    closeShow() {
      this.isShow = false;
    },
    showChange(e, type) {
      if (type) {
        if (type === "down") {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      } else {
        this.isShow = !this.isShow;
      }
      this.isShow && this.$nextTick(this.getPositionFn);
    },
    getPositionFn() {
      changePosition(
        this.$refs.yulangPopoverReferenceRef,
        this.$refs.referenceRef,
        this.$refs.yulangPopoverContentRef,
        getPosition(
          this.placement,
          this.$refs.referenceRef,
          this.$refs.yulangPopoverContentRef,
          20,
          20
        )
      );
    },
  },
  mounted() {
    if (this.$refs.yulangPopoverReferenceRef) {
      if (this.trigger === "click") {
        this.$refs.referenceRef.addEventListener("click", (e) =>
          this.showChange(e)
        );
      }
      if (this.trigger === "hover") {
        this.$refs.referenceRef.addEventListener("mouseenter", (e) =>
          this.showChange(e)
        );
        this.$refs.referenceRef.addEventListener("mouseleave", (e) =>
          this.showChange(e)
        );
      }
      if (this.trigger === "focus") {
        longClick(this.$refs.referenceRef, this.showChange.bind(this));
      }
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
