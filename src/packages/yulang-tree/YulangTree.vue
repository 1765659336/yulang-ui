<template>
  <div class="packages-yulang-tree-container">
    <div v-for="(dataItem, index) in dataComputed" :key="index">
      <div class="packages-yulang-tree-container-item">
        <yulang-checkbox
          v-if="showCheckbox"
          v-model="dataItem.yulangIsCheck"
          @click="checkboxClick(dataItem)"
        ></yulang-checkbox>
        <div
          class="packages-yulang-tree-node"
          :style="{ '--level--': level }"
          @click="nodeClick(dataItem)"
        >
          <i
            class="iconfont icon-chevron-down"
            v-if="dataItem.yulangIsOpen"
          ></i>
          <i
            class="iconfont icon-chevron-right"
            v-if="dataItem[props.children] && !dataItem.yulangIsOpen"
          ></i>
          {{ dataItem[props.label] }}
        </div>
      </div>
      <yulang-tree
        v-show="dataItem[props.children] && dataItem.yulangIsOpen"
        v-model="dataItem[props.children]"
        :props="props"
        :level="level + 1"
        :showCheckbox="showCheckbox"
        :nodeKey="nodeKey ? nodeKey : ''"
        :defaultOpenKeys="defaultOpenKeys ? defaultOpenKeys : []"
        :defaultCheckKeys="defaultCheckKeys ? defaultCheckKeys : []"
        @nodeClick="$listeners.nodeClick ? $listeners.nodeClick : () => {}"
      ></yulang-tree>
    </div>
  </div>
</template>

<script>
import { uuid, recursion } from "@/packages/lib";
import { nextTick } from "vue";
export default {
  name: "yulang-tree",
  model: {
    prop: "data",
    event: "dataChange",
  },
  props: {
    // 树原始数据
    data: {
      type: Array,
    },
    // 树数据配置字段
    props: {
      type: Object,
      default: () => {
        return {
          children: "children",
          label: "label",
        };
      },
    },
    // 当前treeNode的级别
    level: {
      type: Number,
      default() {
        return 1;
      },
    },
    // 是否可勾选
    showCheckbox: {
      type: Boolean,
      default: false,
    },
    // 树数据唯一key
    nodeKey: {
      type: String,
    },
    // 默认展开节点数组
    defaultOpenKeys: {
      type: Array,
    },
    // 默认选中节点数组
    defaultCheckKeys: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  computed: {
    dataComputed: {
      get() {
        return this.data;
      },
      set(value) {
        this.$emit("dataChange", value);
      },
    },
  },
  methods: {
    // 节点点击事件
    nodeClick(dataItem) {
      // 如果有子节点
      if (dataItem[this.props.children]) {
        // 切换子节点的显示状态
        this.dataComputed = this.dataComputed.map((item) => {
          if (item.yulangKey === dataItem.yulangKey) {
            item.yulangIsOpen = !item.yulangIsOpen;
          }
          return item;
        });
      }
      //   节点被点击的回调
      this.$listeners.nodeClick && this.$listeners.nodeClick(dataItem);
    },
    // 节点勾选点击事件
    checkboxClick(dataItem) {
      this.dataComputed = this.dataComputed.map((item) => {
        if (item.yulangKey === dataItem.yulangKey) {
          // 如果勾选的值为true,则需要将所有的子元素渲染出来
          if (!item.yulangIsCheck) {
            recursion(item, this.props.children, "yulangIsOpen", true);
          }
          nextTick(() => {
            // 父级勾选选中或取消，将子级也勾选或取消
            recursion(
              item,
              this.props.children,
              "yulangIsCheck",
              !item.yulangIsCheck
            );
          });
        }
        return item;
      });
      // 勾选状态发生改变的回调
      this.$listeners.checkChange && this.$listeners.checkChange(dataItem);
    },
  },
  mounted() {
    // 初始化外部传入的数据,除非组件重新渲染，不然只会执行一次
    this.dataComputed = this.dataComputed?.map((item) => {
      item.yulangKey = uuid();
      // 如果不是叶节点
      if (item[this.props.children]) {
        item.yulangIsOpen = false;
      }
      // 如果开启可选择
      if (this.showCheckbox) {
        item.yulangIsCheck = false;
      }
      // 如果传入nodeKey且传入defaultOpenKeys
      console.log(this.nodeKey, this.defaultOpenKeys);
      if (this.nodeKey && this.defaultOpenKeys) {
        if (
          this.defaultOpenKeys.find((item2) => item2 === item[this.nodeKey])
        ) {
          item.yulangIsOpen = true;
        }
      }
      // 如果传入nodeKey且传入defaultCheckKeys
      if (this.nodeKey && this.defaultCheckKeys) {
        if (
          this.defaultCheckKeys.find((item2) => item2 === item[this.nodeKey])
        ) {
          item.yulangIsCheck = true;
        }
      }
      return item;
    });
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
