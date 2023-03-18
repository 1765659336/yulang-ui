<template>
  <yulang-form :model="ruleForm" :rules="rules" ref="form" label-width="100px">
    <yulang-form-item label="密码" prop="pass">
      <yulang-input type="password" v-model="ruleForm.pass"></yulang-input>
    </yulang-form-item>
    <yulang-form-item label="确认密码" prop="checkPass">
      <yulang-input type="password" v-model="ruleForm.checkPass"></yulang-input>
    </yulang-form-item>
    <yulang-form-item label="年龄" prop="age">
      <yulang-input v-model.number="ruleForm.age"></yulang-input>
    </yulang-form-item>
    <yulang-form-item>
      <yulang-button @click="submitForm('ruleForm')"
        >提交</yulang-button
      >
      <yulang-button @click="resetForm('ruleForm')">重置</yulang-button>
    </yulang-form-item>
  </yulang-form>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$yulangNotification({
            type: "success",
            message: "submit",
          });
        } else {
          this.$yulangNotification({
            type: "error",
            message: "error",
          });
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
  },
};
</script>

<style lang="less" scoped></style>
