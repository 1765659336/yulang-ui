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
      <yulang-button @click="btn" circle icon="icon-shuaxin"></yulang-button>
      <yulang-button @click="btn" type="success" circle icon="icon-zhengque"
        >成功</yulang-button
      >
      <yulang-button @click="btn" type="danger" circle icon="icon-guanbi1"
        >失败</yulang-button
      >
      <yulang-button
        @click="btn"
        type="primary"
        circle
        icon="icon-shezhi"
      ></yulang-button>
      <yulang-button
        @click="btn"
        type="info"
        circle
        icon="icon-tixing"
      ></yulang-button>
      <yulang-button
        @click="btn"
        type="warning"
        circle
        icon="icon-tishi1"
      ></yulang-button>
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
