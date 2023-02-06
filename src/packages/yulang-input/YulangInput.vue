<template>
  <input :type="type" v-model="valueComputed" />
</template>

<script>
export default {
  name: "yulang-input",
  props: {
    value: {},
    type: {
      type: String,
      default: () => {
        return "text";
      },
    },
  },
  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    resetFields() {
      this.valueComputed = null;
    },
  },
};
</script>

<style lang="less" scoped></style>
