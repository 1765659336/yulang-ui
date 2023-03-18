<template>
  <div>
    <div>
      <yulang-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">Http://</template>
      </yulang-input>
    </div>
    <div>
      <yulang-input placeholder="请输入内容" v-model="input2">
        <template slot="append">.com</template>
      </yulang-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
    };
  },
};
</script>

<style lang="less" scoped></style>
