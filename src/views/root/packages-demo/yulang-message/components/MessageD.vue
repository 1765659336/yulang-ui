<template>
  <div>
    <yulang-button @click="open(1000)">1000毫秒关闭</yulang-button>
    <yulang-button @click="open(5000)">5000毫秒关闭</yulang-button>
  </div>
</template>

<script>
export default {
  methods: {
    open(delay) {
      this.$yulangMessage({
        message: "这是一条消息提示",
        delay,
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
