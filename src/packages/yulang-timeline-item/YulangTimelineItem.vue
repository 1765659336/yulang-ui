<template>
  <div
    class="packages-yulang-timeline-item-container"
    :style="{
      '--timeline-right-direction--':
        $parent.placement === 'up' ? 'column' : 'column-reverse',
    }"
  >
    <div class="packages-yulang-timeline-left">
      <slot name="icon">
        <div class="yulang-timeline-item-icon"></div>
      </slot>
    </div>
    <div class="packages-yulang-timeline-right">
      <div class="yulang-timelime-item-time">
        <slot name="time" :time="time">
          {{ time }}
        </slot>
      </div>
      <div class="yulang-timelime-item-content">
        <slot name="content" :content="content">
          {{ content }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "yulang-timeline-item",
  props: {
    time: {
      validator: (value) => {
        // isNaN(data)排除data为纯数字的情况（此处不考虑只有年份的日期，如‘2021’）
        return isNaN(value) && !isNaN(Date.parse(value));
      },
    },
    content: {},
  },
  data() {
    return {
      yulangComponentName: "yulang-timeline-item",
    };
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
