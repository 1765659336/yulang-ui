<template>
  <div>
    <yulang-radio-group v-model="labelPosition">
      <yulang-radio label="left">左对齐</yulang-radio>
      <yulang-radio label="right">右对齐</yulang-radio>
      <yulang-radio label="top">顶部对齐</yulang-radio>
    </yulang-radio-group>
    <div style="margin: 20px"></div>
    <yulang-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
      :style="{ width: '400px' }"
    >
      <yulang-form-item label="名称">
        <yulang-input v-model="formLabelAlign.name"></yulang-input>
      </yulang-form-item>
      <yulang-form-item label="活动区域">
        <yulang-input v-model="formLabelAlign.region"></yulang-input>
      </yulang-form-item>
      <yulang-form-item label="活动形式">
        <yulang-input v-model="formLabelAlign.type"></yulang-input>
      </yulang-form-item>
    </yulang-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
};
</script>

<style lang="less" scoped></style>
