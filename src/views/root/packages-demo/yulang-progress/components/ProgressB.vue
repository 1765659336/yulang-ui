<template>
  <div>
    <yulang-progress
      :style="{ width: '350px' }"
      :percentage="50"
    ></yulang-progress>
    <yulang-progress
      :style="{ width: '350px' }"
      :percentage="100"
      :format="format"
    ></yulang-progress>
    <yulang-progress
      :style="{ width: '350px' }"
      :percentage="100"
      status="success"
    ></yulang-progress>
    <yulang-progress
      :style="{ width: '350px' }"
      :percentage="100"
      status="warning"
    ></yulang-progress>
    <yulang-progress
      :style="{ width: '350px' }"
      :percentage="100"
      status="exception"
    ></yulang-progress>
  </div>
</template>

<script>
export default {
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : percentage + '%';
    },
  },
};
</script>

<style lang="less" scoped></style>
