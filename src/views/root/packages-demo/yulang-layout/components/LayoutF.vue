<template>
  <div>
    <yulang-row type="flex" class="container">
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
    </yulang-row>
    <yulang-row type="flex" justify="center" class="container">
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
    </yulang-row>
    <yulang-row type="flex" justify="end" class="container">
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
    </yulang-row>
    <yulang-row type="flex" justify="space-between" class="container">
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
    </yulang-row>
    <yulang-row type="flex" justify="space-around" class="container">
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
    </yulang-row>
  </div>
</template>

<style lang="less" scoped>
.container {
  background-color: #f9fafc;
  padding: 10px 0;

  .grid-content {
    background-color: #d3dce6;
    height: 2rem;
  }

  .grid-content2 {
    background-color: #e5e9f2;
    height: 2rem;
  }
}
</style>
