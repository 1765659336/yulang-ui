<template>
  <div>
    <yulang-badge :value="12">
      <yulang-button>评论</yulang-button>
    </yulang-badge>
    <yulang-badge :value="3" class="item">
      <yulang-button>回复</yulang-button>
    </yulang-badge>
    <yulang-badge :value="1" class="item" type="primary">
      <yulang-button>评论</yulang-button>
    </yulang-badge>
    <yulang-badge :value="2" class="item" type="warning">
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
