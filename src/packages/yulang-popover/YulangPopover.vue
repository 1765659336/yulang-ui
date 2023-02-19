<template>
  <div
    class="packages-yulang-popover-container"
    :style="{ '--yulang-popover-reference-width--': width + 'px' }"
  >
    <div class="yulang-popover-reference" ref="yulangPopoverReferenceRef">
      <!-- 触发点 -->
      <div ref="referenceRef"><slot name="reference"></slot></div>
      <!-- 内容区 -->
      <div
        class="yulang-popover-position"
        v-show="isShow"
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
    // 弹出款的最小宽度
    width: {
      type: Number,
      default: () => {
        return 100;
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
          "top",
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
