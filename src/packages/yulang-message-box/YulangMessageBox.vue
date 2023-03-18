<template>
  <div
    :class="['packages-yulang-message-box-container', `container-${position}`]"
    ref="containerRef"
  >
    <yulang-message
      v-for="item in messageArr"
      :key="item.uuid"
      :item="item"
      :closeMessage="closeMessage"
    >
    </yulang-message>
  </div>
</template>

<script>
import YulangMessage from "@/packages/yulang-message/YulangMessage.vue";
import { uuid } from "@/packages/lib";
export default {
  name: "yulang-message-box",
  components: {
    YulangMessage,
  },
  data() {
    return {
      messageArr: [],
      // 消息提示盒子的位置
      position: null,
    };
  },
  methods: {
    addMessage(message) {
      message.uuid = uuid();
      this.messageArr.unshift(message);
      return message;
    },
    closeMessage(uuid) {
      this.messageArr = this.messageArr.filter(
        (message) => message.uuid !== uuid
      );
    },
    addDelayCloseMessage(message) {
      const messageReturn = this.addMessage(message);
      setTimeout(() => {
        this.closeMessage(messageReturn.uuid);
      }, messageReturn.delay);
    },
  },
  mounted() {
    this.$refs.containerRef.style.zIndex = this.$yulangIndex.getIndex();
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-message-box-container {
  position: fixed;
  top: 3rem;
  display: inline-block;
  max-height: 500px;
  overflow-y: scroll;
}

.container-left {
  left: 3rem;
}

.container-right {
  right: 3rem;
}

.container-center {
  left: 50%;
  transform: translateX(-50%);
}

// 将滚动条隐藏
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
</style>
