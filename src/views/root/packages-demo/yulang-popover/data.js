export const codeStrB = `
<template>
  <div>
    <yulang-popover
      title="标题"
      :width="100"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <yulang-button>hover 激活</yulang-button>
      </template>
    </yulang-popover>
    <yulang-popover
      title="标题"
      :width="100"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <yulang-button>click 激活</yulang-button>
      </template>
    </yulang-popover>
    <yulang-popover
      title="标题"
      :width="100"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <yulang-button>focus 激活</yulang-button>
      </template>
    </yulang-popover>
    <yulang-popover
      ref="popover4"
      title="标题"
      :width="100"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <yulang-button @click="btnClick">手动激活</yulang-button>
      </template>
    </yulang-popover>
  </div>
</template>

<script>
export default {
  methods: {
    btnClick() {
      this.$refs.popover4.showChange();
    },
  },
};
</script>

<style lang="less" scoped></style>
`