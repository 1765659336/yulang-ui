<template>
  <transition name="hh" appear>
    <div class="notification-container" v-if="isShow" :style="getIndex">
      <!-- 前面的图标范围 -->
      <div class="notification-container-icon" v-if="type">
        <i
          v-if="type == 'success'"
          class="iconfont icon-chenggong notification-iconfont notification-icon-chenggong"
        ></i>
        <i
          v-else-if="type == 'fail'"
          class="iconfont icon-shibai notification-iconfont notification-icon-shibai"
        ></i>
        <i
          v-else
          class="iconfont icon-tishi notification-iconfont notification-icon-tishi"
        ></i>
        <!-- <img v-if="type == 'success'" src="@/assets/images/success.svg" />
        <img v-else-if="type == 'fail'" src="@/assets/images/fail.svg" />
        <img v-else src="@/assets/images/warn.svg" /> -->
      </div>

      <!-- 中间的内容区 -->
      <div class="notification-container-content">
        <div class="notification-container-content-title">
          {{ notificationText }}
        </div>
        <!-- 外部传进来的参数消息 -->
        {{ message }}
      </div>

      <!-- 尾部的删除区 -->
      <div class="notification-container-tail">
        <!-- <img
          src="@/assets/images/delete.svg"
          @click="deleteNotificationComponent"
        /> -->
        <i
          class="iconfont icon-guanbi notification-iconfont-guanbi"
          @click="deleteNotificationComponent"
        ></i>
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
      isShow: true
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
        '--index--': this.$yulangIndex.getIndex()
      };
    }
  },
  methods: {
    // 删除当前dom
    deleteNotificationComponent() {
      const notificationParentId = document.querySelector(
        '#notificationParentId'
      );

      this.isCloseParentHeight();

      notificationParentId?.removeChild(this.$el);
      this.deleteParentNode();
    },
    // 是否删除父元素
    deleteParentNode() {
      const notificationParentId = document.querySelector(
        '#notificationParentId'
      );

      // 最后一个,删除父元素
      if (notificationParentId.children.length <= 0) {
        notificationParentId.parentNode.removeChild(notificationParentId);
      }
    },
    // 判断是否关闭父容器高度
    isCloseParentHeight() {
      const notificationParentId = document.querySelector(
        '#notificationParentId'
      );

      // 获取margin-bottom
      const elAttribute = document.defaultView.getComputedStyle(this.$el);
      const marginBottom = elAttribute['margin-bottom'].split('px')[0];
      // 单个高度和数量,16为1em,为mrigin-bottom高度
      const heightItem = this.$el.getBoundingClientRect().height + marginBottom;
      const num = this.$el.parentNode.children.length;

      if (heightItem * (num - 1) < window.innerHeight * 0.6) {
        notificationParentId.style.height = null;
      }
    }
  },
  mounted() {
    // 如果未设置参数则持久显示
    if (this.timeout) {
      // 判断是否这个结束时间最小不小于500ms,小于500ms则为500ms
      this.$nextTick(() => {
        const time = setTimeout(
          () => {
            clearTimeout(time);
            // 在关闭之前计算高度是否超出指定，从而确定是否关闭滚动
            this.isCloseParentHeight();
            this.isShow = false;
            // 这个时间要稍微长一点，不然会认为还没删
            setTimeout(() => this.deleteParentNode(), 600);
          },
          this.timeout > 500 ? this.timeout - 500 : 500
        );
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
