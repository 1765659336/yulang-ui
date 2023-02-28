<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 当数据量过多时，使用分页分解数据。 </template>
    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <pagination-b></pagination-b>
        <template #tip>
          设置layout，表示需要显示的内容，用逗号分隔，布局元素会依次显示。prev表示上一页，next为下一页，pager表示页码列表，除此以外还提供了jumper和total，sizes。
          jumper表示跳页元素，total表示总条目数，sizes用于设置每页显示的页码数量。
        </template>
      </yulang-describe-frame>
    </template>
    <template #c>
      <yulang-describe-frame :codeStr="codeStrC">
        <pagination-c></pagination-c>
        <template #tip>
          默认情况下，当总页数超过 7 页时，Pagination
          会折叠多余的页码按钮。通过pagerCount属性可以设置最大页码按钮数。
        </template>
      </yulang-describe-frame>
    </template>
    <template #d>
      根据场景需要，可以添加其他功能模块。
      <yulang-describe-frame :codeStr="codeStrD">
        <pagination-d></pagination-d>
        <template #tip> </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint.vue";
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import PaginationB from "./components/PaginationB";
import PaginationC from "./components/PaginationC";
import PaginationD from "./components/PaginationD";
import { codeStrB, codeStrC, codeStrD } from "./data";

export default {
  name: "packages-demo-yulang-pagination",
  components: {
    YulangAnchorPoint,
    YulangDescribeFrame,
    PaginationB,
    PaginationC,
    PaginationD,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      slotArr: [
        { slotName: "a", slotTitle: "Pagination 分页", level: 1 },
        { slotName: "b", slotTitle: "基础用法", level: 2 },
        { slotName: "c", slotTitle: "设置最大页码按钮数", level: 2 },
        { slotName: "d", slotTitle: "附加功能", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
