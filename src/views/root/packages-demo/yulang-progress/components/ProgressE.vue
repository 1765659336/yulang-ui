<template>
  <div>
    <yulang-progress type="circle" :percentage="0"></yulang-progress>
    <yulang-progress type="circle" :percentage="25"></yulang-progress>
    <yulang-progress
      type="circle"
      :percentage="100"
      status="success"
    ></yulang-progress>
    <yulang-progress
      type="circle"
      :percentage="70"
      status="warning"
    ></yulang-progress>
    <yulang-progress
      type="circle"
      :percentage="50"
      status="exception"
    ></yulang-progress>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
