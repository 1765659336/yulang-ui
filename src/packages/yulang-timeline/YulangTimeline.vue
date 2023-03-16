<template>
  <div class="packages-yulang-timeline-container">
    <div class="hiddle-default-slot">
      <slot></slot>
    </div>
    <div v-if="isShow">
      <RenderDom
        v-for="(item, index) in childrenComponentArr"
        :key="index"
        :time="item.time"
        :content="item.content"
        :vNode="item.vNode"
        :placement="placement"
      ></RenderDom>
    </div>
  </div>
</template>

<script>
export default {
  name: "yulang-timeline",
  components: {
    RenderDom: {
      props: ["vNode", "time", "content", "placement"],
      data() {
        return {
          yulangComponentName: "yulang-timeline-item-render-dom",
        };
      },
      render() {
        return this.vNode;
      },
    },
  },
  props: {
    // 是否倒序
    reverse: {
      type: Boolean,
      default: true,
    },
    // 时间显示的位置
    placement: {
      default: "up",
      validator(value) {
        return ["up", "down"].find((item) => item === value);
      },
    },
  },
  data() {
    return {
      childrenComponentArr: [],
      // 手动更新插槽内容
      isShow: true,
    };
  },
  watch: {
    reverse: function () {
      this.init();
      this.isShow = false;
      this.$nextTick(() => {
        this.isShow = true;
      });
    },
  },
  methods: {
    // 升序
    ascendingOrder(a, b) {
      return new Date(a.time).getTime() - new Date(b.time).getTime();
    },
    reverseOrder(a, b) {
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    },
    // 初始化
    init() {
      const arr = [];
      this.$children.forEach((component) => {
        if (component.yulangComponentName === "yulang-timeline-item") {
          arr.push({
            vNode: component.$vnode,
            time: component.time,
            content: component.content,
          });
        }
      });
      arr.sort(this.reverse ? this.reverseOrder : this.ascendingOrder);
      this.childrenComponentArr = arr;
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-timeline-container {
  .hiddle-default-slot {
    display: none;
  }
}
</style>
