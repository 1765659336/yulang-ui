<template>
  <div class="packages-yulang-tab-pane-container">
    <div v-if="isKeepAlive">
      <div v-show="isShow">
        <slot></slot>
      </div>
    </div>
    <div v-else>
      <div v-if="isShow">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yulang-tab-pane',
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
      yulangComponentName: 'yulang-tab-pane',
      isShow: false,
      // 是否缓存子tabs
      isKeepAlive: true,
    };
  },
};
</script>

<style lang="less" scoped></style>
