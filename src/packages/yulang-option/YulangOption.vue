<template>
  <div class="packages-yulang-option-container" @click="optionClick">
    {{ label }}
  </div>
</template>

<script>
export default {
  name: "yulang-option",
  props: {
    // key: {},
    label: {},
    value: {},
  },
  inject: ["YulangSelect", "closePopover"],
  methods: {
    optionClick() {
      this.YulangSelect.valueComputed = this.value;
      this.YulangSelect.label = this.label;
      this.closePopover();
    },
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-option-container {
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: skyblue;
  }
}
</style>
