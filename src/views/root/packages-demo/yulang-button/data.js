export const codeStrB = `
<template>
  <div>
    <div class="btn-arr">
      <yulang-button @click="btn">默认按钮</yulang-button>
      <yulang-button @click="btn" type="success">成功按钮</yulang-button>
      <yulang-button @click="btn" type="danger">危险按钮</yulang-button>
      <yulang-button @click="btn" type="primary">主要按钮</yulang-button>
      <yulang-button @click="btn" type="info">信息按钮</yulang-button>
      <yulang-button @click="btn" type="warning">警告按钮</yulang-button>
    </div>
    <div class="btn-arr">
      <yulang-button @click="btn" plain>默认按钮</yulang-button>
      <yulang-button @click="btn" type="success" plain>成功按钮</yulang-button>
      <yulang-button @click="btn" type="danger" plain>危险按钮</yulang-button>
      <yulang-button @click="btn" type="primary" plain>主要按钮</yulang-button>
      <yulang-button @click="btn" type="info" plain>信息按钮</yulang-button>
      <yulang-button @click="btn" type="warning" plain>警告按钮</yulang-button>
    </div>
    <div class="btn-arr">
      <yulang-button @click="btn" round>默认按钮</yulang-button>
      <yulang-button @click="btn" type="success" round>成功按钮</yulang-button>
      <yulang-button @click="btn" type="danger" round>危险按钮</yulang-button>
      <yulang-button @click="btn" type="primary" round>主要按钮</yulang-button>
      <yulang-button @click="btn" type="info" round>信息按钮</yulang-button>
      <yulang-button @click="btn" type="warning" round>警告按钮</yulang-button>
    </div>
    <div class="btn-arr">
      <yulang-button @click="btn" round>默认按钮</yulang-button>
      <yulang-button @click="btn" type="success" circle>成功按钮</yulang-button>
      <yulang-button @click="btn" type="danger" circle>危险按钮</yulang-button>
      <yulang-button @click="btn" type="primary" circle>主要按钮</yulang-button>
      <yulang-button @click="btn" type="info" circle>信息按钮</yulang-button>
      <yulang-button @click="btn" type="warning" circle>警告按钮</yulang-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btn() {
      this.$yulangMessage({
        message: "点击事件",
        type: "success",
        close,
        delay: 1500,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.btn-arr {
  margin: 10px 0;
}
</style>
`;

export const codeStrC = `
<template>
  <div>
    <yulang-button size="mini">默认按钮</yulang-button>
    <yulang-button size="small" type="success">成功按钮</yulang-button>
    <yulang-button size="medium" type="danger">危险按钮</yulang-button>
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
    <yulang-button disabled>默认按钮</yulang-button>
    <yulang-button disabled type="success">成功按钮</yulang-button>
    <yulang-button disabled type="danger">危险按钮</yulang-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
`;

export const codeStrE = `
<template>
  <div>
    <yulang-button @click="changeLoading">切换加载状态</yulang-button>
    <yulang-button type="success" :loading="loading">成功按钮</yulang-button>
    <yulang-button type="danger" :loading="loading2">危险按钮</yulang-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      loading2: true,
    };
  },
  methods: {
    changeLoading() {
      this.loading = !this.loading;
      this.loading2 = !this.loading2;
    },
  },
};
</script>

<style lang="less" scoped></style>
`;

export const tableDataAttributes = [
  {
    attributeName: "disabled",
    explain: "控制按钮是否禁用",
    type: "Boolean",
    default: false,
  },
  {
    attributeName: "type",
    explain: "设置按钮的主题",
    type: "String(default、success、info、primary、danger、warning)",
    default: "default",
  },
  {
    attributeName: "size",
    explain: "设置按钮的大小",
    type: "String(medium、small、mini)",
    default: "medium",
  },
  {
    attributeName: "isOpenClickAnimate",
    explain: "是否开启点击动画",
    type: "Boolean",
    default: true,
  },
];
