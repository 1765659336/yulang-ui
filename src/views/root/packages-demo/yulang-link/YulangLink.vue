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
          <!-- <yulang-link
            mainColor="rgba(67, 173, 127, .5)"
            disabled.sync="disabled"
            url="https://www.baidu.com"
            >禁止点击v-model</yulang-link
          > -->

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

      <!-- 以下开始是阅读文档 -->
      <template #u></template>

      <template #v>
        <yulang-table :data="tableDataAttributes">
          <yulang-table-item prop="attributeName" label="属性名" width="200px">
          </yulang-table-item>
          <yulang-table-item prop="explain" label="说明" width="200px">
          </yulang-table-item>
          <yulang-table-item prop="type" label="类型" width="200px">
          </yulang-table-item>
          <yulang-table-item prop="default" label="默认值" width="200px">
          </yulang-table-item>
        </yulang-table>
      </template>

      <template #w>
        <yulang-table :data="tableDataSlots">
          <yulang-table-item prop="slotName" label="插槽名" width="200px">
          </yulang-table-item>
          <yulang-table-item prop="explain" label="说明" width="200px">
          </yulang-table-item>
        </yulang-table>
      </template>

      <template #x>
        <yulang-table :data="tableDataEvents">
          <yulang-table-item prop="eventName" label="事件名" width="200px">
          </yulang-table-item>
          <yulang-table-item prop="explain" label="说明" width="200px">
          </yulang-table-item>
          <yulang-table-item prop="callback" label="回调参数" width="200px">
          </yulang-table-item>
        </yulang-table>
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
import {
  codeStr,
  codeStr2,
  codeStr3,
  codeStr4,
  codeStr5,
  tableDataAttributes,
  tableDataSlots,
  tableDataEvents,
} from './data.js';

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
        { slotName: 'e', slotTitle: '是否打开下划线设置', level: 2 },
        { slotName: 'f', slotTitle: '插槽使用跳转', level: 2 },
        { slotName: 'u', slotTitle: '阅读文档', level: 1 },
        { slotName: 'v', slotTitle: '属性', level: 2 },
        { slotName: 'w', slotTitle: '插槽', level: 2 },
        { slotName: 'x', slotTitle: '事件', level: 2 },
      ],
      codeStr,
      codeStr2,
      codeStr3,
      codeStr4,
      codeStr5,
      tableDataAttributes,
      tableDataSlots,
      tableDataEvents,
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
