<template>
  <div class="packages-yulang-pagination-container">
    <component
      v-for="item in layout"
      :is="item"
      :key="item"
      :total="total"
      :layout="layout"
      :pageSize="pageSize"
      :pagerCount="pagerCount"
      :currentPage="currentPage"
      :pageArr="pageArr"
      :morePageArr="morePageArr"
      :currentPageComputed="currentPageComputed"
      @changeCurrentPage="changeCurrentPage"
    >
    </component>
  </div>
</template>

<script>
import prev from "./components/prev/Prev.vue";
import next from "./components/next/Next.vue";
import pager from "./components/pager/Pager.vue";
import total from "./components/total/Total.vue";
export default {
  name: "yulang-pagination",
  components: {
    prev,
    next,
    pager,
    total,
  },
  props: {
    // 总条目
    total: {
      type: Number,
      require: true,
    },
    // 使用的布局容器
    layout: {
      type: Array,
      default: () => {
        return ["pager"];
      },
    },
    // 页大小
    pageSize: {
      type: Number,
      default: 10,
    },
    // 最大页码按钮数
    pagerCount: {
      type: Number,
      default: 7,
    },
    // 当前页
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    // 页总数组
    pageArr: {
      get() {
        const arr = [];
        for (
          let index = 1;
          index <= Math.ceil(this.total / this.pageSize);
          index++
        ) {
          arr.push(index);
        }
        return arr;
      },
    },
    // 当页数大于pagerCount页时，取用的数据
    morePageArr: {
      get() {
        // 中间显示的数据长度
        const showArrLength =
          (this.pagerCount - 2) % 2 === 0
            ? this.pagerCount + 1 - 2
            : this.pagerCount - 2;
        let showArr =
          this.currentPage !== 1 &&
          this.currentPage !== this.pageArr[this.pageArr.length - 1]
            ? [this.currentPage]
            : [];
        for (let index = 1; index <= (showArrLength - 1) / 2; index++) {
          if (this.currentPage - index > 1) {
            showArr = [this.currentPage - index, ...showArr];
          }
          if (this.currentPage + index < this.pageArr.length) {
            showArr = [...showArr, this.currentPage + index];
          }
        }
        // 如果显示的数据长度不等于中间显示的数据长度，应该最后试图再去补全一次
        if (showArrLength !== showArr.length) {
          const arr = [];
          if (showArr[0] === 2) {
            for (
              let index = 1;
              index <= showArrLength - showArr.length;
              index++
            ) {
              arr.push(showArr.at(-1) + index);
            }
            showArr = [...showArr, ...arr];
          } else if (
            showArr[showArr.length - 1] ===
            this.pageArr[this.pageArr.length - 1] - 1
          ) {
            for (
              let index = 1;
              index <= showArrLength - showArr.length;
              index++
            ) {
              arr.unshift(showArr[0] - index);
            }
            showArr = [...arr, ...showArr];
          }
        }
        return showArr;
      },
    },
    // 当前页
    currentPageComputed: {
      get() {
        return this.currentPage;
      },
      set(value) {
        this.$emit("update:currentPage", value);
      },
    },
  },
  methods: {
    // 修改当前页
    changeCurrentPage(value) {
      if (value <= 1) {
        this.currentPageComputed = 1;
      } else if (value >= this.pageArr.length) {
        this.currentPageComputed = this.pageArr.length;
      } else {
        this.currentPageComputed = value;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
