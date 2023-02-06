<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    {{ errorMessage }}
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  name: "yulang-form-item",
  inject: ["yulangForm"],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: String,
  },
  data() {
    return { errorMessage: "" };
  },
  methods: {
    validate() {
      if (this.prop) {
        let rule = this.yulangForm.rules[this.prop];
        let newValue = this.yulangForm.model[this.prop];
        let descriptor = {
          [this.prop]: rule,
        };
        let schema = new Schema(descriptor);
        let validateData = { [this.prop]: newValue };
        return schema.validate(validateData, (err) => {
          if (err) {
            this.errorMessage = err[0].message;
          } else {
            this.errorMessage = "";
          }
        });
      } else {
        return false;
      }
    },
    resetFields() {
      this.$children.forEach((item) => {
        if (item.resetFields) {
          item.resetFields();
        }
      });
    },
  },
  mounted() {
    // console.log(this, "yulang-form-item");
  },
};
</script>

<style lang="less" scoped></style>
