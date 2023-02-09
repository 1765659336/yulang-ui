<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #a>
        表示两种相互对立的状态间的切换，多用于触发「开/关」。
      </template>

      <template #b>
        <yulang-describe-frame :codeStr="codeStr">
          <!-- 基本使用 -->
          <yulang-switch v-model="value" @change="aa"></yulang-switch>
          <button @click="outerClick">外面点击</button>
        </yulang-describe-frame>
      </template>

      <template #c>
        <!-- 文字描述 -->
        <yulang-describe-frame :codeStr="codeStr2">
          <yulang-switch
            v-model="value3"
            active-text="按月付费"
            inactive-text="按年付费"
          ></yulang-switch>
        </yulang-describe-frame>
      </template>

      <template #d>
        <!-- 设置背景颜色 -->
        <yulang-describe-frame :codeStr="codeStr3">
          <yulang-switch
            v-model="value2"
            inactive-color="#84adea"
            active-color="#2e2e2e"
          ></yulang-switch>
        </yulang-describe-frame>
      </template>

      <template #e>
        <!-- 禁用设置 -->
        <yulang-describe-frame :codeStr="codeStr4">
          <yulang-switch v-model="value4" disabled></yulang-switch>
        </yulang-describe-frame>
      </template>

      <!-- 以下开始是阅读文档 -->
      <template #u></template>

      <template #v>
        <yulang-table :data="tableDataAttributes">
          <yulang-table-item prop="attributeName" label="属性名" width="100px">
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
        <yulang-table :data="tableDataEvent">
          <yulang-table-item prop="eventName" label="事件名" width="100px">
          </yulang-table-item>
          <yulang-table-item prop="explain" label="说明" width="400px">
          </yulang-table-item>
          <yulang-table-item prop="callback" label="回调值" width="300px">
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
  tableDataAttributes,
  tableDataEvent
} from './data.js';

export default {
  name: 'packages-demo-yulang-switch',
  data() {
    return {
      value: true,
      value2: false,
      value3: true,
      value4: false,
      slotArr: [
        { slotName: 'a', slotTitle: 'Switch 开关', level: 1 },
        { slotName: 'b', slotTitle: '基本用法', level: 2 },
        { slotName: 'c', slotTitle: '文字描述', level: 2 },
        { slotName: 'd', slotTitle: '背景颜色设置', level: 2 },
        { slotName: 'e', slotTitle: '禁用设置', level: 2 },
        { slotName: 'u', slotTitle: '阅读文档', level: 1 },
        { slotName: 'v', slotTitle: '属性', level: 2 },
        { slotName: 'w', slotTitle: '事件', level: 2 },
      ],
      codeStr,
      codeStr2,
      codeStr3,
      codeStr4,
      tableDataAttributes, // 属性的table数据
      tableDataEvent, // 事件的table数据
    };
  },
  methods: {
    outerClick() {
      this.value = !this.value;
    },
    aa(val) {
      console.log(val);
    },
  },
  watch: {
    // 下面这个监听只是为了打印显示
    // value(newValue) {
    //   console.log('value 值发生改变：', newValue);
    // },
  },
};
</script>

<style lang="less" scoped></style>
