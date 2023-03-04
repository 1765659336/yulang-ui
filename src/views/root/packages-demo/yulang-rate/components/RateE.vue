<template>
  <yulang-rate v-model="value" :rateItemNumber="3" clearable />
</template>

<script>
export default {
  data() {
    return {
      value: 1,
    };
  },
};
</script>

<style lang="less" scoped></style>
