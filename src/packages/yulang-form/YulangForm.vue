<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "yulang-form",
  props: {
    model: {
      type: Object,
      default: () => ({}),
    },
    rules: Object,
  },
  provide() {
    return {
      yulangForm: this,
    };
  },
  methods: {
    validate(fn) {
      const validateArr = [];
      this.$children.forEach((item) => {
        if (item.validate) {
          const result = item.validate();
          if (result) {
            return validateArr.push(result);
          }
        }
      });
      return Promise.all(validateArr)
        .then((res) => {
          fn(true, res);
        })
        .catch((err) => {
          fn(false, err);
        });
    },
    resetFields(option) {
      // 统一重置
      if (!option) {
        this.$children.forEach((item) => {
          if (item.resetFields) {
            item.resetFields();
          }
        });
      }
      // 可以根据option中的field字段来重置某字段的值
    },
  },
  mounted() {
    // console.log(this, "yulang-form");
  },
};
</script>

<style lang="less" scoped></style>
