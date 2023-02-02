<template>
  <a
    :class="renderClass"
    :style="renderStyle"
    @click="clickFun"
    :href="url"
    :target="target"
    :disabled="disabledComputed"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "yulang-link",
  props: {
    mainColor: {
      type: String,
      default: () => {
        return "#54138c";
      },
    },
    url: {
      type: String,
      default: () => {
        return "";
      },
    },
    target: {
      type: String,
      default: () => {
        return "_self";
      },
    },
    disabled: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    openUnderline: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
  },
  computed: {
    disabledComputed: {
      get() {
        return this.disabled;
      },
      set(value) {
        this.emits("update:disabled", value);
      },
    },
    renderClass() {
      return {
        "custom-link-container": true,
        "custom-link-open-underline": this.openUnderline,
      };
    },
    renderStyle() {
      return {
        "--main-color--": this.mainColor,
        "--cursor--": this.disabledComputed ? "not-allowed" : "pointer",
      };
    },
  },
  methods: {
    clickFun(e) {
      if (this.disabledComputed) {
        e.preventDefault();
      } else {
        if (this.url === "") {
          e.preventDefault();
          this.emits("clickCallback", e);
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
