export const codeStrB = `
<template>
  <yulang-radio-group v-model="radio" @change="groupChange">
    <yulang-radio label="1">Option 1</yulang-radio>
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
  methods: {
    groupChange(label) {
      console.log(label, "groupChange");
    },
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrC = `
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
`