<template>
  <div class="packages-yulang-breadcrumb-item-container" @click="jumpPage">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "yulang-breadcrumb-item",
  props: {
    // 跳转的地址
    to: {
      type: Object,
      validator(value) {
        return value.path;
      },
    },
  },
  data() {
    return {
      yulangComponentName: "yulang-breadcrumb-item",
    };
  },
  methods: {
    jumpPage() {
      this.to.path && (window.location.href = this.to.path);
    },
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-breadcrumb-item-container {
  display: inline-block;
  padding: 5px 1rem;
  cursor: pointer;
}
</style>
