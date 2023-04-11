<template>
  <div
    :class="containerClass"
    @click="handleClick"
    :style="{
      '--margin-top-botton--': this.marginTopBotton,
      '--margin-left-right--': this.marginLeftRight,
    }"
    ref="container"
  >
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
const sizeRuler = {
  medium: { marginTopBotton: "50px", marginLeftRight: "80px" },
  small: { marginTopBotton: "40px", marginLeftRight: "60px" },
  mini: { marginTopBotton: "30px", marginLeftRight: "40px" },
};
export default {
  name: "yulang-button",
  props: {
    // 控制按钮是否禁用
    disabled: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    // 设置按钮的主题
    type: {
      type: String,
      default: () => {
        return "default";
      },
      validator: (value) => {
        return ["default", "success", "error"].find((item) => item === value);
      },
    },
    // 设置按钮的大小
    size: {
      type: String,
      default: () => {
        return Vue.prototype.yulangComponentSize;
      },
      validator: (value) => {
        return ["medium", "small", "mini"].find((item) => item === value);
      },
    },
    // 是否开启点击动画
    isOpenClickAnimate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // 控制点击动画
      clickAnimate: false,
    };
  },
  computed: {
    containerClass: {
      get() {
        return {
          "packages-yulang-button-container": true,
          "is-disable": this.disabled,
          "not-disable": !this.disabled,
          "is-success": this.type === "success",
          "is-error": this.type === "error",
          "yulang-animate": this.clickAnimate,
          "yulang-push-release": this.clickAnimate,
        };
      },
    },
    // 按钮的上下间距
    marginTopBotton: {
      get() {
        return sizeRuler[this.size].marginTopBotton;
      },
    },
    // 按钮的左右间距
    marginLeftRight: {
      get() {
        return sizeRuler[this.size].marginLeftRight;
      },
    },
  },
  methods: {
    handleClick(e) {
      if (!this.disabled) {
        if (this.clickAnimate) {
          this.clickAnimate = false;
          // v-if+nexttick重新渲染
          // 或者使用animation-fill-mode: none/both切换;
          this.timer = setInterval(() => {
            this.clickAnimate = true;
          }, 1);
        } else {
          this.isOpenClickAnimate && (this.clickAnimate = true);
        }
        if (this.$listeners.click) {
          this.$listeners.click(e);
        }
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
