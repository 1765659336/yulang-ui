<template>
  <div>
    <yulang-link
      @clickCallback="clickFun"
      url="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a"
      >文字描述当前窗口跳转</yulang-link
    >
    <yulang-link
      mainColor="green"
      target="_blank"
      url="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a"
      >文字描述小窗口打开</yulang-link
    >
    <yulang-link mainColor="#fc5531" :disabled="disabled">禁止点击</yulang-link>
    <yulang-link mainColor="rgba(67, 173, 127, .5)" disabled.sync="disabled"
      >禁止点击v-model</yulang-link
    >
    <yulang-link :openUnderline="false">不开启下划线</yulang-link>
    <yulang-link
      ><div
        :style="{ width: '300px', height: '300px', backgroundColor: 'red' }"
      ></div
    ></yulang-link>
  </div>
</template>

<script>
export default {
  name: "packages-demo-yulang-link",
  data() {
    return {
      disabled: true,
    };
  },
  methods: {
    clickFun(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="less" scoped></style>
