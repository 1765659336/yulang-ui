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
    labelPosition: {
      type: String,
      default: "left",
      validator(value) {
        return ["top", "left", "right"].find((item) => item === value);
      },
    },
    labelWidth: {
      type: String,
    },
  },
  provide() {
    return {
      yulangForm: this,
    };
  },
  methods: {
    validate(fn) {
      const validateArr = [];
      this.$children.forEach((component) => {
        if (
          component.yulangComponentName === "yulang-form-item" &&
          component.validate
        ) {
          const result = component.validate();
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
    validateField(record) {
      this.$children.forEach((component) => {
        if (
          component.yulangComponentName === "yulang-form-item" &&
          component.validate &&
          component.prop === record
        ) {
          component.validate();
        }
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
    // 给formItem添加必填icon
    this.$children.forEach((component) => {
      if (component.yulangComponentName === "yulang-form-item") {
        if (this.rules && component.prop) {
          let rule = this.rules[component.prop];
          if (rule && rule.find((item) => item.required)) {
            component.isRequire = true;
          }
        }
      }
    });
  },
};
</script>

<style lang="less" scoped></style>
