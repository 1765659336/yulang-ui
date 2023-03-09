export const codeStrB = `
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
`

export const codeStrC = `
<template>
  <yulang-timeline>
    <yulang-timeline-item
      v-for="(item, index) in activities"
      :key="index"
      :time="item.time"
      :content="item.content"
    >
      <template #icon> 节点 </template>
      <template #time="{ time }">
        <span style="color: skyblue">{{ "我是时间--" + time }}</span>
      </template>
      <template #content="{ content }">
        {{ "我是内容--" + content }}
      </template>
    </yulang-timeline-item>
  </yulang-timeline>
</template>

<script>
export default {
  data() {
    return {
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
`

export const codeStrD = `
<template>
  <div>
    <yulang-radio-group v-model="placement">
      <yulang-radio label="up">上方</yulang-radio>
      <yulang-radio label="down">下方</yulang-radio>
    </yulang-radio-group>
    <yulang-timeline :placement="placement">
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
      placement: "up",
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
`