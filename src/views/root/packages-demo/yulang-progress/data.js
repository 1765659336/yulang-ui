export const codeStrB = `
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
`;

export const codeStrC = `
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
`;

export const codeStrD = `
<template>
  <div>
    <yulang-progress
      :style="{ width: '350px' }"
      :percentage="percentage"
      :color="customColor"
    ></yulang-progress>
    <yulang-progress
      :style="{ width: '350px' }"
      :percentage="percentage"
      :color="customColorMethod"
    ></yulang-progress>
    <yulang-progress
      :style="{ width: '350px' }"
      :percentage="percentage"
      :color="customColors"
    ></yulang-progress>
    <yulang-button @click="decrease">-</yulang-button>
    <yulang-button @click="increase">+</yulang-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 20,
      customColor: "#409eff",
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
    };
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
`;

export const codeStrE = `
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
`