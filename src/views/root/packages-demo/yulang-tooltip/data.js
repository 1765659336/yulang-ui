export const codeStrB = `
<template>
  <div class="box">
    <div class="top">
      <yulang-tooltip
        effect="dark"
        content="Top Left 提示文字"
        placement="top-start"
      >
        <yulang-button>上左</yulang-button>
      </yulang-tooltip>
      <yulang-tooltip
        effect="dark"
        content="Top Center 提示文字"
        placement="top"
      >
        <yulang-button>上中</yulang-button>
      </yulang-tooltip>
      <yulang-tooltip
        effect="dark"
        content="Top Right 提示文字"
        placement="top-end"
      >
        <yulang-button>上右</yulang-button>
      </yulang-tooltip>
    </div>
    <div class="left">
      <yulang-tooltip
        effect="dark"
        content="Left Top 提示文字"
        placement="left-start"
      >
        <yulang-button>左上</yulang-button>
      </yulang-tooltip>
      <yulang-tooltip
        effect="dark"
        content="Left Center 提示文字"
        placement="left"
      >
        <yulang-button>左中</yulang-button>
      </yulang-tooltip>
      <yulang-tooltip
        effect="dark"
        content="Left Bottom 提示文字"
        placement="left-end"
      >
        <yulang-button>左下</yulang-button>
      </yulang-tooltip>
    </div>

    <div class="right">
      <yulang-tooltip
        effect="dark"
        content="Right Top 提示文字"
        placement="right-start"
      >
        <yulang-button>右上</yulang-button>
      </yulang-tooltip>
      <yulang-tooltip
        effect="dark"
        content="Right Center 提示文字"
        placement="right"
      >
        <yulang-button>右中</yulang-button>
      </yulang-tooltip>
      <yulang-tooltip
        effect="dark"
        content="Right Bottom 提示文字"
        placement="right-end"
      >
        <yulang-button>右下</yulang-button>
      </yulang-tooltip>
    </div>
    <div class="bottom">
      <yulang-tooltip
        effect="dark"
        content="Bottom Left 提示文字"
        placement="bottom-start"
      >
        <yulang-button>下左</yulang-button>
      </yulang-tooltip>
      <yulang-tooltip
        effect="dark"
        content="Bottom Center 提示文字"
        placement="bottom"
      >
        <yulang-button>下中</yulang-button>
      </yulang-tooltip>
      <yulang-tooltip
        effect="dark"
        content="Bottom Right 提示文字"
        placement="bottom-end"
      >
        <yulang-button>下右</yulang-button>
      </yulang-tooltip>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
</style>
`

export const codeStrC = `
<template>
  <div>
    <yulang-tooltip content="Top center" placement="top">
      <yulang-button>Dark</yulang-button>
    </yulang-tooltip>
    <yulang-tooltip content="Bottom center" placement="bottom" effect="light">
      <yulang-button>Light</yulang-button>
    </yulang-tooltip>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
`

export const codeStrD = `
<template>
  <div>
    <yulang-tooltip placement="top">
      <template #content>多行信息<br />第二行信息</template>
      <yulang-button>Top center</yulang-button>
    </yulang-tooltip>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
`