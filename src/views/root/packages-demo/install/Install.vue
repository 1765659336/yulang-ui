<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #b>
      <yulang-describe-frame :codeStr="npmCodeStr">
        推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
      </yulang-describe-frame>
    </template>
    <template #c>
      <yulang-describe-frame :codeStr="codeStrC">
        你些许也可以使用脚手架下载带有yulang-ui的vue2项目模板来使用
      </yulang-describe-frame>
    </template>
    <template #d>
      <yulang-describe-frame :codeStr="textStr">
        目前可以通过 http://101.132.70.183:10010/yulang-ui-dist
        获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。
      </yulang-describe-frame>
    </template>
    <template #e>
      <yulang-describe-frame :codeStr="codeStr">
        <a href="http://101.132.70.183:10010/cdnIndex.html" target="_blank"
          >查看页面演示</a
        >
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint";
import { npmCodeStr, codeStr, textStr, codeStrC } from "./data";
export default {
  name: "packages-demo-install",
  components: {
    YulangAnchorPoint,
  },
  data() {
    return {
      npmCodeStr,
      codeStr,
      textStr,
      codeStrC,
      slotArr: [
        { slotName: "a", slotTitle: "安装", level: 1 },
        { slotName: "b", slotTitle: "npm安装", level: 2 },
        { slotName: "c", slotTitle: "脚手架", level: 2 },
        { slotName: "d", slotTitle: "CDN", level: 2 },
        { slotName: "e", slotTitle: "Hello World", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
