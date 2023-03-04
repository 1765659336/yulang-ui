<template>
  <div class="table-container" ref="tableContainer">
    <div>这是table-plus组件</div>
    <!-- 头部属性区 -->
    <div class="table-header">
      <slot></slot>
    </div>
    <div v-for="rowItem in data" :key="rowItem.date" class="table-header">
      <div v-for="item in handleData" :key="item">{{ rowItem[item] }}</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import MyComp from './MyComp.vue';

export default {
  name: 'yulang-table-plus',
  data() {
    return {
      handleData: [],
    };
  },
  props: {
    data: Array,
  },
  comments: {
    MyComp,
  },
  mounted() {
    let vnode;
    this.$slots.default.map((item) => {
      this.handleData.push(item.componentOptions.propsData.prop);
      if (item.componentOptions.children) {
        vnode = item.componentOptions.children?.at(0);
      }
    });
    const CompConstructor = Vue.extend(MyComp); // Comp.vue
    const instance = new CompConstructor({
      el: document.createElement('div'),
    });
    // 或者用 new Vue() 的形式创建
    instance.$slots.default = [];
    instance.$slots.default.push(vnode)
    this.$nextTick(() => {
      this.$refs.tableContainer.appendChild(instance.$el);
    });
    // this.$refs.tableContainer.appendChild(realDom);
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
