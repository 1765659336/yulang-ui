<template>
  <div
    :class="[
      'packages-yulang-row-container',
      type === 'flex' ? 'type-flex' : '',
    ]"
    :style="{
      '--row-gutter--': -gutter / 2 + 'px',
      '--justify-content--': justify,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "yulang-row",
  props: {
    // 间隙
    gutter: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: "default",
      validator(value) {
        return ["default", "flex"].find((item) => item === value);
      },
    },
    justify: {
      type: String,
      default: "start",
      validator(value) {
        return ["start", "center", "end", "space-between", "space-around"].find(
          (item) => item === value
        );
      },
    },
  },
  data() {
    return {
      colNum: 0,
    };
  },
  mounted() {
    const colComponentArr = this.$children.filter(
      (component) => component.yulangComponentName === "yulang-col"
    );
    this.colNum = colComponentArr.length;
    colComponentArr.forEach((component) => {
      component.gutter = this.gutter;
      component.colNum = this.colNum;
      component.padding = this.gutter / 2 + "px";
    });
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-row-container {
  margin: 0 var(--row-gutter--);
}

.type-flex {
  display: flex;
  justify-content: var(--justify-content--);
}
</style>
