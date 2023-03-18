export const codeStrB = `
<template>
  <div>
    <yulang-button @click="btn">打开消息提示</yulang-button>
    <yulang-button @click="vNodeBtn">vNode</yulang-button>
  </div>
</template>

<script>
export default {
  methods: {
    btn() {
      this.$yulangMessage({
        message: "这是一条消息提示",
        type: "success",
      });
    },
    vNodeBtn() {
      this.$yulangMessage({
        message: "会被替换",
        type: "success",
        vNode: this.$createElement("span", "内容可以是 VNode"),
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrC = `
<template>
  <div>
    <yulang-button @click="open1">默认</yulang-button>
    <yulang-button @click="open2">成功</yulang-button>
    <yulang-button @click="open3">警告</yulang-button>
    <yulang-button @click="open4">错误</yulang-button>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$yulangMessage("这是一条消息提示");
    },
    open2() {
      this.$yulangMessage({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },
    open3() {
      this.$yulangMessage({
        message: "警告哦，这是一条警告消息",
        type: "warning",
      });
    },
    open4() {
      this.$yulangMessage.error("错了哦，这是一条错误消息");
    },
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrD = `
<template>
  <div>
    <yulang-button @click="open(1000)">1000毫秒关闭</yulang-button>
    <yulang-button @click="open(5000)">5000毫秒关闭</yulang-button>
  </div>
</template>

<script>
export default {
  methods: {
    open(delay) {
      this.$yulangMessage({
        message: "这是一条消息提示",
        delay,
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrE = `
<template>
  <div>
    <yulang-button @click="open('left')">左边</yulang-button>
    <yulang-button @click="open()">中间</yulang-button>
    <yulang-button @click="open('right')">右边</yulang-button>
  </div>
</template>

<script>
export default {
  methods: {
    open(position) {
      this.$yulangMessage({
        message: "这是一条消息提示",
        position,
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrF = `
<template>
  <div>
    <yulang-button @click="open(false)">不能手动关闭</yulang-button>
    <yulang-button @click="open(true)">可手动关闭</yulang-button>
  </div>
</template>

<script>
export default {
  methods: {
    open(close) {
      this.$yulangMessage({
        message: "这是一条消息提示",
        close,
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrH = `
<template>
  <div>
    <yulang-button @click="open">创建Message</yulang-button>
    <yulang-button @closeAll="closeAll">关闭所有</yulang-button>
  </div>
</template>

<script>
import { YulangMessage } from "yulang-ui";
export default {
  methods: {
    open() {
      YulangMessage("这是一条消息提示");
    },
    closeAll() {
      YulangMessage.closeAll();
    },
  },
};
</script>

<style lang="less" scoped></style>
`