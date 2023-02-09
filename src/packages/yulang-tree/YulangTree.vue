<template>
  <div class="packages-yulang-tree-container">
    <div v-for="(dataItem, index) in dataClone" :key="index">
      <div
        class="packages-yulang-tree-node"
        :style="{ '--level--': level }"
        @click="nodeClick(dataItem)"
      >
        <i class="iconfont icon-chevron-down" v-if="dataItem.yulangOpen"></i>
        <i
          class="iconfont icon-chevron-right"
          v-if="dataItem[props.children] && !dataItem.yulangOpen"
        ></i>
        {{ dataItem[props.label] }}
      </div>
      <yulang-tree
        v-if="dataItem[props.children] && dataItem.yulangOpen"
        :data="dataItem[props.children]"
        :props="props"
        @nodeClick="$listeners.nodeClick"
        :level="level + 1"
      ></yulang-tree>
    </div>
  </div>
</template>

<script>
import { uuid } from "@/packages/lib";
export default {
  name: "yulang-tree",
  props: {
    data: {
      type: Array,
    },
    props: {
      type: Object,
    },
    level: {
      type: Number,
      default() {
        return 1;
      },
    },
  },
  data() {
    return {
      dataClone: this.data.map((item) => {
        item.yulangKey = uuid();
        if (item[this.props.children]) {
          item.yulangOpen = false;
        }
        return item;
      }),
    };
  },
  methods: {
    nodeClick(dataItem) {
      // 如果有子节点
      if (dataItem[this.props.children]) {
        // 切换子节点的显示状态
        this.dataClone = this.dataClone.map((item) => {
          if (item.yulangKey === dataItem.yulangKey) {
            item.yulangOpen = !item.yulangOpen;
          }
          return item;
        });
      }
      //   节点被点击的回调
      this.$listeners.nodeClick(dataItem);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
