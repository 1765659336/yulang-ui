<template>
  <yulang-rate
    :rateItemNumber="3"
    v-model="value"
    :texts="['低', '中', '高']"
    showText
  >
  </yulang-rate>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
};
</script>

<style lang="less" scoped></style>
