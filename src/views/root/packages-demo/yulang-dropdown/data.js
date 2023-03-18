export const codeStrB = `
<template>
  <yulang-dropdown>
    <span class="yulang-dropdown-link">
      下拉菜单<i class="iconfont icon-chevron-down"></i>
    </span>
    <template #dropdown>
      <yulang-dropdown-menu>
        <yulang-dropdown-item>黄金糕</yulang-dropdown-item>
        <yulang-dropdown-item>狮子头</yulang-dropdown-item>
        <yulang-dropdown-item>螺蛳粉</yulang-dropdown-item>
        <yulang-dropdown-item :disabled="true">双皮奶</yulang-dropdown-item>
        <yulang-dropdown-item :divided="true">蚵仔煎</yulang-dropdown-item>
      </yulang-dropdown-menu>
    </template>
  </yulang-dropdown>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.yulang-dropdown-link {
  cursor: pointer;
  color: var(--yulang-theme-color--);
}
</style>
`

export const codeStrC = `
<template>
  <div>
    <yulang-dropdown>
      <span class="yulang-dropdown-link">
        下拉菜单<i class="iconfont icon-chevron-down"></i>
      </span>
      <template #dropdown>
        <yulang-dropdown-menu>
          <yulang-dropdown-item>黄金糕</yulang-dropdown-item>
          <yulang-dropdown-item>狮子头</yulang-dropdown-item>
          <yulang-dropdown-item>螺蛳粉</yulang-dropdown-item>
          <yulang-dropdown-item :disabled="true">双皮奶</yulang-dropdown-item>
          <yulang-dropdown-item :divided="true">蚵仔煎</yulang-dropdown-item>
        </yulang-dropdown-menu>
      </template>
    </yulang-dropdown>
    <yulang-dropdown trigger="hover">
      <span class="yulang-dropdown-link">
        下拉菜单<i class="iconfont icon-chevron-down"></i>
      </span>
      <template #dropdown>
        <yulang-dropdown-menu>
          <yulang-dropdown-item>黄金糕</yulang-dropdown-item>
          <yulang-dropdown-item>狮子头</yulang-dropdown-item>
          <yulang-dropdown-item>螺蛳粉</yulang-dropdown-item>
          <yulang-dropdown-item :disabled="true">双皮奶</yulang-dropdown-item>
          <yulang-dropdown-item :divided="true">蚵仔煎</yulang-dropdown-item>
        </yulang-dropdown-menu>
      </template>
    </yulang-dropdown>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.yulang-dropdown-link {
  cursor: pointer;
  color: var(--yulang-theme-color--);
}
</style>
`

export const codeStrD = `
<template>
  <yulang-dropdown @command="commandHandle">
    <span class="yulang-dropdown-link">
      下拉菜单<i class="iconfont icon-chevron-down"></i>
    </span>
    <template #dropdown>
      <yulang-dropdown-menu>
        <yulang-dropdown-item command="黄金糕">黄金糕</yulang-dropdown-item>
        <yulang-dropdown-item command="狮子头">狮子头</yulang-dropdown-item>
        <yulang-dropdown-item command="螺蛳粉">螺蛳粉</yulang-dropdown-item>
        <yulang-dropdown-item command="双皮奶" :disabled="true"
          >双皮奶</yulang-dropdown-item
        >
        <yulang-dropdown-item command="蚵仔煎" :divided="true"
          >蚵仔煎</yulang-dropdown-item
        >
      </yulang-dropdown-menu>
    </template>
  </yulang-dropdown>
</template>

<script>
export default {
  methods: {
    commandHandle(command) {
      this.$yulangNotification({
        message: command,
        type: "success",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.yulang-dropdown-link {
  cursor: pointer;
  color: var(--yulang-theme-color--);
}
</style>
`