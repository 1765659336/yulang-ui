<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #a></template>

      <template #b>
        <yulang-describe-frame :codeStr="codeStr">
          <!-- 基本使用 -->
          <yulang-slider :sliderValue.sync="sliderValue"></yulang-slider>
          <template #tip>sliderValue能设置初始值大小</template>
        </yulang-describe-frame>
      </template>

      <template #c>
        <yulang-describe-frame :codeStr="codeStr2">
          <!-- 最小步数设置-->
          <yulang-slider
            :sliderValue.sync="sliderValue2"
            :sliderStep="10"
          ></yulang-slider>

          <template #tip>sliderStep控制每一小步的距离</template>
        </yulang-describe-frame>
      </template>

      <template #d>
        <yulang-describe-frame :codeStr="codeStr3">
          <!-- 外部点击框是否打开 -->
          <yulang-slider
            :sliderValue.sync="sliderValue3"
            isOpenDigitalModulation
          ></yulang-slider>

          <template #tip
            >isOpenDigitalModulation设置是否展示外部点击框</template
          >
        </yulang-describe-frame>
      </template>

      <!-- 以下开始是阅读文档 -->
      <template #u></template>

      <template #v>
        <yulang-table :data="tableDataAttributes">
          <yulang-table-item prop="attributeName" label="属性名"  width="200px">
          </yulang-table-item>
          <yulang-table-item prop="explain" label="说明"  width="200px">
          </yulang-table-item>
          <yulang-table-item prop="type" label="类型" width="200px">
          </yulang-table-item>
          <yulang-table-item prop="default" label="默认值"  width="150px">
          </yulang-table-item>
        </yulang-table>
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
import { codeStr, codeStr2, codeStr3,tableDataAttributes } from './data.js';

export default {
  name: 'packages-demo-yulang-slider',
  data() {
    return {
      sliderValue: 8,
      sliderValue2: 0,
      sliderValue3: 0,
      slotArr: [
        { slotName: 'a', slotTitle: 'Slider 滑块', level: 1 },
        { slotName: 'b', slotTitle: '基本用法', level: 2 },
        { slotName: 'c', slotTitle: '改变每一小步大小', level: 2 },
        { slotName: 'd', slotTitle: '外部点击框', level: 2 },
        { slotName: 'u', slotTitle: '阅读文档', level: 1 },
        { slotName: 'v', slotTitle: '属性', level: 2 },
      ],
      codeStr,
      codeStr2,
      codeStr3,
      tableDataAttributes
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
