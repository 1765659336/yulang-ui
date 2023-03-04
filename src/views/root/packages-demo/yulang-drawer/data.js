export const codeStrB = `
<template>
  <div>
    <yulang-button @click="handle($event, 'left')">从左往右开</yulang-button>
    <yulang-button @click="handle($event, 'right')">从右往左开</yulang-button>
    <yulang-button @click="handle($event, 'top')">从上往下开</yulang-button>
    <yulang-button @click="handle($event, 'bottom')">从下往上开</yulang-button>
    <yulang-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :beforeClose="handleClose"
    >
      <span>我来啦!</span>
    </yulang-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: "left",
    };
  },
  methods: {
    handle(type) {
      this.direction = type;
    },
    handleClose(done) {
      done();
    },
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrC = `
<template>
  <div>
    <yulang-button @click="drawer = true"> 点我打开 </yulang-button>
    <yulang-drawer title="我是标题" :visible.sync="drawer" :withHeader="false">
      <span>我来啦!</span>
    </yulang-drawer>
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
    <yulang-button @click="handle($event, 'left')">从左往右开</yulang-button>
    <yulang-button @click="handle($event, 'right')">从右往左开</yulang-button>
    <yulang-button @click="handle($event, 'top')">从上往下开</yulang-button>
    <yulang-button @click="handle($event, 'bottom')">从下往上开</yulang-button>
    <yulang-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :beforeClose="handleClose"
      wrapperClosable
      width="30%"
      height="40%"
    >
      <span>我来啦!</span>
    </yulang-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: "left",
    };
  },
  methods: {
    handle(e, type) {
      this.direction = type;
      this.drawer = !this.drawer;
    },
    handleClose(done) {
      done();
    },
  },
};
</script>

<style lang="less" scoped></style>
`