<template>
  <div>
    <yulang-button @click="open('left')">左边</yulang-button>
    <yulang-button @click="open()">中间</yulang-button>
    <yulang-button @click="open('right')">右边</yulang-button>
  </div>
</template>

<script>
export default {
  methods: {
    open(position) {
      this.$yulangMessage({
        message: "这是一条消息提示",
        position,
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
