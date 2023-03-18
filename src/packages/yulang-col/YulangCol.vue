<template>
  <div
    class="packages-yulang-col-container"
    :style="{
      '--col-span--': span,
      '--col-gutter--': gutter + 'px',
      '--col-colNum--': colNum - 1,
      '--col-padding--': padding,
      '--col-offset--': offsetData,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "yulang-col",
  props: {
    // 占据的比例
    span: {
      type: Number,
      validator(value) {
        return value <= 24;
      },
    },
    // 偏移的比例
    offset: {
      type: Number,
      default: 0,
      validator(value) {
        return value < 24;
      },
    },
  },
  data() {
    return {
      yulangComponentName: "yulang-col",
      gutter: 0,
      colNum: 0,
      padding: 0,
      offsetData: this.offset,
    };
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-col-container {
  width: calc(var(--col-span--) / 24 * 100% - var(--col-padding--) * 2);
  padding: var(--col-padding--);
  background-color: white;
  display: inline-block;
  margin-left: calc(var(--col-offset--) / 24 * 100%);
}
</style>
