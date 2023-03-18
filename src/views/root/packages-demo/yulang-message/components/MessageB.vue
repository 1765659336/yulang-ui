<template>
  <div>
    <yulang-button @click="btn">打开消息提示</yulang-button>
    <yulang-button @click="vNodeBtn">vNode</yulang-button>
  </div>
</template>

<script>
export default {
  methods: {
    btn() {
      this.$yulangMessage({
        message: "这是一条消息提示",
        type: "success",
      });
    },
    vNodeBtn() {
      this.$yulangMessage({
        message: "会被替换",
        type: "success",
        vNode: this.$createElement("span", "内容可以是 VNode"),
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
