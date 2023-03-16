<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #a> 悬浮出现在页面角落，显示全局的通知提醒消息 </template>

      <template #b>
        <yulang-describe-frame :codeStr="codeStr">
          <yulang-button @click="showNotice('success')" type="success">
            成功消息
          </yulang-button>
          <yulang-button @click="showNotice('fail')" type="error">
            失败消息
          </yulang-button>
          <yulang-button @click="showNotice('warn')">警告消息</yulang-button>
        </yulang-describe-frame>
      </template>

      <template #c>
        <yulang-describe-frame :codeStr="codeStr2">
          <yulang-button @click="showNoticeTimeout('success')" type="success">
            成功消息
          </yulang-button>
          <yulang-button @click="showNoticeTimeout('fail')" type="error">
            失败消息
          </yulang-button>
          <yulang-button @click="showNoticeTimeout('warn')"
            >警告消息</yulang-button
          >
        </yulang-describe-frame>
      </template>

      <template #d>
        <yulang-describe-frame :codeStr="codeStr3">
          <yulang-button @click="showNoticeDefault()" type="success">
            成功消息
          </yulang-button>
          <yulang-button @click="showNoticeDefault()" type="error">
            失败消息
          </yulang-button>
          <yulang-button @click="showNoticeDefault()">警告消息</yulang-button>
        </yulang-describe-frame>
      </template>

      <template #e>
        <yulang-describe-frame :codeStr="codeStr4">
          <yulang-button @click="showNoticeSetTitle('success')" type="success">
            成功消息
          </yulang-button>
          <yulang-button @click="showNoticeSetTitle('fail')" type="error">
            失败消息
          </yulang-button>
          <yulang-button @click="showNoticeSetTitle('warn')"
            >警告消息</yulang-button
          >
        </yulang-describe-frame>
      </template>

      <!-- <template #f>
        <yulang-describe-frame>
          <yulang-button @click="showNoticeSetH()" type="success">
            成功消息
          </yulang-button>
        </yulang-describe-frame>
      </template> -->

      <!-- 以下开始是阅读文档 -->
      <template #u></template>

      <template #v>
        <yulang-table :data="tableDataAttributes">
          <yulang-table-item prop="attributeName" label="属性名" width="200px">
          </yulang-table-item>
          <yulang-table-item prop="explain" label="说明" width="200px">
          </yulang-table-item>
          <yulang-table-item prop="type" label="类型" width="200px">
          </yulang-table-item>
          <yulang-table-item prop="default" label="默认值" width="200px">
          </yulang-table-item>
        </yulang-table>
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
import {
  codeStr,
  codeStr2,
  codeStr3,
  codeStr4,
  tableDataAttributes,
} from './data.js';

export default {
  name: 'packages-demo-yulang-notification',
  data() {
    return {
      slotArr: [
        { slotName: 'a', slotTitle: 'Notification 通知', level: 1 },
        { slotName: 'b', slotTitle: '基本用法', level: 2 },
        { slotName: 'c', slotTitle: '自动消失', level: 2 },
        { slotName: 'd', slotTitle: '默认标题无类型', level: 2 },
        { slotName: 'e', slotTitle: '设置标题', level: 2 },
        { slotName: 'u', slotTitle: '阅读文档', level: 1 },
        { slotName: 'v', slotTitle: '属性', level: 2 },
      ],
      codeStr,
      codeStr2,
      codeStr3,
      codeStr4,
      tableDataAttributes,
    };
  },
  methods: {
    showNotice(type) {
      this.$yulangNotification({ message: '小帅哥快来玩呀！！', type });
    },
    showNoticeTimeout(type) {
      this.$yulangNotification({
        message: '小美女开始了！！',
        type,
        timeout: 3000,
      });
    },
    showNoticeDefault() {
      this.$yulangNotification({
        message: '开来玩摇摇车',
      });
    },
    showNoticeSetTitle(type) {
      this.$yulangNotification({
        title: '我是标题',
        type,
      });
    },
    // showNoticeSetH() {
    //   const h = this.$createElement;

    //   this.$yulangNotification({
    //     title: h('div', null, { default: h('div', null, 'can can need') }),
    //     title: h('div', null, { default: h('div', null, 'can can need') }),
    //     title: h('div', null,[
    //       this.$slots.default({
    //         text: '1111',
    //       }),
    //     ]),
    //   });
    // },
  },
};
</script>

<style lang="less" scoped></style>
