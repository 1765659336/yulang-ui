<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a>
      <div class="packages-demo-version-container">
        <div>
          <yulang-button @click="changeVersionArr(true)">正序</yulang-button>
          <yulang-button @click="changeVersionArr(false)">倒序</yulang-button>
        </div>
        <yulang-describe-frame
          v-for="item in versionArr"
          class="describe-frame-container"
          :codeStr="item.codeStr"
          :key="item.version"
        >
          <div class="describe-frame-default-container">
            <span>{{ item.version }}</span>
            <span>{{ item.time }}</span>
          </div>
          <template #trigger="{ isShow }">
            {{ isShow ? "收起" : "查看版本更新内容" }}</template
          >
        </yulang-describe-frame>
      </div>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
export default {
  name: "packages-demo-version",
  components: {
    YulangDescribeFrame,
  },
  data() {
    return {
      slotArr: [{ slotName: "a", slotTitle: "版本号", level: 1 }],
      versionArr: [
        {
          codeStr: "组件开发中",
          version: "0.0.0",
          time: "2023-01-31",
        },
        {
          codeStr: "组件库发布版本，可以使用,其中包括xxx,xxx...组件",
          version: "1.0.0",
          time: "2023-03-16",
        },
      ],
    };
  },
  methods: {
    // 升序
    ascendingOrder(a, b) {
      return new Date(a.time).getTime() - new Date(b.time).getTime();
    },
    reverseOrder(a, b) {
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    },
    changeVersionArr(lock) {
      lock
        ? this.versionArr.sort(this.ascendingOrder)
        : this.versionArr.sort(this.reverseOrder);
    },
  },
};
</script>

<style lang="less" scoped>
.packages-demo-version-container {
  .describe-frame-container {
    margin: 1rem;

    .describe-frame-default-container {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
