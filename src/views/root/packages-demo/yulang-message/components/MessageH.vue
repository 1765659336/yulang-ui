<template>
  <div>
    <yulang-button @click="open">创建Message</yulang-button>
    <yulang-button @click="closeAll">关闭所有</yulang-button>
  </div>
</template>

<script>
// import { YulangMessage } from "yulang-ui";
export default {
  methods: {
    open() {
      // YulangMessage("这是一条消息提示");
      this.$yulangMessage("这是一条消息提示");
    },
    closeAll() {
      // YulangMessage.closeAll();
      this.$yulangMessage.closeAll();
    },
  },
};
</script>

<style lang="less" scoped></style>
