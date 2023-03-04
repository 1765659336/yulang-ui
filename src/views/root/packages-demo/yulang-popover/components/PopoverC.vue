<template>
  <yulang-popover title="标题" :minWidth="100" trigger="hover">
    <template #reference>
      <yulang-button>hover 激活</yulang-button>
    </template>
    <template #content>
      <div :style="{ width: '200px' }">
        我是一段内容，我是一段内容，我是一段内容，我是一段内容，我是一段内容
      </div>
    </template>
  </yulang-popover>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
