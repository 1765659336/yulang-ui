<template>
  <yulang-input-number
    v-model="input"
    @change="handleChange"
    :step="5"
    :stepStrictly="true"
  >
  </yulang-input-number>
</template>

<script>
export default {
  data() {
    return {
      input: 0,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="less" scoped></style>
