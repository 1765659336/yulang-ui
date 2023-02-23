<template>
  <yulang-radio-group v-model="radio">
    <yulang-radio label="1" disabled>Option 1</yulang-radio>
    <yulang-radio label="2">Option 2</yulang-radio>
    {{ radio }}
  </yulang-radio-group>
</template>

<script>
export default {
  data() {
    return {
      radio: null,
    };
  },
};
</script>

<style lang="less" scoped></style>
