<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #a></template>

      <template #b>
        <yulang-describe-frame :codeStr="codeStrB">
          <yulang-table :data="tableData">
            <yulang-table-item prop="date" label="日期" width="100px">
            </yulang-table-item>
            <yulang-table-item prop="name" label="姓名" width="150px">
            </yulang-table-item>
            <yulang-table-item prop="address" label="地址" width="300px">
            </yulang-table-item>
          </yulang-table>
        </yulang-describe-frame>
      </template>
      <template #c>
        <yulang-describe-frame :codeStr="codeStrC">
          <yulang-table :data="tableData" :isShowBorder="true">
            <yulang-table-item prop="date" label="日期" width="100px">
            </yulang-table-item>
            <yulang-table-item prop="name" label="姓名" width="150px">
            </yulang-table-item>
            <yulang-table-item prop="address" label="地址" width="300px">
            </yulang-table-item>
          </yulang-table>
        </yulang-describe-frame>
      </template>
      <template #d>
        <yulang-describe-frame :codeStr="codeStrD">
          <yulang-table :data="tableData" :isShowBorder="true">
            <yulang-table-item prop="date" label="日期" width="100px">
            </yulang-table-item>
            <yulang-table-item prop="name" label="姓名" width="150px">
            </yulang-table-item>
            <yulang-table-item prop="address" label="地址" width="300px">
            </yulang-table-item>
            <yulang-table-item prop="operation" label="操作" width="300px">
              <template #scope="scope">
                <yulang-button @click="handleClick(scope)">编辑</yulang-button>
                <yulang-button @click="handleClick(scope)">查看</yulang-button>
              </template>
            </yulang-table-item>
          </yulang-table>
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
} from "./data.js";

export default {
  name: "packages-demo-yulang-table",
  data() {
    return {
      slotArr: [
        { slotName: "a", slotTitle: "Table 表格", level: 1 },
        { slotName: "b", slotTitle: "基本用法", level: 2 },
        { slotName: "c", slotTitle: "带边框", level: 2 },
        { slotName: "d", slotTitle: "列插槽", level: 2 },
        { slotName: "u", slotTitle: "阅读文档", level: 1 },
        { slotName: "v", slotTitle: "Table 属性", level: 2 },
        { slotName: "w", slotTitle: "Table 插槽", level: 2 },
        { slotName: "x", slotTitle: "Table-Item 插槽", level: 2 },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
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
  methods: {
    handleClick(value) {
      this.$yulangNotification({
        message: value.scope.row,
        type: "success",
        timeout: 3000,
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
