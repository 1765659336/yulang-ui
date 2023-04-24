<template>
  <yulang-time-picker
    v-model="value"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
    }"
  ></yulang-time-picker>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="less" scoped></style>
