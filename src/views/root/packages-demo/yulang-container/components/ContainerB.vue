<template>
  <div>
    <yulang-container class="margin-bottom">
      <yulang-header>Header</yulang-header>
      <yulang-main>Main</yulang-main>
    </yulang-container>

    <yulang-container class="margin-bottom">
      <yulang-header>Header</yulang-header>
      <yulang-main>Main</yulang-main>
      <yulang-footer>Footer</yulang-footer>
    </yulang-container>

    <yulang-container class="margin-bottom">
      <yulang-aside width="200px">Aside</yulang-aside>
      <yulang-main>Main</yulang-main>
    </yulang-container>

    <yulang-container class="margin-bottom">
      <yulang-header>Header</yulang-header>
      <yulang-container>
        <yulang-aside width="200px">Aside</yulang-aside>
        <yulang-main>Main</yulang-main>
      </yulang-container>
    </yulang-container>

    <yulang-container class="margin-bottom">
      <yulang-header>Header</yulang-header>
      <yulang-container>
        <yulang-aside width="200px">Aside</yulang-aside>
        <yulang-container>
          <yulang-main>Main</yulang-main>
          <yulang-footer>Footer</yulang-footer>
        </yulang-container>
      </yulang-container>
    </yulang-container>

    <yulang-container class="margin-bottom">
      <yulang-aside width="200px">Aside</yulang-aside>
      <yulang-container>
        <yulang-header>Header</yulang-header>
        <yulang-main>Main</yulang-main>
      </yulang-container>
    </yulang-container>

    <yulang-container class="margin-bottom">
      <yulang-aside width="200px">Aside</yulang-aside>
      <yulang-container>
        <yulang-header>Header</yulang-header>
        <yulang-main>Main</yulang-main>
        <yulang-footer>Footer</yulang-footer>
      </yulang-container>
    </yulang-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.margin-bottom {
  margin-bottom: 20px;
}

:deep(.yulang-header-container) {
  box-shadow: 0px -1px 5px #ccc;
}
:deep(.yulang-main-container) {
  box-shadow: 0px -1px 5px #ccc;
}

:deep(.yulang-footer-container) {
  box-shadow: 0px -1px 5px #ccc;
}

:deep(.yulang-aside-container) {
  box-shadow: 0px -1px 5px #ccc;
}

:deep(.packages-yulang-container-container) {
  box-shadow: 0px -1px 5px #ccc;
}
</style>
