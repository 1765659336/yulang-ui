<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #a></template>

      <template #b>
        <yulang-describe-frame :codeStr="codeStr">
          <yulang-checkbox
            v-model="isCheckout1"
            label="复选框"
            :disabled="false"
          />
          {{ isCheckout1 }}
          <yulang-button @click="btn">按钮</yulang-button>
          <template #tip>
            <div>v-model绑定的是是否选中</div>
            <div>label属性是左边的属性名称</div>
          </template>
        </yulang-describe-frame>
      </template>
      <template #c>
        <yulang-describe-frame :codeStr="codeStrC">
          <yulang-checkbox
            v-model="isCheckout2"
            label="复选框2"
            :disabled="true"
          />
          {{ isCheckout2 }}
          <template #tip>
            <div>disabled属性表示是否不可用</div>
          </template>
        </yulang-describe-frame>
      </template>
      <template #d>
        适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
        <yulang-describe-frame :codeStr="codeStrC">
          <yulang-checkbox-group v-model="checkList">
            <yulang-checkbox label="复选框 A"></yulang-checkbox>
            <yulang-checkbox label="复选框 B"></yulang-checkbox>
            <yulang-checkbox label="复选框 C"></yulang-checkbox>
            <yulang-checkbox label="禁用" disabled></yulang-checkbox>
            <yulang-checkbox label="选中且禁用" disabled></yulang-checkbox>
          </yulang-checkbox-group>
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
    </yulang-anchor-point>
  </div>
</template>

<script>
import { codeStr, codeStrC, tableDataAttributes } from "./data.js";

export default {
  name: "packages-yulang-checkbox",
  data() {
    return {
      isCheckout1: true,
      isCheckout2: false,
      slotArr: [
        { slotName: "a", slotTitle: "Checkbox 复选框", level: 1 },
        { slotName: "b", slotTitle: "基本使用", level: 2 },
        { slotName: "c", slotTitle: "禁用状态", level: 2 },
        { slotName: "d", slotTitle: "多选框组", level: 2 },
        { slotName: "u", slotTitle: "阅读文档", level: 1 },
        { slotName: "v", slotTitle: "属性", level: 2 },
      ],
      codeStr,
      codeStrC,
      tableDataAttributes,
      checkList: ["选中且禁用", "复选框 A"],
    };
  },
  methods: {
    btn() {
      this.isCheckout = !this.isCheckout;
    },
  },
};
</script>

<style lang="less" scoped></style>
