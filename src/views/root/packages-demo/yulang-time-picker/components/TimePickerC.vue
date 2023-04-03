<template>
  <yulang-time-picker
    arrow-control
    v-model="value"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00',
    }"
    placeholder="任意时间点"
  >
  </yulang-time-picker>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(2016, 9, 10, 18, 40),
    };
  },
};
</script>

<style lang="less" scoped></style>
