<template>
  <div class="packages-yulang-collapse-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "yulang-collapse",
  props: {
    // 当前展开的折叠面板
    value: {},
    // 是否开启手风琴模式
    accordion: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
  },
  data() {
    return {
      yulangComponentName: "yulang-collapse",
    };
  },
  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  mounted() {
    // 初始化传入的value来默认开启折叠面板
    if (this.accordion) {
      this.$children.forEach((component) => {
        if (
          component.yulangComponentName === "yulang-collapse-item" &&
          this.valueComputed === component.name
        ) {
          component.isOpen = true;
        }
      });
    } else {
      this.$children.forEach((component) => {
        if (
          component.yulangComponentName === "yulang-collapse-item" &&
          this.valueComputed.find((item) => item === component.name)
        ) {
          component.isOpen = true;
        }
      });
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
