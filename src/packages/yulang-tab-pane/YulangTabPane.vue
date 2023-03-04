<template>
  <div class="packages-yulang-tab-pane-container" v-show="isShow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "yulang-tab-pane",
  props: {
    label: {
      type: String,
      require: true,
    },
    name: {
      require: true,
    },
  },
  data() {
    return {
      yulangComponentName: "yulang-tab-pane",
      isShow: false,
    };
  },
};
</script>

<style lang="less" scoped></style>
