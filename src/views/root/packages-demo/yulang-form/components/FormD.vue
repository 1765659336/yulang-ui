<template>
  <yulang-form
    :model="form"
    ref="form"
    labelWidth="100px"
    :style="{ width: '600px' }"
    :rules="rules"
  >
    <yulang-form-item label="名字" prop="name">
      <yulang-input v-model="form.name"></yulang-input>
    </yulang-form-item>
    <yulang-form-item label="活动区域" prop="region">
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
    <yulang-form-item label="即时配送" prop="delivery">
      <yulang-switch v-model="form.delivery"></yulang-switch>
    </yulang-form-item>
    <yulang-form-item label="活动性质" prop="type">
      <yulang-checkbox-group v-model="form.type">
        <yulang-checkbox label="美食/餐厅线上活动"></yulang-checkbox>
        <yulang-checkbox label="地推活动"></yulang-checkbox>
        <yulang-checkbox label="线下主题活动"></yulang-checkbox>
        <yulang-checkbox label="单纯品牌曝光"></yulang-checkbox>
      </yulang-checkbox-group>
    </yulang-form-item>
    <yulang-form-item label="特殊资源" prop="resource">
      <yulang-radio-group v-model="form.resource">
        <yulang-radio label="线上品牌商赞助">线上品牌商赞助</yulang-radio>
        <yulang-radio label="线下场地免费">线下场地免费</yulang-radio>
      </yulang-radio-group>
    </yulang-form-item>
    <yulang-form-item label="活动形式" prop="desc">
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
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        console.log(valid);
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

<style lang="less" scoped>
.btn {
  display: flex;
  justify-content: end;
}
</style>
