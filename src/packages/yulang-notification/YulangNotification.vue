<template>
  <transition name="hh" appear>
    <div class="notification-container" v-if="isShow" :style="getIndex">
      <!-- 前面的图标范围 -->
      <div class="notification-container-icon" v-if="type">
        <img v-if="type == 'success'" src="@/assets/images/success.svg" />
        <img v-else-if="type == 'fail'" src="@/assets/images/fail.svg" />
        <img v-else src="@/assets/images/warn.svg" />
      </div>

      <!-- 中间的内容区 -->
      <div class="notification-container-content">
        <div class="notification-container-content-title">
          {{ notificationText }}
        </div>
        <!-- 外部传进来的参数消息 -->
        {{ message || '这是提示文案这是提示文案这是提示文案这是提示文案' }}
      </div>

      <!-- 尾部的删除区 -->
      <div class="notification-container-tail">
        <img
          src="@/assets/images/delete.svg"
          @click="deleteNotificationComponent"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'yulang-notification',
  /*
   * 外部传入的数据类型
   * type 消息类型
   * message 消息内容
   * title 消息标题
   * timeout 消息消息时间
   */
  data() {
    return {
      isShow: true,
    };
  },
  computed: {
    notificationText() {
      // 先判断是否传入标题
      if (this.title) {
        return this.title;
      } else {
        if (this.type == 'success') return '成功';
        if (this.type == 'fail') return '失败';
        if (this.type == 'warn') return '警告';
      }
      return '默认标题';
    },
    // 在创建初设置通知框的index值
    getIndex() {
      return {
        '--index--': this.$index.getIndex(),
      };
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
      // 判断是否这个结束时间最小不小于500ms,小于500ms则为500ms
      if (this.timeout < 500) {
        this.$nextTick(() => {
          const time = setTimeout(() => {
            clearTimeout(time);
            this.isShow = false;
          }, 500);
        });
      } else {
        this.$nextTick(() => {
          const time = setTimeout(() => {
            clearTimeout(time);
            this.isShow = false;
          }, this.timeout - 500);
        });
      }
    }
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
