export const codeStrB = `
<template>
  <yulang-tabs v-model="activeName" @tabClick="handleClick">
    <yulang-tab-pane label="用户管理" name="first">用户管理</yulang-tab-pane>
    <yulang-tab-pane label="配置管理" name="second">配置管理</yulang-tab-pane>
    <yulang-tab-pane label="角色管理" name="three">角色管理</yulang-tab-pane>
    <yulang-tab-pane label="定时任务补偿" name="four"
      >定时任务补偿</yulang-tab-pane
    >
  </yulang-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrC = `
<template>
  <yulang-tabs v-model="activeName" @tabClick="handleClick" type="card">
    <yulang-tab-pane label="用户管理" name="first">用户管理</yulang-tab-pane>
    <yulang-tab-pane label="配置管理" name="second">配置管理</yulang-tab-pane>
    <yulang-tab-pane label="角色管理" name="three">角色管理</yulang-tab-pane>
    <yulang-tab-pane label="定时任务补偿" name="four"
      >定时任务补偿</yulang-tab-pane
    >
  </yulang-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrD = `
<template>
  <yulang-tabs v-model="activeName" @tabClick="handleClick" type="border-card">
    <yulang-tab-pane label="用户管理" name="first">用户管理</yulang-tab-pane>
    <yulang-tab-pane label="配置管理" name="second">配置管理</yulang-tab-pane>
    <yulang-tab-pane label="角色管理" name="three">角色管理</yulang-tab-pane>
    <yulang-tab-pane label="定时任务补偿" name="four"
      >定时任务补偿</yulang-tab-pane
    >
  </yulang-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped></style>
`