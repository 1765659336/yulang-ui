<template>
  <div
    :class="{
      'packages-yulang-table-container': true,
      'packages-yulang-table-container__border': isShowBorder,
    }"
    :style="{'--width--':width}"
    ref="tableContainer"
  >
    <div class="hidden-columns">
      <slot></slot>
    </div>
    <!-- 头部 -->
    <div
      class="el-table__header-wrapper"
      :style="setScrollX"
      ref="titleTableRef"
    >
      <table :width="computedTable" border="0" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <td
              v-for="(item, index) in fieldSort"
              :key="index"
              :width="bisectRemainWidth"
              :style="[getWidthInfo(item.width), computedFixedPosition(index)]"
              :class="[
                'el-table__cell',
                isShowBorder ? 'el-table__cell__border' : '',
                item.width ? 'table-cell-width' : '',
              ]"
            >
              {{ item.label }}
            </td>
          </tr>
        </thead>
      </table>
    </div>
    <!-- 主体 -->
    <div class="el-table__body-wrapper" ref="dataTableRef">
      <table :width="computedTable" border="0" cellpadding="0" cellspacing="0">
        <tbody>
          <tr v-for="(item, index1) in data.length" :key="index1">
            <td
              v-for="(item2, index2) in fieldSort"
              :key="index2"
              :width="bisectRemainWidth"
              :style="[
                getWidthInfo(item2.width),
                computedFixedPosition(index2),
              ]"
              :class="[
                'el-table__cell',
                isShowBorder ? 'el-table__cell__border' : '',
                item2.width ? 'table-cell-width' : '',
              ]"
            >
              <!-- @click="tbodyTdClick(data[item - 1])" -->
              <!-- <div v-if="item2.el" v-YulangAddDom="item2.el"></div> -->
              <RenderDom
                v-if="item2.vNode"
                :vNode="item2.vNode"
                :el="item2.el"
                :rowData="data[index1]"
              ></RenderDom>
              <div v-else>
                {{ data[index1] ? data[index1][item2.prop] : '' }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yulang-table',
  components: {
    RenderDom: {
      props: ['el', 'vNode', 'rowData'],
      // render(createElement) {
      render() {
        // console.log(this.rowData);
        // this.vNode.child.scope = this.rowData;
        // console.log(this.vNode,this.$children[0]);
        // this.$children[0].scope = this.rowData;
        // console.log(this.el);
        // console.log(createElement);
        return this.vNode;
        // return createElement("h1", "插槽");
      },
    },
  },
  props: {
    data: {
      type: Array,
    },
    width:{
      typr:String,
      default(){
        return '100%'
      }
    },
    // 没有传递宽度时，默认item宽度
    minWidth: {
      default() {
        return '100px';
      },
    },
    // 是否显示边框
    isShowBorder: {
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      fieldSort: [],
      // 向左固定时，各item距离right的px
      fixedPosition: [],
      // 是否开启内容区滚动监听
      isListenScroll: false,
      // 初始内容table的x轴值
      dataTableInitX: 0,
      dataTableActiveX: 0,
    };
  },
  computed: {
    // 平分剩下宽度
    bisectRemainWidth() {
      // 没有设置宽度的item个数
      let noSetWidth = 0;
      // 每个设置width项的总和
      const sum = this.fieldSort.reduce((pre, item) => {
        if (item.width) {
          return pre + parseFloat(item.width.split('px')[0]);
        }
        noSetWidth++;
        return pre;
      }, 0);
      const tableWidth = this.$refs.tableContainer.clientWidth;
      // 如果有边框，还需要减去边框的宽度
      const borderWidth = this.isShowBorder ? this.fieldSort.length : 0;
      const computedWidth = (tableWidth - sum - borderWidth) / noSetWidth;
      // 判断平均分的宽度是否小于最小宽度，如果小于最小宽度则用最小宽度
      return computedWidth > this.minWidth.split('px')[0]
        ? computedWidth + 'px'
        : this.minWidth;
      // return computedWidth + 'px';
    },
    // 计算table是否超出100%
    computedTable() {
      // 这个table宽度是每一个width属性的总和，没设width为minwidth
      const allWidth = this.fieldSort.reduce((pre, item) => {
        if (item.width) {
          return pre + parseFloat(item.width.split('px')[0]);
        } else {
          return pre + parseFloat(this.minWidth.split('px')[0]);
        }
      }, 0);
      const tableWidth = this.$refs?.tableContainer?.clientWidth;
      // 如果出现滚动条需要给data的table添加一个监听，在滑动的时候可以让title跟着同时滚动
      return allWidth > tableWidth ? allWidth + 'px' : '100%';
    },
    // 设置fixed的位置信息
    computedFixedPosition() {
      return function (index) {
        if (this.fieldSort[index].fixed === 'right') {
          // console.log(this.fieldSort[index].fixed);
          return {
            position: 'sticky',
            right: this.fixedPosition[index] + 'px',
          };
        }
      };
    },
    // 根据内容区的x轴偏移设置同步移动
    setScrollX() {
      return {
        // trans
      };
    },
  },
  methods: {
    // 设置定义了width属性的宽度
    getWidthInfo(width) {
      return {
        '--cell-width--': width,
        '--cell-min-width--': this.minWidth,
      };
    },
    // 计算fixed的累加宽度
    setFixedWidth() {
      // 距离右边的距离
      let rightDistance = 0;
      for (let i = this.fieldSort.length - 1; i >= 0; i--) {
        if (this.fieldSort[i].fixed === 'right') {
          this.fixedPosition.unshift(rightDistance);
          rightDistance =
            rightDistance + this.fieldSort[i].width
              ? parseFloat(this.fieldSort[i].width.split('px')[0])
              : this.minWidth;
        } else {
          this.fixedPosition.unshift(rightDistance);
        }
      }
    },
    // 设置data内容区的滚动监听
    setScrollListen() {
      this.$refs.dataTableRef.addEventListener('scroll', () => {
        this.$refs.titleTableRef.scrollLeft =
          this.$refs.dataTableRef.scrollLeft;
        this.dataTableActiveX =
          this.$refs.dataTableRef.getBoundingClientRect().x;
      });
    },
  },
  watch: {
    'this.$refs.dataTableRef': {
      handler(val) {
        console.log(val);
      },
      deep: true,
    },
  },
  mounted() {
    this.$children.forEach((item) => {
      if (item.yulangComponentName === 'yulang-table-item') {
        if (item.$vnode.child.$el.childNodes.length > 0) {
          this.fieldSort.push({
            prop: item.prop,
            width: item.width,
            label: item.label,
            fixed: item.fixed,
            vNode: item.$vnode,
          });
        } else {
          this.fieldSort.push({
            prop: item.prop,
            width: item.width,
            label: item.label,
            fixed: item.fixed,
          });
        }
      }
    });
    this.setFixedWidth();
    this.setScrollListen();
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
