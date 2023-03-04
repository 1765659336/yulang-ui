<template>
  <span>共{{ total }}条</span>
</template>

<script>
export default {
  name: "layout-total",
  props: ["total"],
};
</script>

<style lang="less" scoped></style>
