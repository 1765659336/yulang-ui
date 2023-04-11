<template>
  <div class="packages-yulang-badge-container">
    <div class="yulang-badge-content">
      <slot></slot>
    </div>
    <div
      :class="[
        'yulang-badge-sub',
        `yulang-badge-sub-bc-${type}`,
        isDot ? 'yulang-badge-sub-bc-is-dot' : '',
      ]"
    >
      {{ isDot ? "" : valueComputed }}
    </div>
  </div>
</template>

<script>
export default {
  name: "yulang-badge",
  props: {
    value: {
      type: [Number, String],
    },
    type: {
      default: "default",
      validater(value) {
        return ["default", "warning", "primary"].find((item) => item === value);
      },
    },
    max: {
      type: Number,
    },
    isDot: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    valueComputed() {
      if (this.max && Number.isFinite(this.value) && this.value > this.max) {
        return this.max + "+";
      } else {
        return this.value;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
