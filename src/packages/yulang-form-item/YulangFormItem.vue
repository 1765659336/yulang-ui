<template>
  <div
    class="packages-yulang-form-item-container"
    :style="{
      '--yulang-form-container-direction--':
        yulangForm.labelPosition === 'top' ? 'column' : 'row',
      '--yulang-form-label-text-align--':
        yulangForm.labelPosition !== 'top' ? yulangForm.labelPosition : 'left',
      '--yulang-form-label-width--': yulangForm.labelWidth
        ? yulangForm.labelWidth
        : 'auto',
    }"
  >
    <label
      v-if="label"
      :class="['yulang-form-item-lable', isRequire ? 'require-icon' : '']"
      >{{ label }}</label
    >
    <div class="yulang-form-item-content">
      <slot></slot>
      <div class="errorMessage">{{ errorMessage }}</div>
    </div>
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
    return {
      errorMessage: "",
      yulangComponentName: "yulang-form-item",
      isRequire: false,
    };
  },
  methods: {
    validate() {
      if (this.prop) {
        let rule = this.yulangForm.rules[this.prop];
        let newValue = this.yulangForm.model[this.prop];
        if (!rule || rule.length === 0) {
          return Promise.resolve(
            `form表单rules校验规则中不存在{${this.prop}}属性值，默认校验成功`
          );
        }
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
        return Promise.resolve(
          `formItem未传入{${this.prop}}prop属性，默认校验成功`
        );
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
    // console.log(this.yulangForm);
    // let rule = this.yulangForm.rules[this.prop];
    // console.log(rule);
    // console.log(rule.find((item) => item.required));
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-form-item-container {
  display: flex;
  flex-direction: var(--yulang-form-container-direction--);
  align-items: center;
  margin: 10px;

  .yulang-form-item-lable {
    display: inline-block;
    padding: 0 5px;
    text-align: var(--yulang-form-label-text-align--);
    width: var(--yulang-form-label-width--);
  }

  .require-icon::before {
    content: "*";
    color: #f56c6c;
    margin-right: 4px;
  }

  .yulang-form-item-content {
    position: relative;
    padding-bottom: 20px;

    .errorMessage {
      position: absolute;
      height: 20px;
      color: #f56c6c;
    }
  }
}
</style>
