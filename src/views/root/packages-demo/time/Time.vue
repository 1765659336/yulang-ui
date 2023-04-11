<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a>
      <div class="packages-demo-time-container">
        <yulang-radio-group v-model="reverse" class="radio-group-container">
          <yulang-radio :label="true">倒序</yulang-radio>
          <yulang-radio :label="false">正序</yulang-radio>
        </yulang-radio-group>
        <yulang-timeline :reverse="reverse">
          <yulang-timeline-item
            v-for="(item, index) in activities"
            :key="index"
            :time="item.time"
            :content="item.content"
          >
            <template #icon>
              <i class="iconfont icon-shijian"></i>
            </template>
            <template #time="{ time }">
              <div class="timeline-time-container">{{ time }}</div>
            </template>
            <template #content="{ content }">
              <div class="timeline-content-container">{{ content }}</div>
            </template>
          </yulang-timeline-item>
        </yulang-timeline>
      </div>
    </template>
  </yulang-anchor-point>
</template>

<script>
export default {
  name: "packages-demo-time",
  data() {
    return {
      reverse: true,
      slotArr: [{ slotName: "a", slotTitle: "时间线", level: 1 }],
      activities: [
        {
          content: "搭建仓库架子，新增开关组件",
          time: "2023-01-31",
        },
        {
          content: "新增滑块、签名板、画布、上传组件",
          time: "2023-02-01",
        },
        {
          content: "新增锚点、图标、文字链接组件，新增复制自定义指令",
          time: "2023-02-02",
        },
        {
          content: "新增描述框、回到顶部、复选框、对话框组件",
          time: "2023-02-03",
        },
        {
          content: "新增表单、表格组件",
          time: "2023-02-06",
        },
        {
          content: "新增通知框组件",
          time: "2023-02-07",
        },
        {
          content: "新增加载中指令，引导组件",
          time: "2023-02-08",
        },
        {
          content: "新增树组件",
          time: "2023-02-10",
        },
        {
          content: "新增标签页、分割线组件",
          time: "2023-02-12",
        },
        {
          content: "新增输入框组件",
          time: "2023-02-16",
        },
        {
          content: "新增弹出框组件，新增无限滚动自定义指令",
          time: "2023-02-19",
        },
        {
          content: "新增时间选择组件",
          time: "2023-02-20",
        },
        {
          content: "新增文字提示、抽屉、气泡确认框、折叠面板组件",
          time: "2023-02-21",
        },
        {
          content: "新增骨架屏组件",
          time: "2023-02-22",
        },
        {
          content: "新增单选框、单选框群组、评分、布局容器组件",
          time: "2023-02-23",
        },
        {
          content: "新增分页组件",
          time: "2023-02-28",
        },
        {
          content: "新增全局动画资源",
          time: "2023-03-01",
        },
        {
          content: "新增颜色选择器组件",
          time: "2023-03-02",
        },
        {
          content: "新增点击外部自定义指令",
          time: "2023-03-06",
        },
        {
          content: "新增时间线组件",
          time: "2023-03-10",
        },
        {
          content: "新增下拉菜单、面包屑、计数器组件",
          time: "2023-03-12",
        },
        {
          content: "新增主题切换功能",
          time: "2023-03-15",
        },
        {
          content: "新增设置弹出zIndex以及组件尺寸size默认值功能",
          time: "2023-03-16",
        },
        {
          content: "新增Message消息提示组件、Alert警告组件、Layout布局组件",
          time: "2023-03-17",
        },
        {
          content: "新增日期选择器组件",
          time: "2023-03-18",
        },
        {
          content: "新增级联选择器组件",
          time: "2023-04-01",
        },
        {
          content: "新增进度条组件",
          time: "2023-04-02",
        },
        {
          content: "新增标记组件",
          time: "2023-04-03",
        },
        {
          content: "新增头像组件",
          time: "2023-04-04",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.packages-demo-time-container {
  .radio-group-container {
    margin: 1rem 0;
  }

  :deep(.packages-yulang-timeline-left) {
    transform: translateX(50%);
    color: green;
  }
  .timeline-time-container {
    color: #1786fd;
  }

  .timeline-content-container {
    margin: 0.5rem;
    padding: 0.5rem;
    color: var(--yulang-theme-color--);
    border: 1px solid var(--yulang-theme-color--);
    border-radius: 1rem;
  }
}
</style>
