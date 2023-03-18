<template>
  <div>
    <yulang-button @click="open1">默认</yulang-button>
    <yulang-button @click="open2">成功</yulang-button>
    <yulang-button @click="open3">警告</yulang-button>
    <yulang-button @click="open4">错误</yulang-button>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$yulangMessage("这是一条消息提示");
    },
    open2() {
      this.$yulangMessage({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },
    open3() {
      this.$yulangMessage({
        message: "警告哦，这是一条警告消息",
        type: "warning",
      });
    },
    open4() {
      this.$yulangMessage.error("错了哦，这是一条错误消息");
    },
  },
};
</script>

<style lang="less" scoped></style>
