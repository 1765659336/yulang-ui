<template>
  <div>
    <yulang-avatar :size="60" src="https://empty" @error="errorHandler">
      <img
        src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
      />
    </yulang-avatar>
  </div>
</template>

<script>
export default {
  methods: {
    errorHandler() {
      console.log("图片加载失败");
    },
  },
};
</script>

<style lang="less" scoped></style>
