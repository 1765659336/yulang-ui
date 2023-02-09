<template>
  <yulang-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <yulang-form-item label="名字" prop="pass">
      <yulang-input v-model="ruleForm.pass"></yulang-input>
    </yulang-form-item>
    <yulang-form-item label="年龄" prop="age">
      <yulang-input v-model="ruleForm.age"></yulang-input>
    </yulang-form-item>
    <yulang-form-item>
      <yulang-button @click="submitForm()">提交</yulang-button>
      <yulang-button @click="resetForm()">重置</yulang-button>
    </yulang-form-item>
  </yulang-form>
</template>

<script>
export default {
  name: "packages-demo-yulang-form",
  data() {
    return {
      ruleForm: {
        pass: "",
        age: "",
      },
      rules: {
        pass: [{ required: true, message: "请输入名字", trigger: "blur" }],
        age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="less" scoped></style>
