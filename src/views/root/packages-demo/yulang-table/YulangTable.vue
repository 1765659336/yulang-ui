<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #a></template>

      <template #b>
        <yulang-describe-frame :codeStr="codeStrB">
          <table-b :tableData="tableData" />
        </yulang-describe-frame>
      </template>
      <template #c>
        <yulang-describe-frame :codeStr="codeStrC">
          <table-c :tableData="tableData" />
        </yulang-describe-frame>
      </template>
      <template #d>
        <yulang-describe-frame :codeStr="codeStrD">
          <table-d :tableData="tableData" />
        </yulang-describe-frame>
      </template>
      <template #e>
        <yulang-describe-frame :codeStr="codeStrB">
          <table-e :tableData="tableData" />
        </yulang-describe-frame>
      </template>
      <template #f>
        <yulang-describe-frame :codeStr="codeStrB">
          <table-f :tableData="tableData" />
        </yulang-describe-frame>
      </template>
      <template #g>
        <yulang-describe-frame :codeStr="codeStrB">
          <table-g :tableData="tableData" />
        </yulang-describe-frame>
      </template>
      <template #h>
        <yulang-describe-frame :codeStr="codeStrB">
          <table-h :tableData="tableData" />
        </yulang-describe-frame>
      </template>
      <template #i>
        <yulang-describe-frame :codeStr="codeStrB">
          <table-i :tableData="tableData" />
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
        <yulang-table :data="tableDataSlots">
          <yulang-table-item prop="slotName" label="插槽名" width="100px">
          </yulang-table-item>
          <yulang-table-item prop="explain" label="说明" width="250px">
          </yulang-table-item>
        </yulang-table>
      </template>

      <template #x>
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
    </yulang-anchor-point>
  </div>
</template>

<script>
import {
  codeStrB,
  codeStrC,
  codeStrD,
  tableDataAttributes,
  tableDataSlots,
  tableDataItemAttributes,
} from './data.js';
import tableB from './components/tableB.vue';
import tableC from './components/tableC.vue';
import tableD from './components/tableD.vue';
import tableE from './components/tableE.vue';
import tableF from './components/tableF.vue';
import tableG from './components/tableG.vue';
import tableH from './components/tableH.vue';
import tableI from './components/tableI.vue';

export default {
  components: {
    tableB,
    tableC,
    tableD,
    tableE,
    tableF,
    tableG,
    tableH,
    tableI,
  },
  name: 'packages-demo-yulang-table',
  data() {
    return {
      slotArr: [
        { slotName: 'a', slotTitle: 'Table 表格', level: 1 },
        { slotName: 'b', slotTitle: '基本用法', level: 2 },
        { slotName: 'c', slotTitle: '带边框', level: 2 },
        { slotName: 'd', slotTitle: '列插槽', level: 2 },
        { slotName: 'e', slotTitle: '子属性超过设置width为滚动', level: 2 },
        { slotName: 'f', slotTitle: '右端固定', level: 2 },
        { slotName: 'g', slotTitle: '表头固定', level: 2 },
        { slotName: 'h', slotTitle: '勾选', level: 2 },
        { slotName: 'i', slotTitle: '底部汇总', level: 2 },
        { slotName: 'u', slotTitle: '阅读文档', level: 1 },
        { slotName: 'v', slotTitle: 'Table 属性', level: 2 },
        { slotName: 'w', slotTitle: 'Table 插槽', level: 2 },
        { slotName: 'x', slotTitle: 'Table-Item 插槽', level: 2 },
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          sex: '男',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          sex: '男',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          sex: '男',
          address: '上海市普陀区金沙江路 1519 弄',
        },
      ],
      codeStrB,
      codeStrC,
      codeStrD,
      tableDataAttributes,
      tableDataSlots,
      tableDataItemAttributes,
    };
  },
};
</script>

<style lang="less" scoped></style>
