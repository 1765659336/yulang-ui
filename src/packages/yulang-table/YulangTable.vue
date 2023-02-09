<template>
  <div class="packages-yulang-table-container">
    <div class="packages-yulang-table-header">
      <slot></slot>
    </div>
    <div
      v-for="(item, index) in data"
      :key="index"
      class="packages-yulang-table-body"
    >
      <div
        v-for="(item2, index2) in fieldSort"
        :key="index2"
        class="packages-yulang-table-body-item"
      >
        <div :style="{ width: item2.width ? item2.width : '180px' }">
          {{ item[item2.prop] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yulang-table',
  props: {
    data: {
      type: Array,
    },
    // 没有传递宽度时，默认宽度
    minWidth: {
      default() {
        return '100px';
      },
    },
  },
  data() {
    return {
      fieldSort: [],
    };
  },
  mounted() {
    this.$children.map((item) => {
      if (item.prop) {
        this.fieldSort.push({ prop: item.prop, width: item.width });
      }
    });
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
