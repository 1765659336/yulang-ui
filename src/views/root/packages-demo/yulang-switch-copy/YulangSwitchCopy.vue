<template>
  <div>
    <yulang-switch-copy v-model="value" :textTitle="['开', '关']"></yulang-switch-copy>
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "packages-demo-yulang-switch-copy",
  data() {
    return {
      value: false,
    };
  },
};
</script>

<style lang="less" scoped></style>
