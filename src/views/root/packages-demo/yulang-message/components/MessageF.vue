<template>
  <div>
    <yulang-button @click="open(false)">不能手动关闭</yulang-button>
    <yulang-button @click="open(true)">可手动关闭</yulang-button>
  </div>
</template>

<script>
export default {
  methods: {
    open(close) {
      this.$yulangMessage({
        message: "这是一条消息提示",
        close,
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
