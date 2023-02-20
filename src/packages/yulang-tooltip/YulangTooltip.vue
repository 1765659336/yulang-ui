<template>
  <div
    class="packages-yulang-tooltip-container"
    :style="{
      '--content-container-background-color--':
        effect === 'dark' ? 'black' : 'white',
      '--content-container-color--': effect === 'dark' ? 'white' : 'black',
    }"
  >
    <yulang-popover
      trigger="hover"
      :minWidth="100"
      :placement="placement"
      :minHeight="32"
    >
      <template #reference>
        <slot></slot>
      </template>
      <template #content>
        <slot name="content"
          ><div :class="['yulang-tooltip-content-container']">
            {{ content }}
          </div></slot
        >
      </template>
    </yulang-popover>
  </div>
</template>

<script>
import YulangPopover from "@/packages/yulang-popover/YulangPopover.vue";
import { positionArr } from "@/packages/constant";

export default {
  components: { YulangPopover },
  name: "yulang-tooltip",
  props: {
    // 文字提示框中的文本
    content: {
      default: "",
    },
    // 文字提示框默认弹出的位置
    placement: {
      type: String,
      default: "bottom",
      validator(value) {
        return positionArr.find((item) => item === value);
      },
    },
    // 文字提示框主题
    effect: {
      type: String,
      default: "dark",
      validator(value) {
        return ["dark", "light"].find((item) => item === value);
      },
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
