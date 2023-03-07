<template>
  <div
    :class="{
      'packages-yulang-table-container': true,
      'packages-yulang-table-container__border': isShowBorder,
    }"
  >
    <div class="hidden-columns">
      <slot></slot>
    </div>
    <!-- 头部 -->
    <div class="el-table__header-wrapper">
      <table>
        <thead>
          <tr>
            <td
              v-for="(item, index) in fieldSort"
              :key="index"
              :width="minWidth"
              :class="[
                'el-table__cell',
                isShowBorder ? 'el-table__cell__border' : '',
              ]"
            >
              {{ item.label }}
            </td>
          </tr>
        </thead>
      </table>
    </div>
    <!-- 主体 -->
    <div class="el-table__body-wrapper">
      <table>
        <tbody>
          <tr v-for="(item, index1) in data.length" :key="index1">
            <td
              v-for="(item2, index2) in fieldSort"
              :key="index2"
              :width="minWidth"
              :class="[
                'el-table__cell',
                isShowBorder ? 'el-table__cell__border' : '',
              ]"
              @click="tbodyTdClick(data[item - 1])"
            >
              <!-- <div v-if="item2.el" v-YulangAddDom="item2.el"></div> -->
              <RenderDom
                v-if="item2.vNode"
                :vNode="item2.vNode"
                :el="item2.el"
                :rowData="data[index1]"
              ></RenderDom>
              <span v-else>{{
                data[index1] ? data[index1][item2.prop] : ""
              }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "yulang-table",
  components: {
    RenderDom: {
      props: ["el", "vNode", "rowData"],
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
    // 没有传递宽度时，默认宽度
    minWidth: {
      default() {
        return "180px";
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
    };
  },
  mounted() {
    this.$children.forEach((item) => {
      if (item.yulangComponentName === "yulang-table-item") {
        if (item.$vnode.child.$el.childNodes.length > 0) {
          this.fieldSort.push({
            prop: item.prop,
            width: item.width,
            label: item.label,
            vNode: item.$vnode,
            el: item.$vnode.child.$el,
          });
        } else {
          this.fieldSort.push({
            prop: item.prop,
            width: item.width,
            label: item.label,
          });
        }
      }
    });
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
