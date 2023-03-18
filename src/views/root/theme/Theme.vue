<template>
  <div>
    <yulang-anchor-point :slotArr="slotArr">
      <template #a> 组件库支持一些全局配置来实现一些个性化需求 </template>
      <template #b>
        支持使用者使用三种方式来修改主题，具体演示代码如下
      </template>
      <template #b1>
        <yulang-describe-frame :codeStr="codeStrB1">
          在引入YulangUI时，使用暴露的方法changeDefault传参修改
        </yulang-describe-frame>
      </template>
      <template #b2>
        <yulang-describe-frame :codeStr="codeStrB2">
          在自己项目中手动执行下面js代码，直接修改
        </yulang-describe-frame>
      </template>
      <template #b3>
        <yulang-describe-frame :codeStr="codeStrB3">
          手动引入一个样式文件，位置需要在YulangUI样式文件后面引入，然后样式文件中的内容如下即可修改
        </yulang-describe-frame>
      </template>
      <template #b4>
        <yulang-describe-frame :codeStr="codeStrB4">
          所支持的所有css变量
        </yulang-describe-frame>
      </template>
      <template #c>
        <yulang-describe-frame :codeStr="codeStrC">
          在引入YulangUI时，使用暴露的方法changeDefaultsize(size:String"medium"|"small"|"mini")修改
        </yulang-describe-frame>
      </template>
      <template #d>
        <yulang-describe-frame :codeStr="codeStrD">
          在引入YulangUI时，使用暴露的方法changeDefault({zIndex:Number})修改
        </yulang-describe-frame>
      </template>
      <template #e>
        <yulang-describe-frame :codeStr="codeStrE"></yulang-describe-frame>
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
import {
  codeStrB1,
  codeStrB2,
  codeStrB3,
  codeStrC,
  codeStrD,
  codeStrE,
} from './data';
export default {
  name: 'root-theme',
  data() {
    return {
      codeStrB1,
      codeStrB2,
      codeStrB3,
      codeStrC,
      codeStrD,
      codeStrE,
      slotArr: [
        { slotName: 'a', slotTitle: '资源', level: 1 },
        { slotName: 'b', slotTitle: '主题切换', level: 2 },
        { slotName: 'b1', slotTitle: '参数配置的形式', level: 3 },
        { slotName: 'b2', slotTitle: 'js手动修改', level: 3 },
        { slotName: 'b3', slotTitle: 'css变量优先级替换', level: 3 },
        { slotName: 'b4', slotTitle: '完整的css变量默认值', level: 3 },
        { slotName: 'c', slotTitle: '组件尺寸', level: 2 },
        { slotName: 'd', slotTitle: '弹出框优先级', level: 2 },
        { slotName: 'e', slotTitle: '动画时长', level: 2 },
      ],
    };
  },
};
</script>

<style></style>
