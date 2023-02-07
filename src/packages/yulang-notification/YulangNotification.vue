<template>
  <div class="notification-container">
    <!-- 前面的图标范围 -->
    <div class="notification-container-icon">
      <img v-if="type == 'success'" src="@/assets/images/success.svg" />
      <img v-else src="@/assets/images/fail.svg" />
    </div>

    <!-- 中间的内容区 -->
    <div class="notification-container-content">
      <div class="notification-container-content-title">
        {{ notificationText }}
      </div>
      {{ message }}
    </div>

    <!-- 尾部的删除区 -->
    <div class="notification-container-tail">
      <img
        src="@/assets/images/delete.svg"
        @click="deleteNotificationComponent"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'yulang-notification',
  data() {
    return {
      hh: '111',
    };
  },
  computed: {
    notificationText() {
      if (this.type == 'success') return '成功';
      if (this.type == 'fail') return '失败';
      return '不确定什么类型';
    },
  },
  methods: {
    deleteNotificationComponent() {
      document.querySelector('#notificationParentId').removeChild(this.$el);
    },
  },
  mounted() {
    // 如果未设置参数则持久显示
    if (this.timeout) {
      const time = setTimeout(() => {
        clearTimeout(time);
        document.querySelector('#notificationParentId').removeChild(this.$el);
      }, this.timeout);
    }
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
