<template>
  <div class="yulang-describe-frame-container">
    <yulang-anchor-point v-model="slotArr">
      <template #a> 用于描述组件内容的组件 </template>

      <template #b>
        <div class="yulang-describe-frame-content">
          <yulang-describe-frame :codeStr="codeStr">
            
            <yulang-describe-frame :codeStr="codeStr2">
              <yulang-switch
                v-model="value"
                active-text="按月付费"
                inactive-text="按年付费"
              >
              </yulang-switch>
            </yulang-describe-frame>

            <template #tip>
              <div>默认插槽是头部样式</div>
              <div>通过codeStr属性引入代码</div>
            </template>
          </yulang-describe-frame>
        </div>
      </template>

      <template #c>
        <div class="yulang-describe-frame-content">
          <yulang-describe-frame :codeStr="codeStr">

            <yulang-describe-frame :codeStr="codeStr2">
              <yulang-switch
                v-model="value2"
              >
              </yulang-switch>
              <template #tip>
                使用active-text属性与inactive-text属性来设置开关的文字描述。
              </template>
            </yulang-describe-frame>


            <template #tip>
              <div>#tip插槽是代码区的提示框插槽</div>
            </template>
          </yulang-describe-frame>
        </div>
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
import { codeStr, codeStr2 } from './data.js';
export default {
  name: 'packages-demo-yulang-describe-frame',
  data() {
    return {
      value: true,
      value2: true,
      codeStr,
      codeStr2,
      slotArr: [
        { slotName: 'a', slotTitle: 'DescribeFrame 描述框', level: 1 },
        { slotName: 'b', slotTitle: '基本用法', level: 2 },
        { slotName: 'c', slotTitle: '使用#tip插槽', level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
