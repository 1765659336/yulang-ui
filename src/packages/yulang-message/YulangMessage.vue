<template>
  <div
    :class="[
      'packages-yulang-message-container',
      `message-type-${item.type ?? 'default'}`,
      'yulang-animate',
      'yulang-fade-in-top',
    ]"
    ref="containerRef"
  >
    <slot>
      <RenderDom v-if="item.vNode" :vNode="item.vNode"></RenderDom>
      <div v-else class="yulang-message-content">{{ item.message }}</div>
      <i class="iconfont icon-guanbi" @click="closeMessage(item.uuid)" v-if="item.close"></i>
    </slot>
  </div>
</template>

<script>
export default {
  name: "yulang-message",
  props: ["closeMessage", "item"],
  components: {
    RenderDom: {
      props: ["vNode"],
      render() {
        return this.vNode;
      },
    },
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-message-container {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;

  .yulang-message-content {
    margin-right: 1rem;
  }

  .iconfont {
    cursor: pointer;
  }
}

.message-type-default {
  background-color: #edf2fc;
}

.message-type-success {
  background-color: #f0f9eb;
}

.message-type-error {
  background-color: #fef0f0;
}

.message-type-warning {
  background-color: #fdf6ec;
}
</style>
