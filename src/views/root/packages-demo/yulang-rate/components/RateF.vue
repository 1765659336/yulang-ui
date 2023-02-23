<template>
  <yulang-rate v-model="value" :rateItemNumber="3" disabled showScore scoreTemplate="{value} points"/>
</template>

<script>
export default {
  data() {
    return {
      value: 2,
    };
  },
};
</script>

<style lang="less" scoped></style>
