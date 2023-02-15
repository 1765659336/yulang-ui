<template>
    <yulang-input
    v-model="value"
    placeholder="请输入"
    showPassword
  ></yulang-input>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style lang="less" scoped></style>
