export const codeStrB = `
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
`;

export const codeStrC = `
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
`;

export const codeStrD = `
<template>
  <div>
    <yulang-badge value="new" class="item">
      <yulang-button>评论</yulang-button>
    </yulang-badge>
    <yulang-badge value="hot" class="item">
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
`;

export const codeStrE = `
<template>
  <div>
    <yulang-badge is-dot class="item">数据查询</yulang-badge>
    <yulang-badge is-dot class="item">
      <yulang-button><i class="iconfont icon-daochu"></i></yulang-button>
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

`;
