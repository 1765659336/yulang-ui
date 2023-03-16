<template>
  <div class="packages-yulang-radio-group-container">
    <slot></slot>
  </div>
</template>

<script>
import { uuid } from "@/packages/lib";
export default {
  name: "yulang-radio-group",
  props: {
    value: {},
  },
  data() {
    return {
      yulangComponentName: "yulang-radio-group",
    };
  },
  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  mounted() {
    // 为group中的所有radio添加相同的name
    const uuidKey = uuid();
    this.$children.forEach((component) => {
      if (component.yulangComponentName === "yulang-radio") {
        component.name = uuidKey;
        if (component.label === this.value) {
          component.checked = true;
        }
      }
    });
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
