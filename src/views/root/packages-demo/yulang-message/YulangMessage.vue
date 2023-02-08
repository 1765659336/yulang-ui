<template>
  <div>
    <yulang-button @click="btn">消息提示</yulang-button>
  </div>
</template>

<script>
export default {
  name: "packages-demo-yulang-message",
  methods: {
    btn() {
      this.$YulangMessage("success", "success");
      this.$YulangMessage.error("报错", 3000, true);
    },
  },
};
</script>

<style lang="less" scoped></style>
