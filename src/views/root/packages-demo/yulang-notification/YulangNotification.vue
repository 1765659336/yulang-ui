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
          <yulang-button @click="showNotice">警告消息</yulang-button>
        </yulang-describe-frame>
      </template>

      <template #c>
        <yulang-describe-frame :codeStr="codeStr">
          <yulang-button @click="showNoticeTimeout('success')" type="success">
            成功消息
          </yulang-button>
          <yulang-button @click="showNoticeTimeout('fail')" type="error">
            失败消息
          </yulang-button>
          <yulang-button @click="showNoticeTimeout">警告消息</yulang-button>
        </yulang-describe-frame>
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
export default {
  name: 'packages-demo-yulang-notification',
  data() {
    return {
      slotArr: [
        { slotName: 'a', slotTitle: 'Notification 通知', level: 1 },
        { slotName: 'b', slotTitle: '基本用法', level: 2 },
        { slotName: 'c', slotTitle: '自动消失', level: 2 },
      ],
    };
  },
  methods: {
    showNotice(type) {
      this.$notification({ message: '小帅哥快来玩呀！！',type });
    },
    showNoticeTimeout(type) {
      this.$notification({ message: '小帅哥快来玩呀！！', type,timeout: 2000 });
    },
  },
};
</script>

<style lang="less" scoped></style>
