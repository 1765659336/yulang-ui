<template>
  <div class="packages-yulang-collapse-item-container">
    <div
      class="yulang-collapse-item-title-container"
      @click="titleContainerClick"
    >
      <div class="title">
        <slot name="title">{{ title }}</slot>
      </div>
      <i class="iconfont icon-chevron-down" v-if="isOpen"></i>
      <i class="iconfont icon-chevron-right" v-else></i>
    </div>
    <div class="yulang-collapse-item-content" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "yulang-collapse-item",
  props: {
    // 折叠面板的title标题
    title: {},
    // 当前折叠面板的标识
    name: {},
  },
  data() {
    return {
      isOpen: false,
      yulangComponentName: "yulang-collapse-item",
    };
  },
  methods: {
    titleContainerClick() {
      if (
        this.$parent.yulangComponentName === "yulang-collapse" &&
        this.$parent.accordion
      ) {
        // 如果开启手风琴模式
        this.$parent.$children.forEach((component) => {
          if (
            component.yulangComponentName === "yulang-collapse-item" &&
            component.name !== this.name
          ) {
            component.isOpen = false;
          }
        });
      }
      this.isOpen = !this.isOpen;
      let valueChanged;
      if (this.isOpen) {
        if (this.$parent.accordion) {
          valueChanged = this.name;
        } else {
          valueChanged = [...this.$parent.valueComputed, this.name];
        }
      } else {
        if (this.$parent.accordion) {
          valueChanged = this.name;
        } else {
          valueChanged = this.$parent.valueComputed.filter(
            (item) => item !== this.name
          );
        }
      }
      this.$parent.valueComputed = valueChanged;
      this.$parent.$listeners.change &&
        this.$parent.$listeners.change(valueChanged);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
