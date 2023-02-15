<template>
  <div
    :class="`packages-yulang-divider-container-${direction}`"
    :style="{ '--content-position--': contentPositionComputed }"
  >
    <div class="packages-yulang-divider-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "yulang-divider",
  props: {
    // 文案的位置
    contentPosition: {
      type: String,
      default: "center",
      validator(value) {
        // 前端单位正则校验
        return (
          ["left", "right", "center"].find((item) => item === value) || true
        );
      },
    },
    // 分割线的方向
    direction: {
      type: String,
      default: "row",
      validator(value) {
        return ["row", "column"].find((item) => item === value);
      },
    },
  },
  computed: {
    contentPositionComputed: {
      get() {
        return (
          { left: "20%", right: "80%", center: "50%" }[this.contentPosition] ??
          this.contentPosition
        );
      },
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
