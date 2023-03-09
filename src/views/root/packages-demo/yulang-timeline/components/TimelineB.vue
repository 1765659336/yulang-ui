<template>
  <div>
    <yulang-radio-group v-model="reverse">
      <yulang-radio :label="true">倒序</yulang-radio>
      <yulang-radio :label="false">正序</yulang-radio>
    </yulang-radio-group>
    <yulang-timeline :reverse="reverse">
      <yulang-timeline-item
        v-for="(item, index) in activities"
        :key="index"
        :time="item.time"
        :content="item.content"
      ></yulang-timeline-item>
    </yulang-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reverse: true,
      activities: [
        {
          content: "我读大学啦",
          time: "2017-09-03",
        },
        {
          content: "我在广州出生啦",
          time: "1999-07-03",
        },
        {
          content: "我开始学习写组件库啦",
          time: "2022-01-31",
        },
        {
          content: "我在吉首大学毕业啦",
          time: "2021-05-06",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
