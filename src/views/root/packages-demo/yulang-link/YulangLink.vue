<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #a> 用于跳转的组件 </template>

      <template #b>
        <yulang-describe-frame :codeStr="codeStr">
          <yulang-link @clickCallback="clickFun" url="https://www.baidu.com">
            文字描述当前窗口跳转
          </yulang-link>

          <template #tip> clickCallback是点击后的回调 </template>
        </yulang-describe-frame>
      </template>

      <template #c>
        <yulang-describe-frame :codeStr="codeStr2">
          <yulang-link
            mainColor="green"
            target="_blank"
            url="https://www.baidu.com"
          >
            文字描述小窗口打开
          </yulang-link>

          <template #tip>
            <div>mainColor设置字体颜色</div>
            <div>target设置打开方式</div>
          </template>
        </yulang-describe-frame>
      </template>

      <template #d>
        <yulang-describe-frame :codeStr="codeStr3">
          <yulang-link
            mainColor="#fc5531"
            :disabled="disabled"
            url="https://www.baidu.com"
          >
            禁止点击
          </yulang-link>
          <yulang-link
            mainColor="rgba(67, 173, 127, .5)"
            disabled.sync="disabled"
            url="https://www.baidu.com"
            >禁止点击v-model</yulang-link
          >

          <template #tip>
            <div>disabled设置是否可以跳转</div>
          </template>
        </yulang-describe-frame>
      </template>

      <template #e>
        <yulang-describe-frame :codeStr="codeStr4">
          <yulang-link :openUnderline="false" url="https://www.baidu.com"
            >不开启下划线</yulang-link
          >
        </yulang-describe-frame>
      </template>
      
      <template #f>
        <yulang-describe-frame :codeStr="codeStr5">
          <yulang-link url="https://www.baidu.com">
            <div
              :style="{
                width: '300px',
                height: '300px',
                backgroundColor: 'red',
              }"
            ></div>
          </yulang-link>
        </yulang-describe-frame>
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
import { codeStr, codeStr2, codeStr3, codeStr4, codeStr5 } from './data.js';

export default {
  name: 'packages-demo-yulang-link',
  data() {
    return {
      disabled: true,
      slotArr: [
        { slotName: 'a', slotTitle: 'Link 文字链接', level: 1 },
        { slotName: 'b', slotTitle: '基本用法', level: 2 },
        { slotName: 'c', slotTitle: '跳转方式设置', level: 2 },
        { slotName: 'd', slotTitle: '是否可以跳转设置', level: 2 },
        { slotName: 'e', slotTitle: '是否可以跳转设置', level: 2 },
        { slotName: 'f', slotTitle: 'div使用跳转', level: 2 },
      ],
      codeStr,
      codeStr2,
      codeStr3,
      codeStr4,
      codeStr5,
    };
  },
  methods: {
    clickFun(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="less" scoped></style>
