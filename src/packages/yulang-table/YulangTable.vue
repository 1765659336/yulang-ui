<template>
  <div
    :class="{
      'packages-yulang-table-container': true,
      'packages-yulang-table-container__border': isShowBorder,
    }"
    :style="{ '--width--': width }"
    ref="tableContainer"
  >
    <div class="hidden-columns">
      <slot></slot>
    </div>
    <!-- 头部 -->
    <div
      class="yulang-table__header-wrapper"
      :class="isShowBorder ? 'yulang-table__header-border' : ''"
      ref="titleTableRef"
    >
      <table :width="computedTable" border="0" cellpadding="0" cellspacing="0">
        <thead>
          <tr class="yulang-table__title__tbody">
            <td
              v-for="(item, index) in fieldSort"
              :key="index"
              :width="bisectRemainWidth"
              :style="[getWidthInfo(item.width), computedFixedPosition(index)]"
              :class="[
                'yulang-table__cell',
                'yulang-table__cell__title',
                isShowBorder ? 'yulang-table__cell__border' : '',
                item.width ? 'table-cell-width' : '',
              ]"
            >
              <div v-if="item.type === 'radio'"></div>
              <yulang-checkbox
                v-else-if="item.type === 'checkbox'"
                @change="headCheckChange"
                v-model="headCheckbox"
              ></yulang-checkbox>
              <div v-else>{{ item.label }}</div>
            </td>
          </tr>
        </thead>
      </table>
    </div>
    <!-- 主体 -->
    <div
      class="yulang-table__body-wrapper"
      :style="{ '--data-height--': dataHeight }"
      ref="dataTableRef"
    >
      <table :width="computedTable" border="0" cellpadding="0" cellspacing="0">
        <tbody class="yulang-table__data__tbody">
          <tr
            v-for="(item, index1) in tableData.length"
            :key="index1"
            class="yulang-table__data__tr"
          >
            <td
              v-for="(item2, index2) in fieldSort"
              :key="index2"
              :width="bisectRemainWidth"
              :style="[
                getWidthInfo(item2.width),
                computedFixedPosition(index2),
              ]"
              :class="[
                'yulang-table__cell',
                index2 === 0 && isShowBorder ? 'yulang-table__cell__first' : '',
                isShowBorder ? 'yulang-table__cell__border' : '',
                item2.width ? 'table-cell-width' : '',
              ]"
            >
              <!-- @click="tbodyTdClick(tableData[item - 1])" -->
              <!-- <div v-if="item2.el" v-YulangAddDom="item2.el"></div> -->
              <yulang-radio
                v-if="item2.type === 'radio'"
                :label="item2.index2"
                v-model="tableData[index1]._yulangIsRadio"
              ></yulang-radio>
              <yulang-checkbox
                v-else-if="item2.type === 'checkbox'"
                v-model="tableData[index1]._yulangIsCheckbox"
              ></yulang-checkbox>
              <div v-else>
                <RenderDom
                  v-if="item2.vNode"
                  :vNode="item2.vNode"
                  :el="item2.el"
                  :rowData="tableData[index1]"
                ></RenderDom>
                <div v-else>
                  {{ tableData[index1] ? tableData[index1][item2.prop] : "" }}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 底部 -->
    <div>
      <table :width="computedTable" border="0" cellpadding="0" cellspacing="0">
        <tfoot class="yulang-table__data__tfoot">
          <tr
            v-for="(item, index1) in footerMethod(data, fieldSort)"
            :key="index1"
          >
            <td
              v-for="(item2, index2) in fieldSort"
              :key="index2"
              :width="bisectRemainWidth"
              :style="[
                getWidthInfo(item2.width),
                computedFixedPosition(index2),
              ]"
              :class="[
                'yulang-table__cell',
                index2 === 0 && isShowBorder ? 'yulang-table__cell__first' : '',
                isShowBorder ? 'yulang-table__cell__border' : '',
                item2.width ? 'table-cell-width' : '',
              ]"
            >
              {{ item[index2] }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import YulangRadio from "@/packages/yulang-radio/YulangRadio.vue";
import YulangCheckbox from "@/packages/yulang-checkbox/YulangCheckbox.vue";

export default {
  name: "yulang-table",
  components: {
    YulangRadio,
    YulangCheckbox,
    RenderDom: {
      props: ["el", "vNode", "rowData"],
      render() {
        return this.vNode;
      },
    },
  },
  props: {
    data: {
      type: Array,
    },
    // table宽度
    width: {
      type: String,
      default() {
        return "100%";
      },
    },
    // table高度,当高度小于数据显示高度，会自动开启滚动
    height: {
      type: String,
      default() {
        return "auto";
      },
    },
    // 没有传递宽度时，默认item宽度
    minWidth: {
      default() {
        return "100px";
      },
    },
    // 是否显示边框
    isShowBorder: {
      default() {
        return false;
      },
    },
    // 是否显示底部汇总
    isShowFooter: {
      type: Boolean,
      default() {
        return false;
      },
    },
    // 底部汇总数据
    footerMethod: {
      type: Function,
      default() {
        return [];
      },
    },
    // 开启底部汇总时，首列宽度
    footerTitleWidth: {
      default: "50px",
    },
  },
  data() {
    return {
      // 表格内部基于外部传入的data处理过后得到新的数据
      tableData: [],
      fieldSort: [],
      // 向左固定时，各item距离right的px
      fixedPosition: [],
      fixedStratIndex: 0,
      // 是否开启内容区滚动监听
      isListenScroll: false,
      // 标题的宽度，因为内容区会有滚动，要基于内容区宽度决定
      dataHeight: 0,
      // 头部多选框绑定的值
      headCheckbox: false,
    };
  },
  computed: {
    // 平分剩下宽度
    bisectRemainWidth() {
      // 没有设置宽度的item个数
      let noSetWidth = 0;
      // 每个设置width项的总和
      const sum = this.fieldSort.reduce((pre, item) => {
        if (item.wicomputedTabledth) {
          return pre + parseFloat(item.width.split("px")[0]);
        }
        noSetWidth++;
        return pre;
      }, 0);
      const tableWidth = this.$refs.tableContainer.clientWidth;
      // 如果有边框，还需要减去边框的宽度
      const borderWidth = this.isShowBorder ? this.fieldSort.length : 0;
      const computedWidth = (tableWidth - sum - borderWidth) / noSetWidth;
      // 判断平均分的宽度是否小于最小宽度，如果小于最小宽度则用最小宽度
      return computedWidth > this.minWidth.split("px")[0]
        ? computedWidth - 10 + "px"
        : this.minWidth;
    },
    // 计算table是否超出100%
    computedTable() {
      // 这个table宽度是每一个width属性的总和，没设width为minwidth
      const allWidth = this.fieldSort.reduce((pre, item) => {
        if (item.width) {
          return pre + parseFloat(item.width.split("px")[0]);
        } else {
          return pre + parseFloat(this.minWidth.split("px")[0]);
        }
      }, 0);
      const tableWidth = this.$refs?.tableContainer?.clientWidth;
      return allWidth > tableWidth ? allWidth + "px" : "auto";
    },
    // 设置fixed的位置信息
    computedFixedPosition() {
      return function (index) {
        if (this.fieldSort[index].fixed === "right") {
          return {
            position: "sticky",
            right: this.fixedPosition[index] + "px",
            backgroundColor: "inherit",
          };
        }
      };
    },
  },
  methods: {
    // 设置定义了width属性的宽度
    getWidthInfo(width) {
      return {
        "--cell-width--": width,
        "--cell-min-width--": this.minWidth,
      };
    },
    // 计算fixed的累加宽度
    setFixedWidth() {
      // 距离右边的距离
      let rightDistance = 0;
      let fixedStratIndex = this.fieldSort.length;
      for (let i = this.fieldSort.length - 1; i >= 0; i--) {
        if (this.fieldSort[i].fixed === "right") {
          this.fixedPosition.unshift(rightDistance);
          rightDistance =
            rightDistance + this.fieldSort[i].width
              ? parseFloat(this.fieldSort[i].width.split("px")[0])
              : this.minWidth;
        } else {
          this.fixedPosition.unshift(rightDistance);
        }
      }
      // 表示从第几个开始固定
      this.fixedStratIndex = fixedStratIndex;
    },
    // 设置data内容区的滚动监听
    setScrollListen() {
      this.$refs.dataTableRef.addEventListener("scroll", () => {
        this.$refs.titleTableRef.scrollLeft =
          this.$refs.dataTableRef.scrollLeft;
      });
    },
    //设置data区的高度
    setDataHeight() {
      if (this.height === "auto") {
        this.dataHeight = "auto";
      } else {
        this.dataHeight =
          parseFloat(this.height.split("px")[0]) -
          this.$refs?.titleTableRef?.clientHeight +
          "px";
      }
    },
    // 初始化table内部数据
    initTableData() {
      this.tableData = this.data.map((item) => {
        item._yulangIsRadio = false;
        item._yulangIsCheckbox = false;
        return item;
      });
    },
    // 初始化渲染dom
    initDom() {
      this.$children.forEach((item) => {
        if (item.yulangComponentName === "yulang-table-item") {
          if (item.$vnode.child.$el.childNodes.length > 0) {
            if (item.type === "radio" || item.type === "checkbox") {
              this.fieldSort.unshift({
                prop: item.prop,
                width: item.width,
                label: item.label,
                fixed: item.fixed,
                vNode: item.$vnode,
                type: item.type,
              });
            } else {
              this.fieldSort.push({
                prop: item.prop,
                width: item.width,
                label: item.label,
                fixed: item.fixed,
                vNode: item.$vnode,
              });
            }
          } else {
            if (item.type === "radio" || item.type === "checkbox") {
              this.fieldSort.unshift({
                prop: item.prop,
                width: item.width,
                label: item.label,
                fixed: item.fixed,
                type: item.type,
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
        }
      });
      if (this.isShowFooter) {
        this.fieldSort.unshift({
          type: "footer",
          fixed: "left",
        });
      }
    },
    // 获取单选的数据
    getRadioData() {
      return this.tableData.find((item) => item._yulangIsRadio);
    },
    // 获取多选的数据
    getCheckboxData() {
      return this.tableData.filter((item) => item._yulangIsCheckbox);
    },
    // 头部多选事件
    headCheckChange(value) {
      this.tableData = this.tableData.map((item) => {
        item._yulangIsCheckbox = value;
        return item;
      });
    },
  },
  mounted() {
    this.initDom();
    this.setFixedWidth();
    this.setScrollListen();
    this.setDataHeight();
    this.initTableData();
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
