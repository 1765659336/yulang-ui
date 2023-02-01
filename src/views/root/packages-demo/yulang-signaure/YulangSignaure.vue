<template>
  <div>
    <yulang-signaure
      @saveCallbackBase="saveCallbackBase"
      @saveCallbackBlob="saveCallbackBlob"
      :lineWidth="5"
      strokeStyle="red"
    ></yulang-signaure>
  </div>
</template>

<script>
export default {
  name: "packages-demo-yulang-signaure",
  methods: {
    saveCallbackBase(base) {
      console.log(base);
    },
    saveCallbackBlob(blob) {
      console.log(blob);
    },
  },
};
</script>

<style lang="less" scoped></style>
