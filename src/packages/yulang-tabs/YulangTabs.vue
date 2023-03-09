<template>
  <div :class="['packages-yulang-tab-container', type]">
    <div class="packages-yulang-tab-label-container">
      <div class="packages-yulang-tab-label-content-container">
        <div
          :class="[
            'packages-yulang-tab-label-item',
            `packages-yulang-tab-label-item-${type}`,
            item.name === value ? `is-select-${type}` : '',
            item.name !== value && type === 'border-card'
              ? 'is-select-border-card-other'
              : '',
          ]"
          v-for="item in tabLabelArr"
          :key="item.name"
          @click="tabLabelClick($event, item)"
        >
          <div
            :class="[
              item.name === value ? 'yulang-animate yulang-pull-release' : '',
            ]"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
      <div class="packages-yulang-tab-label-line"></div>
    </div>
    <div class="packages-yualang-tab-content-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yulang-tabs',
  props: {
    value: {},
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'card', 'border-card'].find(
          (item) => item === value
        );
      },
    },
    isKeepAlive: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      // tab标签数组
      tabLabelArr: [],
    };
  },
  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    // tabLabelItem点击事件
    tabLabelClick(e, tabLabelItem) {
      this.valueComputed = tabLabelItem.name;
      this.changeTabPaneShow(tabLabelItem.name);
      this.$listeners.tabClick && this.$listeners.tabClick(tabLabelItem, e);
    },
    // 切换TabPane子组件显示
    changeTabPaneShow(activeName) {
      this.$children.forEach((item) => {
        if (item.yulangComponentName === 'yulang-tab-pane') {
          if (item.name === activeName) {
            item.isShow = true;
          } else {
            item.isShow = false;
          }
        }
      });
    },
    // 初始化配置数据
    init() {
      this.$children.forEach((item) => {
        if (item.yulangComponentName === 'yulang-tab-pane') {
          this.tabLabelArr.push({ name: item.name, label: item.label });
        }
      });
    },
  },
  mounted() {
    this.init();
    this.changeTabPaneShow(this.valueComputed);
    this.$children.forEach((item) => {
      if (item.yulangComponentName === 'yulang-tab-pane') {
        item.isKeepAlive = this.isKeepAlive;
      }
    });
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
