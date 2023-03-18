<template>
  <div class="packages-yulang-checkbox-group-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "yulang-checkbox-group",
  props: {
    value: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      yulangComponentName: "yulang-checkbox-group",
    };
  },
  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  mounted() {
    this.$children.forEach((component) => {
      if (
        component.yulangComponentName === "yulang-checkbox" &&
        this.valueComputed.find((item) => item === component.label)
      ) {
        component.inputValue = true;
      }
    });
  },
};
</script>

<style lang="less" scoped></style>
