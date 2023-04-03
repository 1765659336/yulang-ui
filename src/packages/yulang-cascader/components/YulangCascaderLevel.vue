<template>
  <div class="packages-yulang-cascader-level">
    <div class="packages-yulang-cascader-level-click">
      <div
        v-for="item in options"
        :key="item.value"
        @click="levelHandleClick(item)"
        :class="[
          'packages-yulang-cascader-level-click-item',
          value[level] === item.value ? 'click-select' : '',
          item.disabled ? 'click-disabled' : 'click-not-disabled',
        ]"
      >
        <span class="packages-yulang-cascader-level-click-item-content">
          {{ item.label }}
        </span>
        <i class="iconfont icon-chevron-right" v-if="item.children"></i>
      </div>
    </div>
    <yulang-cascader-level
      v-if="levelSelect?.children"
      :options="levelSelect.children"
      :changeValue="changeValue"
      :selectValue="[
        ...selectValue,
        { label: levelSelect.label, value: levelSelect.value },
      ]"
      :level="level + 1"
      :value="value"
    ></yulang-cascader-level>
  </div>
</template>

<script>
export default {
  name: "yulang-cascader-level",
  props: {
    options: {
      type: Array,
      required: true,
    },
    changeValue: {
      type: Function,
    },
    selectValue: {
      type: Array,
      required: true,
    },
    level: {
      type: Number,
      require: true,
    },
    // 级联选择器选择的数据
    value: {
      required: true,
    },
  },
  data() {
    return {
      levelSelect: null,
    };
  },
  methods: {
    levelHandleClick(item) {
      if(item.disabled){
        return;
      }
      // 点击前面级别重新渲染子级别
      this.levelSelect = null;
      this.$nextTick(() => {
        this.levelSelect = item;
        this.changeValue(
          [...this.selectValue, { label: item.label, value: item.value }],
          !item.children
        );
      });
    },
  },
  mounted() {
    this.levelSelect = this.options.find(
      (item) => item.value === this.value[this.level]
    );
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-cascader-level {
  display: flex;
  .packages-yulang-cascader-level-click {
    border-left: 1px solid #ccc;
    padding: 10px;
    .packages-yulang-cascader-level-click-item {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      .packages-yulang-cascader-level-click-item-content {
        white-space: nowrap;
      }
    }

    .click-select {
      color: var(--yulang-theme-color--);
    }

    .click-not-disabled {
      &:hover {
        background-color: var(--yulang-theme-color--);
        border-radius: 5px;
      }
    }

    .click-disabled {
      cursor: not-allowed;
      color: #ccc;
    }
  }
}
</style>
