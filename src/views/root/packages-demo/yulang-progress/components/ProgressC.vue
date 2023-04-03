<template>
  <div>
    <yulang-progress
      :style="{ width: '350px' }"
      :text-inside="true"
      :stroke-height="30"
      :percentage="50"
    ></yulang-progress>
    <yulang-progress
      :style="{ width: '350px' }"
      :text-inside="true"
      :stroke-height="26"
      :percentage="100"
    ></yulang-progress>
    <yulang-progress
      :style="{ width: '350px' }"
      :text-inside="true"
      :stroke-height="20"
      :percentage="100"
      status="success"
    ></yulang-progress>
    <yulang-progress
      :style="{ width: '350px' }"
      :text-inside="true"
      :stroke-height="16"
      :percentage="100"
      status="warning"
    ></yulang-progress>
    <yulang-progress
      :style="{ width: '350px' }"
      :text-inside="true"
      :stroke-height="12"
      :percentage="100"
      status="exception"
    ></yulang-progress>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
