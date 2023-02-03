<template>
  <div>
    <yulang-checkbox v-model="isCheckout" label="复选框" :disabled="false" />
    {{ isCheckout }}
    <yulang-button @click="btn">按钮</yulang-button>
  </div>
</template>

<script>
export default {
  name: "packages-yulang-checkbox",
  data() {
    return {
      isCheckout: false,
    };
  },
  methods: {
    btn() {
      this.isCheckout = !this.isCheckout;
    },
  },
};
</script>

<style lang="less" scoped></style>
