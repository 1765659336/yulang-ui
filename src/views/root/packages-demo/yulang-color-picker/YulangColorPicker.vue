<template>
  <yulang-color-picker v-model="value"></yulang-color-picker>
</template>

<script>
export default {
  name: "packages-demo-yulang-color-picker",
  data() {
    return {
      value: 'red',
    };
  },
};
</script>

<style lang="less" scoped></style>
