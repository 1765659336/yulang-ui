<template>
  <div>
    <yulang-badge :value="200" :max="99" class="item">
      <yulang-button>评论</yulang-button>
    </yulang-badge>
    <yulang-badge :value="100" :max="10" class="item">
      <yulang-button>回复</yulang-button>
    </yulang-badge>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.item {
  margin-left: 10px;
}
</style>
