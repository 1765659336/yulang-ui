<template>
  <div
    class="packages-yulang-container-container"
    :style="{ '--flex-direction--': flexDirection }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "yulang-container",
  data() {
    return {
      // 默认不换行也就是水平排列
      flexDirection: "nowrap",
    };
  },
  mounted() {
    // 判断是否有YulangHeader或YulangFooter组件来改为垂直布局
    this.$children.forEach((component) => {
      if (
        ["yulang-header", "yulang-footer"].find(
          (item) => item === component.yulangComponentName
        )
      ) {
        this.flexDirection = "wrap";
      }
    });
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
