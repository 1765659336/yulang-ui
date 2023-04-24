<template>
  <span class="yulang-pagination-total-container"
    >{{ promptText }}{{ total }}</span
  >
</template>

<script>
export default {
  name: "layout-total",
  props: {
    total: {},
    promptText: {
      default() {
        return this.$locale.gv(["pagination", "promptText"]);
      },
    },
  },
};
</script>

<style lang="less" scoped>
.yulang-pagination-total-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
