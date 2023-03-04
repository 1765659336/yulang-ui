<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #b>
        <yulang-describe-frame :codeStr="codeStr">
          <yulang-select v-model="selectValue">
            <yulang-options :data="options"></yulang-options>
          </yulang-select>

          <template #tip>
            <div>selectValue是选择值,默认设置为空</div>
            <div>placeholder为默认占位</div>
          </template>
        </yulang-describe-frame>
      </template>

      <template #c>
        <yulang-describe-frame :codeStr="codeStr2">
          <div class="select-frame">
            <yulang-select
              v-model="selectValue2"
              placement="left"
              class="select-frame-item"
            >
              <yulang-options :data="options2"></yulang-options>
            </yulang-select>

            <yulang-select
              v-model="selectValue3"
              placement="top-end"
              class="select-frame-item"
            >
              <yulang-options :data="options2"></yulang-options>
            </yulang-select>
          </div>

          <template #tip>
            <div>placement定义弹窗打开的位置</div>
            <p>属性值为bottom, bottom-start, left-end, left, left-start,</p>
            <p>
              top-start, top, top-end, right-start, right, right-end, bottom-end
            </p>
          </template>
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
          <yulang-table-item prop="type" label="类型" width="100px">
          </yulang-table-item>
          <yulang-table-item prop="default" label="默认值" width="100px">
          </yulang-table-item>
        </yulang-table>
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
import { codeStr, codeStr2,tableDataAttributes } from './data.js';

export default {
  name: 'packages-demo-yulang-select',
  data() {
    return {
      slotArr: [
        { slotName: 'a', slotTitle: 'Select 选择框', level: 1 },
        { slotName: 'b', slotTitle: '基本用法', level: 2 },
        { slotName: 'c', slotTitle: '位置设置', level: 2 },
        { slotName: 'u', slotTitle: '阅读文档', level: 1 },
        { slotName: 'v', slotTitle: '属性', level: 2 },
      ],
      codeStr,
      codeStr2,
      tableDataAttributes,
      selectValue: '',
      selectValue2: '',
      selectValue3: '',
      options: [
        {
          name: 'KFC',
          label: 'KFC',
        },
        {
          name: '麦当劳',
          label: '麦当劳',
        },
        {
          name: '华莱士',
          label: '华莱士',
        },
        {
          name: '必胜客',
          label: '必胜客',
        },
      ],
      options2: [
        {
          name: '唱',
          label: '唱',
        },
        {
          name: '跳',
          label: '跳',
        },
        {
          name: 'RAP',
          label: 'RAP',
        },
        {
          name: '篮球',
          label: '篮球',
        },
      ],
    };
  },
  components: {
    // MyTest,
  },
};
</script>

<style lang="less" scoped>
.select-frame {
  display: flex;

  .select-frame-item {
    margin-right: 20px;
  }
}
</style>
