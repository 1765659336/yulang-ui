export const codeStrB = `
<template>
  <yulang-time-picker
    v-model="value"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
    }"
    placeholder="选择时间"
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
`;

export const codeStrC = `
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
`