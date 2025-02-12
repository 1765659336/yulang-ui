export const codeStrB = `
<template>
  <yulang-confirm title="这是一段内容确定删除吗？">
    <template #reference>
      <yulang-button>删除</yulang-button>
    </template>
  </yulang-confirm>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
`

export const codeStrC = `
<template>
  <yulang-confirm
    confirmButtonText="好的"
    cancelButtonText="不用了"
    icon="icon-xiaoxi"
    iconColor="red"
    title="这是一段内容确定删除吗？"
    @cancel="cancel"
    @confirm="confirm"
  >
    <el-button slot="reference">删除</el-button>
  </yulang-confirm>
</template>

<script>
export default {
  methods: {
    cancel() {
      console.log("不用了");
    },
    confirm() {
      console.log("好的");
    },
  },
};
</script>

<style lang="less" scoped></style>
`