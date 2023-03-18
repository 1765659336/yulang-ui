<template>
  <div>
    <yulang-alert title="不可关闭的 alert" type="success" :closable="false">
    </yulang-alert>
    <yulang-alert title="自定义 close-text" type="info" close-text="知道了">
    </yulang-alert>
    <yulang-alert title="设置了回调的 alert" type="warning" @close="hello">
    </yulang-alert>
  </div>
</template>

<script>
export default {
  methods: {
    hello() {
      alert("Hello World!");
    },
  },
};
</script>

<style lang="less" scoped></style>
