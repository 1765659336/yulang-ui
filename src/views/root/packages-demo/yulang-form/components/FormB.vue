<template>
  <yulang-form
    :model="form"
    ref="form"
    labelWidth="100px"
    :style="{ width: '600px' }"
  >
    <yulang-form-item label="名字">
      <yulang-input v-model="form.name"></yulang-input>
    </yulang-form-item>
    <yulang-form-item label="活动区域">
      <yulang-select v-model="form.region" placeholder="请选择活动区域">
        <yulang-option label="区域一" value="shanghai"></yulang-option>
        <yulang-option label="区域二" value="beijing"></yulang-option>
      </yulang-select>
    </yulang-form-item>
    <!-- <yulang-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker
          placeholder="选择时间"
          v-model="form.date2"
          style="width: 100%"
        ></el-time-picker>
      </el-col>
    </yulang-form-item> -->
    <yulang-form-item label="即时配送">
      <yulang-switch v-model="form.delivery"></yulang-switch>
    </yulang-form-item>
    <yulang-form-item label="活动性质">
      <yulang-checkbox-group v-model="form.type">
        <yulang-checkbox label="美食/餐厅线上活动"></yulang-checkbox>
        <yulang-checkbox label="地推活动"></yulang-checkbox>
        <yulang-checkbox label="线下主题活动"></yulang-checkbox>
        <yulang-checkbox label="单纯品牌曝光"></yulang-checkbox>
      </yulang-checkbox-group>
    </yulang-form-item>
    <yulang-form-item label="特殊资源">
      <yulang-radio-group v-model="form.resource">
        <yulang-radio label="线上品牌商赞助">线上品牌商赞助</yulang-radio>
        <yulang-radio label="线下场地免费">线下场地免费</yulang-radio>
      </yulang-radio-group>
    </yulang-form-item>
    <yulang-form-item label="活动形式">
      <yulang-input v-model="form.desc"></yulang-input>
    </yulang-form-item>
    <yulang-form-item class="btn">
      <yulang-button @click="onSubmit">立即创建</yulang-button>
      <yulang-button @click="resetForm">取消</yulang-button>
    </yulang-form-item>
  </yulang-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      // console.log("submit!");
      this.$yulangNotification({
        type: "success",
        message: "submit",
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.btn {
  display: flex;
  justify-content: flex-end;
}
</style>
