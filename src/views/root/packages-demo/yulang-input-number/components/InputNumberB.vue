<template>
  <yulang-input-number
    v-model="input"
    @change="handleChange"
    :min="1"
    :max="10"
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
