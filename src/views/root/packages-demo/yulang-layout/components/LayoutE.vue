<template>
    <div>
      <yulang-row :gutter="20">
        <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
        <yulang-col :span="6" :offset="6"
          ><div class="grid-content2"></div
        ></yulang-col>
      </yulang-row>
      <yulang-row :gutter="20">
        <yulang-col :span="6" :offset="6"
          ><div class="grid-content"></div
        ></yulang-col>
        <yulang-col :span="6" :offset="6"
          ><div class="grid-content2"></div
        ></yulang-col>
      </yulang-row>
      <yulang-row :gutter="20">
        <yulang-col :span="12" :offset="6"
          ><div class="grid-content"></div
        ></yulang-col>
      </yulang-row>
    </div>
  </template>
  
  <style lang="less" scoped>
  .grid-content {
    background-color: #d3dce6;
    height: 2rem;
  }
  
  .grid-content2 {
    background-color: #e5e9f2;
    height: 2rem;
  }
  </style>
  